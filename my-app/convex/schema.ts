import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    submissions: defineTable({
        name: v.string(),
        phone: v.string(),
        email: v.string(),
        location: v.string(),
        serviceType: v.string(),
        message: v.string(),
        status: v.string(), // e.g., "PENDING", "DISPATCHED", "RESOLVED"
    }),
});
