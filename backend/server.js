import express from "express";
import cors from "cors";
import "dotenv/config.js";
import dbConnect from "./config/dbConnect.js";
import connectCloudinary from "./config/cloudinary.js";
import productRouter from "./routes/productRoutes.js";
import categoryRouter from "./routes/categoryRoutes.js";
import userRouter from "./routes/userRoutes.js";
import woodRouter from "./routes/woodRoutes.js";
import cartRouter from "./routes/cartRoutes.js";
import sendEmail from "./middlewares/NodeMailer.js";

const app = express();
const port = process.env.PORT || 4000;

// Initialize database and Cloudinary connections
dbConnect();
connectCloudinary();

app.use(express.json());
app.use(cors());

//Routes
app.post("/send-email", sendEmail);

// API endpoints
app.use("/api/product", productRouter);
app.use("/api/category", categoryRouter);
app.use("/api/user", userRouter);
app.use("/api/wood", woodRouter);
app.use("/api/cart", cartRouter);

app.get("/", (req, res) => {
  res.send("API working");
});

app.listen(port, () => console.log("Server Started on port: " + port));
