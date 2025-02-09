import Link from "next/link";
import { MdMenuOpen } from "react-icons/md";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex md:gap-4 font-inter bg-background">
      {/* Sidebar Drawer */}
      <input id="dashboard-drawer" type="checkbox" className="hidden peer" />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-72 custom-bg bg-background text-white shadow-lg peer-checked:translate-x-0 -translate-x-full transition-transform duration-300 lg:translate-x-0 lg:relative">
        <label
          htmlFor="dashboard-drawer"
          className="absolute top-4 right-4 lg:hidden text-white cursor-pointer"
        >
          ✖
        </label>
        <ul className="p-6 space-y-4">
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/blogs">Blog Management</Link>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-6 custom-bg bg-background transition-all duration-300">
        {/* Mobile Menu Button */}
        <label
          htmlFor="dashboard-drawer"
          className="lg:hidden fixed top-4 left-4 z-50 cursor-pointer"
        >
          <MdMenuOpen className="text-3xl text-gray-900" />
        </label>

        {/* Page Content */}
        <div className=" p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
