import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import useForm from 'react-hook-form'


const Product = ({ sendForm }) => {
  const { register, handleSubmit } = useForm();

  return (
    <form className="user" onSubmit={handleSubmit(sendForm)}>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="text"
            className="form-control form-control-user"
            id="name"
            placeholder="Product name"
            name="name"
            ref={register}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            id="description"
            placeholder="Product description"
            name="description"
            ref={register}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-6 mb-3 mb-sm-0">
          <input
            type="number"
            className="form-control form-control-user"
            id="price"
            placeholder="Product price"
            name="price"
            ref={register}
          />
        </div>
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            id="availableQuantity"
            placeholder="Product stock"
            name="availableQuantity"
            ref={register}
          />
        </div>
      </div>
      <div className="form-group row">
        <div className="col-sm-6">
          <input
            type="text"
            className="form-control form-control-user"
            id="image"
            placeholder="Produc image url"
            name="image"
            ref={register}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-primary btn-user btn-block">
        Register Product
      </button>
    </form>
  );
}

export default withRouter(Product);
