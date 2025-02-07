import DropdownNotification from "./DropdownNotification";
import DropdownUser from "./DropdownUser";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-50 flex w-full bg-white shadow-md">
      <div className="flex w-full items-center justify-between px-4 py-4 shadow-md md:px-6 2xl:px-11">
        {/* Hamburger Icon */}
        <div className="flex items-center lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-50 block rounded-sm p-2 focus:outline-none lg:hidden"
          >
            <div className="space-y-1">
              <span
                className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${props.sidebarOpen ? "rotate-45 translate-y-1.5" : ""}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${props.sidebarOpen ? "opacity-0" : "opacity-100"}`}
              ></span>
              <span
                className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${props.sidebarOpen ? "-rotate-45 -translate-y-1" : ""}`}
              ></span>
            </div>
          </button>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-end gap-4 flex-grow">
          <ul className="flex items-center gap-4">
            {/* Notification */}
            <DropdownNotification />
          </ul>
          {/* User Dropdown */}
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
