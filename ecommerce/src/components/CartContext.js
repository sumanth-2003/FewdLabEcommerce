// import React, { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// // Create the context
// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [cart, setCart] = useState([]);
//     const [toPay, setToPay] = useState(0);
//     const [products, setProducts] = useState([]);

//     const addToCart = (product, quantity) => {
//         const existingProduct = cart.find(item => item.product._id === product._id);
//         if (existingProduct) {
//             existingProduct.quantity = quantity;
//             setCart(prevCart => prevCart.map(item => item.product._id === product._id ? existingProduct : item));
//         } else {
//             setCart(prevCart => [...prevCart, { product, quantity }]);
//         }
//         calculateTotal();
//     };

//     const removeFromCart = (productId) => {
//         setCart(prevCart => prevCart.filter(item => item.product._id !== productId));
//         calculateTotal();
//     };

//     const calculateTotal = () => {
//         const total = cart.reduce((acc, curr) => acc + (curr.quantity * curr.product.price), 0);
//         setToPay(total);
//     };

//     const fetchProducts = async () => {
//         try {
//             const response = await axios.get('http://localhost:5000/api/products');
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     // Fetch products when the component mounts


//     return (
//         <CartContext.Provider value={{
//             cart,
//             setCart,
//             toPay,
//             setToPay,
//             products,
//             setProducts,
//             addToCart,
//             removeFromCart,
//             calculateTotal
//         }}>
//             {children}
//         </CartContext.Provider>
//     );
// };
