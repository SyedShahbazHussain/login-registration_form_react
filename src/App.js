// import React from 'react';
// import logo from './logo.svg';
import React,{Component} from "react";
import './App.css';

const emailRegax = RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)

const formValid= ({formErrors, ...rest }) =>{
  let valid=true;

  //validate when errors being empty
  Object.values(formErrors).forEach( val => {val.length > 0 && (valid= false);});

  //validate when form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });
  return valid;
};

class App extends Component{
  constructor (props){
    super(props);

    this.state={
      firstName: null,
      lastName: null,
      password: null,
      email: null,
      formErrors:{
        firstName:"",
        lastName:"",
        email:"",
        password:"" 
      }
    };
  }
  handlesubmit = e =>{
    e.preventDefault();

    if (formValid(this.state)){
      console.log(`--SUBMITTING-- First Name: ${this.state.firstName} Last Name: ${this.state.lastName}
      Email: ${this.state.email} Password: ${this.state.password}  `)
    } else{
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE ')
    }
  };

  handleChange = e =>{
    e.preventDefault();
    const{name, value}= e.target;
    let formErrors= this.state.formErrors;

    switch(name){
      case "firstName":
      formErrors.firstName = value.length < 3 ? "minimum 3 characaters required": "";
      break;
      
      case "lastName":
 
      break;
  
      default:
      break;
    }
    this.setState({formErrors, [name]:value}, ()=> console.log(this.state))

  };
  render(){
    const {formErrors} = this.state;
    return(
      <div className="wrapper">
      <div className="form-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={this.handlesubmit} noValidate>
      <div className="firstName">
      <label htmlFor="firstName">First Name: </label>
      <input className={formErrors.firstName.length > 0 ? "error": null} placeholder="First Name" type="text" name="firstName" noValidate onChange={this.handleChange}/>
      {formErrors.firstName.length > 0 && (
        <span className="errorMessage">{formErrors.firstName}</span>
      )}
      </div>

      <div className="lastName">
      <label htmlFor="lastName">Last Name: </label>
      <input className={formErrors.lastName.length > 0 ? "error":null} placeholder="Last Name" type="text" name="lastName" noValidate onChange={this.handleChange}/>
      {formErrors.lastName.length > 0 &&(
        <span className="errorMessage">{formErrors.lastName}</span>
      )}
      </div>

      <div className="email">
      <label htmlFor="email">Email: </label>
      <input className={formErrors.email.length > 0 ? "error": null} placeholder="Email" type="text" name="email" noValidate onChange={this.handleChange}/>
      {formErrors.email.length > 0 &&(
        <span className="errorMessage">{formErrors.email} </span>
      )}
      </div>

      <div className="password">
      <label htmlFor="password">Password: </label>
      <input className={formErrors.password.length > 0 ? "password": null} placeholder="Password" type="password" name="password" noValidate onChange={this.handleChange}/>
      {formErrors.password.length > 0 &&(
        <span className="errorMessage">{formErrors.password}</span>
      )}
      </div>

      <div className="createAccount">
      <button type="submit">Create an Account</button>
      <small>Already have an Account?</small>
      </div>
      </form>
      </div>
      </div>
    );
  };
};

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
