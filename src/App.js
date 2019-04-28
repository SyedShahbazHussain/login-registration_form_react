// import React from 'react';
// import logo from './logo.svg';
import React,{Component} from "react";
import './App.css';

class App extends Component{
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
      <input type="text" className="" placeholder="Email" type="text" name="email" noValidate onChange={this.handleChange}/>
      </div>
      <div className="password">
      <label htmlFor="password">Password: </label>
      <input type="password" className="" placeholder="Password" type="password" name="password" noValidate onChange={this.handleChange}/>
      </div>
      </form>
      </div>
      </div>
    );
  }
}

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
