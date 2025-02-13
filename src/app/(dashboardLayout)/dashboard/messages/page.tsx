import { TMessage } from "@/lib/models/message.model";
import { fetchData } from "@/utils/fetchData";

const MessagesManagement = async () => {
  const messages: TMessage[] | null = await fetchData("/api/message", {
    next: {
      revalidate: 30,
    },
  });

  // console.log("messages", messages);

  return (
    <>
      <section>
        <h2 className=" text-4xl font-black text-title">Messages</h2>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          {messages &&
            messages?.map((message) => (
              <div className="bg-card custom-bg p-4 shadow" key={message._id}>
                <h3 className="text-title font-black text-md">
                  Sender: {message.name}
                </h3>
                <p className=" text-foreground text-sm">
                  Sending date:{" "}
                  <span>{new Date(message.sendTime).toLocaleString()}</span>
                </p>
                <div className=" text-foreground font-medium space-y-2 mt-4">
                  <p className=" hover:text-primaryColor link">
                    {message?.email}
                  </p>
                  <p>{message?.message}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </>
  );
};
export default MessagesManagement;
