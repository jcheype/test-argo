import { initTRPC } from "@trpc/server";
import { z } from "zod";

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

export const appRouter = router({
  helloWorld: publicProcedure
    .input(z.object({ name: z.string().optional() }).optional())
    .query(({ input }) => {
      const name = input?.name ?? "World";
      return {
        message: `Hello, ${name}!`,
        timestamp: new Date().toISOString(),
      };
    }),
});

export type AppRouter = typeof appRouter;
