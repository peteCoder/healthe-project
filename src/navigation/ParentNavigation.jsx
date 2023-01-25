import DefaultSidebar from "../components/DefaultSidebar"
import { DefaultNavbar } from "../components/DefaultNavbar"



const ParentNavigation = ({children, CustomSideBar, CustomNavbar}) => {

    const Sidebar = CustomSideBar ? CustomSideBar : DefaultSidebar;
    const Navbar = CustomNavbar ? CustomNavbar : DefaultNavbar;

    return (
        <section className="flex gap-6 overflow-x-hidden">
            <div>
                <Sidebar />
            </div>
            <div className="text-xl text-black w-full bg-backgroundGray font-semibold">
                <div>
                {/* Navbar */}
                <Navbar />

                <section className="px-4">
                    {children}
                </section>
                </div>
            </div>
        </section>
    )
}

export default ParentNavigation
