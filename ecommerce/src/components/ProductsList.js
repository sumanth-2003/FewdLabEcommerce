import React, { useContext, useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import axios from 'axios';
import Navbar from './Navbar';

const ProductsList = () => {
    const [cart, setCart] = useState([]);
    const [toPay, setToPay] = useState(0);
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(6);  // Set number of products per page

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(item => item.product._id === product._id);
        if (existingProduct) {
            existingProduct.quantity = quantity;
            setCart(cart.map(item => item.product._id === product._id ? existingProduct : item));
        } else {
            setCart([...cart, { product, quantity }]);
        }
    };

    const removeFromCart = (productId) => {
        const updatedCart = cart.filter(item => item.product._id !== productId);
        setCart(updatedCart);
    };

    const calculateTotal = () => {
        const total = cart.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0);
        setToPay(total);
    };

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/products');
            setProducts(response.data);
        } catch (err) {
            console.error('Error fetching products:', err);
        }
    };

    const handleBuy = () => {
        console.log('Purchasing:', cart);
        console.log("topay: ", toPay)
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    const changePage = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const totalPages = Math.ceil(products.length / productsPerPage);
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

    return (
        <>
            <div className="container mt-3">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                    {currentProducts.map(product => (
                        <div className="col" key={product._id}>
                            <ProductCard product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
                        </div>
                    ))}
                </div>
                <div>
                    {pages.map(page => (
                        <button key={page} onClick={() => changePage(page)}>
                            {page}
                        </button>
                    ))}
                </div>
                <div>Total to Pay: ${toPay.toFixed(2)}</div>
                <button onClick={handleBuy}>Buy Now</button>
            </div>
        </>
    );
}

export default ProductsList;
