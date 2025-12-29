import express from "express";

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({
    service: "users-service",
    status: "running"
  });
});

app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Sadeq" },
    { id: 2, name: "Relay User" }
  ]);
});

app.listen(3003, () => {
  console.log("Users Service running on port 3003");
});
