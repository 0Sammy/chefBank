"use server"
import { prisma } from "@/lib/prismadb";

export default async function getCurrentLoggedInUser(email: string | any ) {

  try {

    const currentLoggedInUser = await prisma.user.findUnique({

      where: { 
        email: email 
      },
      include: {
        transactions: true
      },
    });


    return currentLoggedInUser

  } catch (error: any) {

    console.error(error);
    throw new Error (error.message);

  }
}
