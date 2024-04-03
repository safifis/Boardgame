interface Props {
    title: string;
}

const Navbar = ({ title }: Props) => {
    return (
        <>
            <nav className="w-full z-20 top-0 start-0">
                <div className="h-16 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a
                        href="#"
                        className=" font-header flex items-center space-x-3 rtl:space-x-reverse md:order-1"
                    >
                        <span className="text-white self-center text-2xl md:text-4xl font-semibold whitespace-nowrap">
                            {title}
                        </span>
                    </a>
                    <div className="flex space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button
                            type="button"
                            className="text-white font-bold bg-white-800 bg-darkBlue hover:bg-transparent focus:ring-4 rounded-lg text-sm px-4 py-2 text-center"
                        >
                            Home
                        </button>
                    </div>
                    <div
                        className="items-center justify-between w-full hidden md:flex md:w-auto md:order-2"
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:">
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-darkBlue md:p-0 "
                                >
                                    About
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#"
                                    className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-darkBlue md:p-0"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
