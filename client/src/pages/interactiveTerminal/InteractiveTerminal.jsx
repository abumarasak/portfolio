import React, { useEffect, useRef, useState } from "react";
import "./InteractiveTerminal.css";

const asciiArt = `
░██╗░░░░░░░██╗███████╗██╗░░░░░░█████╗░░█████╗░███╗░░░███╗███████╗  ████████╗░█████╗░  ███╗░░░███╗██╗░░░██╗
░██║░░██╗░░██║██╔════╝██║░░░░░██╔══██╗██╔══██╗████╗░████║██╔════╝  ╚══██╔══╝██╔══██╗  ████╗░████║╚██╗░██╔╝
░╚██╗████╗██╔╝█████╗░░██║░░░░░██║░░╚═╝██║░░██║██╔████╔██║█████╗░░  ░░░██║░░░██║░░██║  ██╔████╔██║░╚████╔╝░
░░████╔═████║░██╔══╝░░██║░░░░░██║░░██╗██║░░██║██║╚██╔╝██║██╔══╝░░  ░░░██║░░░██║░░██║  ██║╚██╔╝██║░░╚██╔╝░░
░░╚██╔╝░╚██╔╝░███████╗███████╗╚█████╔╝╚█████╔╝██║░╚═╝░██║███████╗  ░░░██║░░░╚█████╔╝  ██║░╚═╝░██║░░░██║░░░
░░░╚═╝░░░╚═╝░░╚══════╝╚══════╝░╚════╝░░╚════╝░╚═╝░░░░░╚═╝╚══════╝  ░░░╚═╝░░░░╚════╝░  ╚═╝░░░░░╚═╝░░░╚═╝░░░

██████╗░░█████╗░██████╗░████████╗███████╗░█████╗░██╗░░░░░██╗░█████╗░
██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝██╔════╝██╔══██╗██║░░░░░██║██╔══██╗
██████╔╝██║░░██║██████╔╝░░░██║░░░█████╗░░██║░░██║██║░░░░░██║██║░░██║
██╔═══╝░██║░░██║██╔══██╗░░░██║░░░██╔══╝░░██║░░██║██║░░░░░██║██║░░██║
██║░░░░░╚█████╔╝██║░░██║░░░██║░░░██║░░░░░╚█████╔╝███████╗██║╚█████╔╝
╚═╝░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░╚═╝░░░░░░╚════╝░╚══════╝╚═╝░╚════╝░
`;

function InteractiveTerminal() {
  const [lines, setLines] = useState([
    asciiArt, // Display ASCII art at the top
    "Welcome to the Terminal",
    "Error: Page not found.",
    "Type 'help' to see available commands.",
  ]);
  const [input, setInput] = useState("");
  const [state, setState] = useState({
    step: null,
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const inputRef = useRef(null);

  const handleCommand = (command) => {
    const lowerCaseCommand = command.trim().toLowerCase();

    // Handle "send-message" flow
    if (state.step === "confirmSend") {
      if (lowerCaseCommand === "y") {
        setState({ step: "getName" });
        return ["What is your name?"];
      }
      return ["Send canceled. Type 'help' to see available commands."];
    }

    if (state.step === "getName") {
      setState((prevState) => ({
        ...prevState,
        name: command,
        step: "getPhone",
      }));
      return ["What is your phone number?"];
    }

    if (state.step === "getPhone") {
      setState((prevState) => ({
        ...prevState,
        phone: command,
        step: "getEmail",
      }));
      return ["What is your email?"];
    }

    if (state.step === "getEmail") {
      setState((prevState) => ({
        ...prevState,
        email: command,
        step: "finalConfirm",
      }));
      return [
        `Name: ${state.name}`,
        `Phone: ${state.phone}`,
        `Email: ${command}`,
        "Are you sure you want to send this message to Khaled? (y/n)",
      ];
    }
    if (state.step === "finalConfirm") {
      if (lowerCaseCommand === "y") {
        setState({ step: null, name: "", phone: "", email: "" });

        return [
          "Message sent to Khaled!",
          "Type 'help' to see available commands.",
        ];
      }
      setState({ step: null, name: "", phone: "", email: "" });
      return ["Send canceled. Type 'help' to see available commands."];
    }

    switch (lowerCaseCommand) {
      case "help":
        return [
          "Available commands:",
          "  help         - Display this message",
          "  clear        - Clear the terminal",
          "  home         - Return to the homepage",
          "  send-message - Send a message to Khaled",
        ];
      case "clear":
        setLines([asciiArt]); // Reset to show only the ASCII art
        return [];
      case "home":
        window.location.href = "/";
        return ["Redirecting to homepage..."];
      case "send-message":
        setState({ step: "confirmSend" });
        return ["Do you want to send a message to Khaled? (y/n)"];
      default:
        return [
          `Unknown command: '${command}'`,
          "Type 'help' for a list of commands.",
        ];
    }
  };

  const handleInput = (e) => {
    if (e.key === "Enter") {
      const newLines = handleCommand(input);
      setLines((prevLines) => [...prevLines, `> ${input}`, ...newLines]);
      setInput("");
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div
      className="terminal-container"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Escape") {
          inputRef.current.focus();
        }
      }}
      onClick={() => inputRef.current.focus()}
    >
      <div className="terminal-output">
        {lines.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
      <div className="terminal-input-container">
        <span>Visitor@khaledhub.com:~$&nbsp;&nbsp;</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleInput}
          className="terminal-input"
          ref={inputRef}
        />
      </div>
    </div>
  );
}

export default InteractiveTerminal;
