import React, { Component } from "react";
import Swal from "sweetalert2";

const App = () => <MyLittleForm />;
class MyLittleForm extends Component {
  state = { username: "", age: 0, error: false };

  myChangeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    if(name === 'age') {
      value = event.target.value - 10
    }
    this.setState({[name]: value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.username === "" || this.state.age <= 0 ) 
      this.setState({ error: true });
    else {
      Swal.fire(this.state.username + " ahora tiene: " + this.state.age + " años :D");
      this.setState({ username: "", age: 0});
    }
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name: </label>
        <input
          type="text"
          name='username'
          onChange={this.myChangeHandler}
        />
        <label> Edad: </label>
        <input
          type="number"
          name='age'
          onChange={this.myChangeHandler}
        />
        {this.state.error && <span>El campo nombre no puede estar vacío y la edad no puede ser negativa o igual a 0</span>}
        <button type="submit">Submit!</button>
      </form>
    );
  }
}

export default App;
