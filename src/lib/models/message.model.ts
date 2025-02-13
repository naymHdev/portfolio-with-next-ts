import mongoose, { Schema } from "mongoose";

export type TMessage = {
  _id?: string;
  name: string;
  email: string;
  message: string;
};

const MessageSchema = new Schema<TMessage>({
  name: { type: String, required: true },
  email: { type: String, required: true },
  message: { type: String, required: true },
});

const MessageModel =
  mongoose.models.project || mongoose.model("message", MessageSchema);

export default MessageModel;
