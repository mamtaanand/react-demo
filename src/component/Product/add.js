import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const AddModal = (props) => {
    const { show, handleClose } = props;
    const placeholderImage = "path/to/your/image.jpg";
    const [formData, setFormData] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        fetch('https://fakestoreapi.com/products', {
            method: "POST",
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(json => {
                handleClose()
            })
    };

    return (
        <>
            <Modal show={show} onHide={handleClose}>

                <Modal.Dialog>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Product Id</label>
                                <input type="number" onChange={handleInputChange} name="title" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Product Titel</label>
                                <input type="number" onChange={handleInputChange} name="price" className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Product Description</label>
                                <textarea className="form-control" onChange={handleInputChange} name="description" id="exampleInputPassword1"></textarea>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">Product Image</label>
                                <div className="border p-1 rounded text-center">
                                    <img src={placeholderImage} alt="" className="img-fluid" id="productImage" />
                                    <div className="mb-2">
                                        <p className="text-muted">Upload or drag an image here</p>
                                        <input type="file" id="imageUpload" className="form-control-file mt-2" accept="image/*" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="productImage" className="form-label">Product Category</label>
                                <select className="form-select" onChange={handleInputChange} name="category" aria-label="Default select example">
                                    <option selected>Select Category</option>
                                    <option value="electronic">Electronic</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>

                            <button type="submit" onClick={(e) => handleSubmit(e)} className="btn btn-primary">Submit</button>
                        </form>
                    </Modal.Body>
                </Modal.Dialog>
            </Modal>


        </>
    )
}

export default AddModal;