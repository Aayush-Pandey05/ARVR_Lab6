const express = require("express");
const path = require("path");
const app = express();

// serve static files from the 'docs' directory
app.use(express.static(path.join(__dirname, "docs")));

// start the server
const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
