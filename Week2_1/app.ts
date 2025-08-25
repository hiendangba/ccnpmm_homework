import dotenv from "dotenv";
dotenv.config();

import express from "express";
import type { Request, Response } from "express";
import db from "./src/models/index.js"; // import db đã init model User
import viewEngine from './src/config/viewEngine.js';

import initWebRoutes from "./src/routes/web.js"; // import web routes


const app = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middleware để parse JSON nếu bạn cần
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route thử nghiệm
app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript + Sequelize!");
});
viewEngine(app);
initWebRoutes(app);
// Hàm khởi động server
async function startServer(): Promise<void> {
  try {
    // Kết nối database
    await db.sequelize.authenticate();
    console.log("Database connected");

    // Đồng bộ model (nếu muốn tạo bảng tự động, để false nếu không cần)
    await db.sequelize.sync({ alter: true });

    // Khởi động server
    app.listen(PORT, () => {
      console.log(`Server running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("DB connection error:", err);
  }
}

startServer();
