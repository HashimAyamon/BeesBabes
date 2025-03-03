import express, { request } from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import { aj } from "./lib/arcjet.js";

dotenv.config();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(helmet()); //for security
app.use(cors()); //for security
app.use(morgan("dev")); //to get consol log the requests

app.use(async (req, res, next) => {
  try {
    const decision = await aj.protect(req, {
      requested: 1,
    });
    if (decision.isDenied()) {
      if (decision.reason.isRateLimit()) {
        return res
          .status(429)
          .json({ success: false, message: "Too many requests" });
      } else if (decision.reason.isBot()) {
        res
          .status(403)
          .json({ success: false, message: "Bot detected & access denied" });
      } else {
        res.status(403).json({ success: false, message: "Access Denied" });
      }
    }

    if (
      decision.results.some(
        (result) => result.reason.isBot() && result.reason.isSpoofed()
      )
    ) {
      res
        .status(403)
        .json({ success: false, message: "spoofed bot is detected" });
      return;
    }
    next();
  } catch (error) {
    console.log("error in arcjet", error);
    next(error);
  }
});

app.use("/api/products", productRoutes);

app.listen(PORT, () => {
  console.log("Server is running on port " + PORT);
});
