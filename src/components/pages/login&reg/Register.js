import React from "react";
import "./Login.css";

class LoginForm extends React.Component {
  render() {
    return (
      <div id="loginform">
        <img
          className="brand-logo"
          src="https://res.cloudinary.com/drenxtuen/image/upload/v1623406451/HAL/Brand%20Icon/Movie_mojo_6_vejvao.svg"
          alt="movie mojo"
          width="400px"
        />
        <FormHeader title="Register" />
        <Form />
        <div className="reg-height"></div>
      </div>
    );
  }
}

export default LoginForm;

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
    <FormInput description="Email" placeholder="Enter your email" type="text" />
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <FormButton title="Register" />
  </div>
);

const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);

const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);
