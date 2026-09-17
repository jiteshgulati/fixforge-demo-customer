const express = require("express");

const app = express();

// Health check
app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

// Division endpoint
app.get("/api/divide", (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: "Both 'a' and 'b' must be valid numbers." });
  }

  const result = a / b;
  res.json({ result });
});

module.exports = app;
