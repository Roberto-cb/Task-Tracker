import { PrismaClient } from '@prisma/client';

// En Prisma 7, si el cargador automático falla, 
// esta es la única estructura manual que acepta sin chillar
const prisma = new PrismaClient({
  datasource: {
    url: "postgresql://postgres:postgres@localhost:5432/focusflow_db?schema=public"
  }
} as any);

async function main() {
  try {
    console.log('📡 Intentando conexión directa...');
    const newTask = await prisma.task.create({
      data: {
        title: 'Victoria contra Prisma 7',
        description: 'Conexión manual forzada',
        priority: 'HIGH',
      },
    });
    console.log('✅ ¡POR FIN! Tarea creada:', newTask);
  } catch (error) {
    console.error('❌ Error de base de datos:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();