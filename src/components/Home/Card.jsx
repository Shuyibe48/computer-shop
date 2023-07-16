const Card = ({ card }) => {
    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <div className="px-6 py-4 flex flex-col">
                <div className="font-bold text-xl mb-2">{card?.productName}</div>
                <span className="ml-2">Seller : {card?.email}</span>
                <span className="ml-2">Available Product : {card?.availableProduct}</span>
                <span className="ml-2">Price : ${card?.price}</span>
            </div>
        </div>
    );
};

export default Card