import React, { useState, useEffect } from 'react';

function ProductCard({ product, addToCart, removeFromCart }) {
    const [quantity, setQuantity] = useState(0);
    const [isAdded, setIsAdded] = useState(false);

    // Handle adding to cart
    const handleAddToCart = () => {
        console.log("handledAddtocart")
        setQuantity(1); // Start with 1 item when added to cart
        setIsAdded(true);
        // addToCart(product, 1);
    };

    // Handle incrementing quantity
    const incrementQuantity = () => {
        const newQuantity = quantity + 1;
        setQuantity(newQuantity);
        // addToCart(product, newQuantity);
    };

    // Handle decrementing quantity
    const decrementQuantity = () => {
        if (quantity > 1) {
            const newQuantity = quantity - 1;
            setQuantity(newQuantity);
            // addToCart(product, newQuantity);
        } else {
            setQuantity(0);
            setIsAdded(false); // Remove item from cart if quantity reaches 0
            removeFromCart(product._id);
        }
    };

    // Effect to update cart when quantity changes
    useEffect(() => {
        console.log(quantity)
        if (quantity > 0) {
            addToCart(product, quantity);
        } else {
            removeFromCart(product);
        }
    }, [quantity, setQuantity]); // Depend on quantity to trigger the update

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={product.url} className="card-img-top" alt={product.name} />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ${product.price}</p>
                <p className="card-text">{product.description}</p>

                {isAdded ? (
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                            <button className="btn btn-outline-secondary" type="button" onClick={decrementQuantity}>-</button>
                        </div>
                        <input type="text" className="form-control text-center" value={quantity} readOnly />
                        <div className="input-group-append">
                            <button className="btn btn-outline-secondary" type="button" onClick={incrementQuantity}>+</button>
                        </div>
                    </div>
                ) : (
                    <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
                )}
            </div>
        </div>
    );
}

export default ProductCard;
