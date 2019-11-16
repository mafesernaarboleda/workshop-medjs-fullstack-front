import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import Product from '../components/ProductForm';

const Register = () => {

  const createProduct = async (form) => {
    console.log(form)
  }

  return (
    <div className="container">
      <div className="card o-hidden border-0 shadow-lg my-5">
        <div className="text-center">
          <Link className="small" to="/">Return to Products!</Link>
        </div>
        <div className="card-body p-0">
          <div className="row">
            <div className="col-lg-8 offset-2">
              <div className="p-5">
                <div className="text-center">
                  <h1 className="h4 text-gray-900 mb-4">Register a Product!</h1>
                </div>
                <Product sendForm={createProduct} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};

export default withRouter(Register);
