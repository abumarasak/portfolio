const app = require("./server.js");

const PORT = process.env.PORT || 5000;

// Start Server
const startServer = () => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.yellow.underline.bold);
  });
};

startServer();
