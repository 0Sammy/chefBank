import { NextResponse } from "next/server";
import { prisma } from "@/lib/prismadb"; 

export async function POST (request: Request){

    const body = await request.json();

    try {


    const createAdminUtility = await prisma.utility.create({
        
        data: {
            currentCurrency: "$"  
        },
    });

    return NextResponse.json(createAdminUtility);

    }catch(error: any){
        return new NextResponse(error.message)
    }
    
}