const Card = ({ card }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <img className="w-full" src={card.image} alt={card.name} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{card.name}</div>
                <div className="flex items-center mb-4">
                    <svg className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                        <path
                            d="M10 1L12.39 6.67H18.75L13.91 10.17L16.3 15.83L10 12.33L3.7 15.83L6.09 10.17L1.25 6.67H7.61L10 1Z"
                        />
                    </svg>
                    <span className="ml-2">{card.rating}</span>
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Button
                </button>
            </div>
        </div>
    );
};

export default Card