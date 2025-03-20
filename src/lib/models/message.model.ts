import mongoose, { Schema } from "mongoose";

export type TMessage = {
  _id?: string;
  name: string;
  email: string;
  message: string;
  length?: number;
  sendTime: Date;
};

const MessageSchema = new Schema<TMessage>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    sendTime: { type: Date, default: new Date() },
  },
  { timestamps: true }
);

const MessageModel =
  mongoose.models.message || mongoose.model("message", MessageSchema);

export default MessageModel;
