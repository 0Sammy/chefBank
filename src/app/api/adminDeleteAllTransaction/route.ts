import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();

  try {
    const { id } = body;

    if (!id) {
      return new NextResponse("Missing Fields", { status: 400 });
    }


    const deleteTransaction = await prisma.transaction.deleteMany({

        where: {
          userId: id,
        },
      });

    return NextResponse.json(deleteTransaction);
  } catch (error: any) {
    console.log(error.message);
    return new NextResponse(error.message);
  }
}


