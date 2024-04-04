import { NextResponse } from "next/server";
import { prisma } from '@/lib/prismadb';

export async function POST(request: Request) {

    const body = await request.json();

    try {
        
        const {currency} = body;

        if (!currency) {
            return new NextResponse('Missing Fields', { status: 400 })
        }

        const editCurrency = await prisma.utility.update({
            where : {
                id : "660e3a25d412b09fd622ce60",
            },
            data : {
                currentCurrency: currency
            }
        })

        return NextResponse.json(editCurrency);

    } catch (error: any) {
        
        console.log({error})

        if (error instanceof Error) {
          return new NextResponse(error.message);
        } else {
          return new NextResponse('Internal Server Error', { status: 500 });
        }

    }

}