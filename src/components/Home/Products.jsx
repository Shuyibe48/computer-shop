import Card from "./Card";

const Products = () => {
    const data = [
        {
            id: 1,
            name: 'Card 1',
            image: 'https://www.bdstall.com/asset/product-image/giant_203556.jpg',
            rating: 4.5
        },
        {
            id: 2,
            name: 'Card 2',
            image: 'https://www.kreedon.com/wp-content/uploads/2022/10/high-gaming-pc.jpg',
            rating: 3.8
        }
    ];
    return (
        <div className="flex flex-wrap justify-center">
            {data.map(card => (
                <Card key={card.id} card={card} />
            ))}
        </div>
    )
}

export default Products