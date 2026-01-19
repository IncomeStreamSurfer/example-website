import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const addSubmission = mutation({
    args: {
        name: v.string(),
        phone: v.string(),
        email: v.string(),
        location: v.string(),
        serviceType: v.string(),
        message: v.string(),
    },
    returns: v.id("submissions"),
    handler: async (ctx, args) => {
        const submissionId = await ctx.db.insert("submissions", {
            ...args,
            status: "PENDING",
        });
        return submissionId;
    },
});
