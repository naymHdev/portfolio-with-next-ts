import { FaSpinner } from "react-icons/fa";

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-inherit">
      <div className="flex flex-col items-center">
        <FaSpinner className="animate-spin text-blue-500 text-4xl" />
      </div>
    </div>
  );
};

export default Loading;
