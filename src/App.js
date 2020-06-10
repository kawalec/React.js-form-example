import React, { Component } from "react";
import "./App.scss";
import Input from "./components/Input";

class App extends Component {
  state = { username: "", email: "", password: "", agree: false };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const type = e.target.type;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
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
    {
      id: "agree",
      label: "Zgody marketingowe",
      type: "checkbox",
      name: "agree",
      checked: this.state.accept,
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
        checked={this.state[inp.name]}
        handleChange={this.handleChange}
      />
    ));

    return <form>{inputs}</form>;
  }
}

export default App;
