import bcrypt from "bcrypt"
import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"

import prisma from "../../../libs/prismadb"

export async function POST (request, response){
    try {
        const { email, username,  password } = req.body;
    
        const hashedPassword = await bcrypt.hash(password, 12);
    
        const user = await prisma.user.create({
          data: {
            email,
            username,
            hashedPassword,
          }
        });
    
        return NextResponse.json(user)
      } catch (error) {
        console.log(error);
        return NextResponse.json(400);
      }
}