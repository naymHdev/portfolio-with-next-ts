import Footer from "@/components/pages/Footer";
import MobileNavbar from "@/components/sidebars/MobileNavbar";
import Sidebar from "@/components/sidebars/Sidebar";

interface CommonLayoutProps {
  children: React.ReactNode;
}

const CommonLayout: React.FC<CommonLayoutProps> = ({ children }) => {
  return (
    <div>{children}</div>
  );
};

export default CommonLayout;
