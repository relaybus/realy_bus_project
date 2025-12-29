import express from "express";
import fetch from "node-fetch"; // إذا Node 24+، fetch موجود أصلاً
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors()); // مهم للسماح للواجهة بالاتصال

// Health check
app.get("/health", (req, res) => {
  res.json({ service: "hello-service", status: "running" });
});

// Endpoint للتواصل مع users-service
app.get("/call-users", async (req, res) => {
  try {
    const response = await fetch("http://localhost:3002/users");
    const users = await response.json();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Cannot reach users-service", details: err.message });
  }
});

app.listen(3002, () => console.log("Hello Service running on port 3002"));
