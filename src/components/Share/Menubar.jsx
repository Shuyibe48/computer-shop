import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Menubar = () => {
    const { user, logOut } = useContext(AuthContext)

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="bg-gray-800 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center">
                    <a href="/" className="text-white font-bold text-lg mr-4">Computer Shop</a>
                    <button
                        className="text-gray-300 hover:text-white focus:outline-none md:hidden"
                        onClick={toggleMenu}
                    >
                        <svg
                            className="h-6 w-6 fill-current"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            {isMenuOpen ? (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M19 11H5v-1h14v1zm0-6H5V4h14v1zm0 12H5v-1h14v1z"
                                />
                            ) : (
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 4h16v2H4v-2z"
                                />
                            )}
                        </svg>
                    </button>
                </div>
                <div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
                    <ul className="gap-4 space-x-4 md:space-x-0 flex flex-col md:flex-row items-center">
                        <li><Link className="font-light text-cyan-100" to="/">Home</Link></li>
                        <li><Link className="font-light text-cyan-100" to="dashboard">Dashboard</Link></li>
                        <li><Link className="font-light text-cyan-100" to="cart">Cart</Link></li>
                        <>
                            {
                                !user && <>
                                    <li><Link className="font-light text-cyan-100" to="login">Login</Link></li>
                                    <li><Link className="font-light text-cyan-100" to="signUp">SignUp</Link></li>
                                </>
                            }
                        </>
                        <>
                            {
                                user && <>
                                    <li><img className="w-8 h-8 rounded-full" src={user?.photoURL} alt="avatar" /></li>
                                    <li onClick={logOut} className="font-light text-cyan-100">Logout</li>
                                </>
                            }
                        </>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menubar;
