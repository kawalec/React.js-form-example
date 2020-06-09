import React, { Component } from "react";
import "./App.scss";
import Input from "./components/Input";

class App extends Component {
  state = { username: "", email: "", password: "" };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  data = [
    {
      id: "user",
      label: "Login",
      type: "text",
      name: "username",
      value: this.state.username,
    },
    {
      id: "email",
      label: "E-mail",
      type: "email",
      name: "email",
      value: this.state.email,
    },
    {
      id: "pass",
      label: "Hasło",
      type: "password",
      name: "password",
      value: this.state.password,
    },
  ];
  render() {
    const inputs = this.data.map((inp) => (
      <Input
        key={inp.id}
        id={inp.id}
        label={inp.label}
        type={inp.type}
        name={inp.name}
        value={this.state[inp.name]}
        handleChange={this.handleChange}
      />
    ));

    return <form>{inputs}</form>;
  }
}

export default App;
