import { connectDB } from "@/lib/config/dbConnect";
import MessageModel from "@/lib/models/message.model";
import { NextResponse } from "next/server";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export const POST = async (request: Request) => {
  try {
    const message = await request.json();
    const createMessage = { ...message };

    const newMessage = await MessageModel.create(createMessage);

    return NextResponse.json(
      {
        success: true,
        message: "Message send successfully",
        data: newMessage,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error creating messages",
        errros: error,
      },
      { status: 500 }
    );
  }
};

export const GET = async () => {
  try {
    const messages = await MessageModel.find();

    return NextResponse.json(messages);
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        message: "Error eatching messages",
        errors: error,
      },
      { status: 500 }
    );
  }
};
