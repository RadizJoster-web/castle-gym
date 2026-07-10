const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// Imports Routers
const memberRoutes = require("./routes/memberRoutes");
const authRoutes = require("./routes/authRoutes");

// Configuration CORS
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint
app.use("/api/member", memberRoutes);
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Server backend successfully runing, start your api at /api/members",
  });
});

app.listen(port, () => {
  console.log(`Server running in development mode on http://localhost:${port}`);
});
