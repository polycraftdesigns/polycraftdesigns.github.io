import type { Express } from "express";
import { createServer } from "http";
import { storage } from "./storage";
import { insertInquirySchema } from "@shared/schema";

export async function registerRoutes(app: Express) {
  app.post("/api/inquiries", async (req, res) => {
    try {
      const inquiry = insertInquirySchema.parse(req.body);
      const created = await storage.createInquiry(inquiry);
      res.status(201).json(created);
    } catch (error) {
      res.status(400).json({ error: "Invalid inquiry data" });
    }
  });

  return createServer(app);
}
