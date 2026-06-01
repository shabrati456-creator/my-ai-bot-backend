const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("AI Backend Running");
});

app.post("/chat", async (req, res) => {
  const message = req.body.message;

  res.json({
    reply: "Tumne kaha: " + message
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Server running");
});
