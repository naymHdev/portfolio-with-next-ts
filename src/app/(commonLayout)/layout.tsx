import Footer from "@/components/pages/Footer";
import MobileNavbar from "@/components/sidebars/MobileNavbar";
import Sidebar from "@/components/sidebars/Sidebar";

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-5">
      <div className="col-span-full lg:col-span-2 lg:h-screen">
        <div className="hidden md:flex py-4 sm:py-6 lg:py-8">
          <Sidebar />
        </div>
        <div className="md:hidden flex ">
          <MobileNavbar />
        </div>
      </div>
      <div className="col-span-full lg:col-span-3 mt-2 overflow-auto overflow-y-scroll h-screen overflow-x-hidden no-scrollbar container mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default CommonLayout;
