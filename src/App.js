// import React from 'react';
// import logo from './logo.svg';
import React,{Component} from "react";
import './App.css';

const formValid= formErrors=>{
  let valid=true;
  Object.values(formErrors).forEach( val => {val.length > 0 && (valid= false)});
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

    if (formValid(this.state.formErrors)){
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
      case 'firstName':
      formErrors.firstName = value.length < 3 && value.length > 0 ? 'minimum 3 characaters required': "";
      break;
    }
  };
  render(){
    return(
      <div className="wrapper">
      <div className="form-wrapper">
      <h1>Create Account</h1>
      <form onSubmit={this.handlesubmit} noValidate>
      <div className="firstName">
      <label htmlFor="firstName">First Name: </label>
      <input type="text" className="" placeholder="First Name" type="text" name="firstName" noValidate onChange={this.handleChange}/>
      </div>
      <div className="lastName">
      <label htmlFor="lastName">Last Name: </label>
      <input type="text" className="" placeholder="Last Name" type="text" name="lastName" noValidate onChange={this.handleChange}/>
      </div>
      <div className="email">
      <label htmlFor="email">Email: </label>
      <input type="email" className="" placeholder="Email" type="text" name="email" noValidate onChange={this.handleChange}/>
      </div>
      <div className="password">
      <label htmlFor="password">Password: </label>
      <input type="password" className="" placeholder="Password" type="password" name="password" noValidate onChange={this.handleChange}/>
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
