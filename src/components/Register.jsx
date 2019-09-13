import React from 'react';

const Register = () => (
  <form className="user">
    <div className="form-group row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <input type="text" className="form-control form-control-user" id="exampleFirstName" placeholder="First Name" />
      </div>
      <div className="col-sm-6">
        <input type="text" className="form-control form-control-user" id="exampleLastName" placeholder="Last Name" />
      </div>
    </div>
    <div className="form-group">
      <input type="email" className="form-control form-control-user" id="exampleInputEmail" placeholder="Email Address" />
    </div>
    <div className="form-group row">
      <div className="col-sm-6 mb-3 mb-sm-0">
        <input type="password" className="form-control form-control-user" id="exampleInputPassword" placeholder="Password" />
      </div>
      <div className="col-sm-6">
        <input type="password" className="form-control form-control-user" id="exampleRepeatPassword" placeholder="Repeat Password" />
      </div>
    </div>
    <button type="submit" className="btn btn-primary btn-user btn-block">
      Register Account
    </button>
  </form>
);

export default Register;
