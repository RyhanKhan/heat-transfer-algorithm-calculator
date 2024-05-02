import express from "express";
import cors from "cors";
import path from "path";

const app = express();
app.use(express.json()); //This is going to allow json as the input for the backend

app.use(express.urlencoded({ extended: true }));

app.use(cors());

const __dirname = path.resolve();

import conductionRoutes from "./routes/conduction.route.js";
import radiationRoutes from "./routes/radiation.route.js";
import convectionRoutes from "./routes/convection.route.js";

app.use("/api/conduction", conductionRoutes);
app.use("/api/convection", convectionRoutes);
app.use("/api/radiation", radiationRoutes);

app.use(express.static(path.join(__dirname, "/client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
