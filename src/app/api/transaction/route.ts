import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb";

export async function POST(request: Request) {
  const body = await request.json();
  try {
    const {
      userId,
      amount,
      accountName,
      accountNumber,
      depositMethod,
      bankName,
      routingNumber,
      bankAddress,
      swiftCode,
      description,
      iban,
      isSavebox,
      saveboxAmount,
      doneByAdmin,
      adminEmail,
      status,
      customDate,
      fee,
    } = body;

    if (
      !userId ||
      !amount ||
      !depositMethod
    ) {
      return new NextResponse("Missing Fields", { status: 400 });
    }
    const data = {
      type: depositMethod,
      amount : Number(amount),
      targetAccount: accountNumber,
      targetName: accountName,
      targetBankName: bankName,
      routingNumber,
      bankAddress,
      swiftCode,
      iban,
      isSaveBox: isSavebox,
      saveBoxAmount: saveboxAmount,
      description,
      doneByAdmin,
      adminEmail,
      status,
      customCreatedTime: customDate,
      transferFee: fee,
      user: {
        connect: {
          id: userId,
        },
      },
    };
    const newTransaction = await prisma.transaction.create({
      data,
    });
    console.log("Transaction was created");
    console.log({ newTransaction });
    return NextResponse.json(newTransaction);
  } catch (error) {
    if (error instanceof Error) {
      return new NextResponse(error.message);
    } else {
      return new NextResponse("Internal Server Error", { status: 500 });
    }
  }
}
