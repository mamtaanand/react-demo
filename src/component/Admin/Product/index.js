import React, { useEffect, useState } from "react";

const AdminProduct = (props) => {
    const [adminproduct, setAdminProduct] = useState('');

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then((data) => {
                setAdminProduct(data);
            });
    }, []);

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="d-flex justify-content-between m-2">
                            <h4 className="text-center flex-grow-1" style={{ color: "blueviolet" }}>Product Details</h4>
                            <button className="btn btn-secondary">Add</button>
                        </div>
                        <div className="table-responsive">
                            <table className="table table-primary table-bordered" style={{ textAlign: "center", borderColor: "#dcdcdc" }}>
                                <thead>
                                    <tr style={{ borderColor: '#dcdcdc' }}>
                                        <th style={{ width: '3%' }} scope="col">ID</th>
                                        <th style={{ width: '8%' }} scope="col">Title</th>
                                        <th style={{ width: '30%' }} scope="col">Description</th>
                                        <th style={{ width: '10%' }} scope="col">Category</th>
                                        <th style={{ width: '5%' }} scope="col">Price</th>
                                        <th style={{ width: '5%' }} scope="col">Image</th>
                                        <th style={{ width: '10%' }} scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        adminproduct && adminproduct.map((el) => (
                                            <tr key={el.id} style={{ borderColor: '#dcdcdc' }}>
                                                <td scope="col">{el.id}</td>
                                                <td scope="col">{el.title}</td>
                                                <td scope="col">{el.description}</td>
                                                <td scope="col">{el.category}</td>
                                                <td scope="col">{el.price}</td>
                                                <td scope="col">
                                                    <img src={el.image} alt={el.title} style={{ height: 50, width: 50 }} />
                                                </td>
                                                <td scope="col">
                                                    <button className="btn btn-danger">Edit</button>
                                                    <button className="btn btn-warning">Delete</button>
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AdminProduct;
