import React, { Component } from "react";
import "./App.scss";
import Input from "./components/Input";
import Button from "./components/Button";

class App extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    agree: false,
    errors: {
      username: true,
      email: true,
      password: true,
      agree: true,
    },
  };

  errors_message = {
    username:
      "Nazwa powinna mieć więcej niż 4 znaki i nie może zawierać spacji!",
    email: "Brak znaku @ w adresie email!",
    password: "Hasło musi mieć minimum 8 znaków!",
    agree: "Proszę zaznaczyć zgody!",
  };

  formValidation = () => {
    let username = true;
    let email = true;
    let password = true;
    let agree = true;
    let formCorrect = true;

    if (
      this.state.username.length < 4 ||
      this.state.username.indexOf(" ") !== -1
    ) {
      username = false;
    }
    if (this.state.email.indexOf("@") === -1) {
      email = false;
    }
    if (this.state.password.length < 8) {
      password = false;
    }
    if (!this.state.agree) {
      agree = false;
    }
    if (username && email && password && agree) {
      formCorrect = true;
    } else {
      formCorrect = false;
    }
    return {
      formCorrect,
      username,
      email,
      password,
      agree,
    };
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const validation = this.formValidation();
    if (validation.formCorrect) {
      this.setState({
        username: "",
        email: "",
        password: "",
        agree: false,
        errors: {
          username: true,
          email: true,
          password: true,
          agree: true,
        },
      });
    } else {
      this.setState({
        errors: {
          username: validation.username,
          email: validation.email,
          password: validation.password,
          agree: validation.agree,
        },
      });
    }
  };

  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const type = e.target.type;
    this.setState({
      [name]: type === "checkbox" ? checked : value,
    });
  };

  render() {
    const data = [
      {
        id: "user",
        label: "Login",
        type: "text",
        name: "username",
        value: this.state.username,
        error: {
          status: this.state.errors.username,
          message: this.errors_message.username,
        },
      },
      {
        id: "email",
        label: "E-mail",
        type: "email",
        name: "email",
        value: this.state.email,
        error: {
          status: this.state.errors.email,
          message: this.errors_message.email,
        },
      },
      {
        id: "pass",
        label: "Hasło",
        type: "password",
        name: "password",
        value: this.state.password,
        error: {
          status: this.state.errors.password,
          message: this.errors_message.password,
        },
      },
      {
        id: "agree",
        label: "Zgody",
        type: "checkbox",
        name: "agree",
        checked: this.state.accept,
        error: {
          status: this.state.errors.agree,
          message: this.errors_message.agree,
        },
      },
    ];

    const inputs = data.map((inp) => (
      <Input
        key={inp.id}
        id={inp.id}
        label={inp.label}
        type={inp.type}
        name={inp.name}
        value={this.state[inp.name]}
        checked={this.state[inp.name]}
        handleChange={this.handleChange}
        error={inp.error}
      />
    ));

    return (
      <form className="inputs">
        {inputs}
        <Button click={this.handleSubmit} />
      </form>
    );
  }
}

export default App;
