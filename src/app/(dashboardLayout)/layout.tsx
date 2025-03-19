import { DashboardMenus } from "@/components/sidebars/DashboardMenus";
import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";
import { MdMenuOpen } from "react-icons/md";

interface IDashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<IDashboardLayoutProps> = async ({ children }) => {

  const session = await getServerSession(authOptions);

  return (
    <div className="min-h-screen flex font-inter bg-background">
      {/* Sidebar Drawer */}
      <input id="dashboard-drawer" type="checkbox" className="hidden peer" />

      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-50 w-72 bg-background shadow-lg transition-transform duration-300 peer-checked:translate-x-0 -translate-x-full md:translate-x-0 md:relative md:flex md:flex-col">
        {/* Close Button for Mobile */}
        <label
          htmlFor="dashboard-drawer"
          className="absolute top-4 right-4 md:hidden text-gray-900 cursor-pointer"
        >
          ✖
        </label>

        <DashboardMenus session={session} />
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-screen p-6 transition-all duration-300">
        {/* Mobile Menu Button */}
        <label
          htmlFor="dashboard-drawer"
          className="md:hidden fixed top-4 left-4 z-50 cursor-pointer"
        >
          <MdMenuOpen className="text-4xl text-title" />
        </label>

        {/* Page Content */}
        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DashboardLayout;
