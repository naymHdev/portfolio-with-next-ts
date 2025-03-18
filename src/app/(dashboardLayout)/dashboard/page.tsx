import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import Image from "next/image";

const DashboardPage = async () => {
  const session = await getServerSession(authOptions);
  const imageSrc = session?.user?.image ?? "/default-avatar.png";

  return (
    <div className=" md:[w-70%] mx-auto">
      <div className=" rounded-full">
        <Image
          className=" rounded-full"
          src={imageSrc}
          alt="Admin Profile"
          width={150}
          height={150}
        />
      </div>
      <h2 className=" text-lg font-black text-title mt-2">
        {session?.user?.name || "Mr. Admin"}
      </h2>
      <p className=" font-medium text-foreground link">
        {session?.user?.email || "admin1234@gmail.com"}
      </p>
    </div>
  );
};

export default DashboardPage;
