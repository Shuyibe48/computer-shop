const Footer = () => {
    return (
        <footer className="bg-gray-900">
            <div className="container mx-auto px-6 py-10">
                <div className="lg:flex">
                    <div className="w-full lg:w-1/3">
                        <h2 className="text-2xl text-white font-semibold mb-4">About Us</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus malesuada, lacus eu viverra ullamcorper, turpis est sagittis velit.</p>
                    </div>
                    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                        <h2 className="text-2xl text-white font-semibold mb-4">Quick Links</h2>
                        <ul className="space-y-4">
                            <li><a href="/" className="text-gray-400 hover:text-white">Home</a></li>
                            <li><a href="/about" className="text-gray-400 hover:text-white">About</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white">Contact</a></li>
                        </ul>
                    </div>
                    <div className="w-full lg:w-1/3 mt-8 lg:mt-0">
                        <h2 className="text-2xl text-white font-semibold mb-4">Connect with Us</h2>
                        <ul className="flex space-x-4">
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-4">
                <div className="container mx-auto text-center text-gray-400 text-sm">
                    <p>&copy; 2023 Your App. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
