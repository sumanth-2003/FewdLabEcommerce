import React from 'react'
import './common.css'
import Navbar from './Navbar'
const Home = () => {
    return (
        <>
            <div>
                <div>
                    <div className="container">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="false">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="https://picsum.photos/900/400" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Fresh Groceries Delivered</h5>
                                        <p>Explore a wide range of fresh groceries delivered straight to your door with the convenience and quality you can trust.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/900/400" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Discover More Products</h5>
                                        <p>From tech gadgets to home essentials, our expansive product selection has everything you need to enhance your lifestyle.</p>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <img src="https://picsum.photos/900/400" className="d-block w-100" alt="..." />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>Quick Delivery Services</h5>
                                        <p>Experience lightning-fast delivery. Your comfort, our priority — get your orders faster than ever before.</p>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true" />
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true" />
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                    <div className="container mt-4">
                        <h2>About Us</h2>
                        <p>Welcome to <b>SumMarket</b>, where convenience meets variety at your fingertips. Founded with the vision to simplify shopping and provide a seamless buying experience, we offer an extensive range of products tailored to meet your everyday needs. From the latest electronics to fresh groceries, and stylish apparel, everything you desire is just a click away.</p>
                        <p>We are committed to providing our customers with high-quality products, competitive prices, and excellent customer service. Our easy-to-navigate website ensures a hassle-free shopping experience, while our fast and reliable delivery service means you get your purchases on time, every time. At [Your Site Name], we believe in building trust and customer satisfaction, striving to deliver excellence through our dedicated team and robust logistics.</p>
                        <p>Join our community of satisfied shoppers and experience the best of online shopping today. Discover, shop, and enjoy—because at [Your Site Name], it’s all about you!</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home