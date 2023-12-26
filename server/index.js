import express from "express";
import viteExpress from "vite-express";
const app = express();

const PORT = 3001;

app.get("/api", (req, res) => {
  fetch("http://192.168.0.101/RealTimeData")
    .then((response) => response.json())
    .then((cahergerData) => {
      console.log("Data:", cahergerData);
      res.status(200).json(cahergerData);
    })
    .catch((e) => {
      console.error(e.message);
      res.status(403).json({ error: "Can't acces data." });
    });
});

viteExpress.listen(app, PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});
