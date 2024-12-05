import { useState } from "react";
import "./Loading.css";

const Loading = ({ active }) => {
  const [loaded] = useState(active || false);
  return (
    <div className={`loading  ${loaded && "loaded"}`}>
      <div className="circle"></div>
      <div className="text">Khaled Abumarasa</div>
    </div>
  );
};

export default Loading;
