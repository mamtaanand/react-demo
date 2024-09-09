import React, { useEffect, useState } from "react";

const Product = (props) => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products').then(res => res.json()).then(data => {
            setProduct(data)
        })
    }, [])


    return (
        <>
            <div className="container mt-4 d-flex justify-content-between align-items-center">
                <h3 className="me auto">Product Details</h3>
                <div className="d-flex">
                <button className="btn btn-primary mt-1">Add</button>
                <button className="btn btn-warning mt-1">Edit</button>
                <button className="btn btn-danger mt-1">Delete</button>
                </div>              
            </div>

            <div className="container mt-4">
                <div className="row g-4">

                    {
                        product && product.map((el, index) => (
                            <div className="card border m-1" style={{ width: 275 }} key={index}>
                                <>
                                    <div className="card-body text center">
                                        <img src={el.image} alt={el.title} className="mx-auto d-block" style={{ width: 200, height: 200 }} />
                                        <h5 className="card-id" style={{ fontSize: 15 }}><b>Id:</b> {el.id}</h5>
                                        <h6 className="card-title" style={{ fontSize: 12 }}><b>Title:</b> {el.title}</h6>
                                        <p className="card-description" style={{ fontSize: 10 }}><b>Description:</b> {el.description}</p>
                                        <p className="card-category" style={{ fontSize: 11 }}><b>Category:</b> {el.category}</p>
                                        <div className="card-rating">
                                            <p className="card-rate" style={{ fontSize: 10 }}><b>Rating:</b> {el.rating?.rate || 'N/A'} </p>
                                            <p className="card-count" style={{ fontSize: 10 }}><b>Count:</b> {el.rating?.count || 'N/A'} </p>
                                        </div>
                                        <h6 className="card-price" style={{ fontSize: 11 }}>Price: {el.price}</h6>
                                        <a href="#" className="btn btn-primary d-flex justify-content-center align-items-center" style={{ height: '5vh' }}><b>Buy Now</b></a>

                                    </div>
                                </>

                            </div>
                        ))
                    }
                </div>
            </div>

        </>
    )
}

export default Product;