import React, { Component } from "react";
import "./App.scss";
import Input from "./components/Input";

class App extends Component {
  state = { username: "" };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  render() {
    return (
      <form>
        <Input
          id={"user"}
          label={"Nazwa użytkownika: "}
          type={"text"}
          name={"username"}
          value={this.state.username}
          handleChange={this.handleChange}
        />
      </form>
    );
  }
}

export default App;
