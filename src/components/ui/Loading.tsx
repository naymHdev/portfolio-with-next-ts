import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-inherit">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
        <p className="mt-4 text-foreground text-lg">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
