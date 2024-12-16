import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json(
                { error: "All fields are required." },
                { status: 400 }
            );
        }

        await prisma.contactMessage.create({
            data: {
                name,
                email,
                subject,
                message,
            },
        });

        return NextResponse.json(
            { message: "Message submitted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { error: "Unable to submit message." },
            { status: 500 }
        );
    } finally {
        await prisma.$disconnect(); 
    }
}
