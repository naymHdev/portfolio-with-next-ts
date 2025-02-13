import Container from "@/components/ui/Container";
import { TMessage } from "@/lib/models/message.model";
import { fetchData } from "@/utils/fetchData";

const MessagesManagement = async () => {
  const messages: TMessage[] | null = await fetchData("/api/message");

  // console.log("messages", messages);

  return (
    <>
      <section>
        <Container>
          <div className="grid md:grid-cols-2 gap-4">
            {messages &&
              messages?.map((message) => (
                <div className="bg-card custom-bg p-4" key={message._id}>
                  <h3 className="text-title font-black text-md">
                    Sender: {message.name}
                  </h3>
                  <div className=" text-foreground font-medium space-y-2 mt-4">
                    <p className=" hover:text-primaryColor link">
                      {message?.email}
                    </p>
                    <p>{message?.message}</p>
                  </div>
                </div>
              ))}
          </div>
        </Container>
      </section>
    </>
  );
};
export default MessagesManagement;
