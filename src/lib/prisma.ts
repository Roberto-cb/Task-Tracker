import { PrismaClient } from "@prisma/client";

// En la v6, esto no explota. Busca DATABASE_URL solo.
const prisma = new PrismaClient();

export default prisma;