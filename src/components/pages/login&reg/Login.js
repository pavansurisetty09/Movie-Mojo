import React, { Fragment } from "react";
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
        <FormHeader title="Login" />
        <Form />
        <OtherMethods />
      </div>
    );
  }
}

export default LoginForm;

const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;

const Form = (props) => (
  <div>
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
    <FormButton title="Log in" />
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

const OtherMethods = (props) => (
  <div id="alternativeLogin">
    <label>Or sign in with:</label>
    <div id="iconGroup">
      <Facebook />
      <Twitter />
      <Google />
    </div>
  </div>
);

const Facebook = (props) => <a href="#" id="facebookIcon"></a>;

const Twitter = (props) => <a href="#" id="twitterIcon"></a>;

const Google = (props) => <a href="#" id="googleIcon"></a>;

const BrandLogo = () => {
  <Fragment>
    <img
      src="https://res.cloudinary.com/drenxtuen/image/upload/v1623406209/HAL/Brand%20Icon/Movie_mojo_5_xm6fla.svg"
      alt="movie mojo"
    />
  </Fragment>;
};
