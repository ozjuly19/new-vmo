import { PrismaClient } from "@prisma/client";

// Docs about instantiating `PrismaClient` with Next.js:
// https://pris.ly/d/help/next-js-best-practices

declare global {
    var prisma: PrismaClient;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
} else {
    if (!globalThis.prisma) {
        globalThis.prisma = new PrismaClient();
    }
    prisma = globalThis.prisma;
}

export default prisma;