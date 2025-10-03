import express from "express";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./router.js";

const app = express();
const port = Number(process.env["PORT"]) || 3100;

// Root endpoint
app.get("/", (_req, res) => {
  res.json({
    message: "tRPC Server is running!",
    endpoints: {
      trpc: "/trpc",
      helloWorld: "/trpc/helloWorld",
    },
  });
});

// tRPC middleware
app.use(
  "/trpc",
  createExpressMiddleware({
    router: appRouter,
    createContext: () => ({}),
  })
);

app.listen(port, () => {
  console.log(`🚀 Server running on http://localhost:${port}`);
  console.log(`📡 tRPC endpoint: http://localhost:${port}/trpc`);
});
