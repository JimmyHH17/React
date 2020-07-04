import React, { Component } from "react";
import "./App.css";

//stateless
const Input = (props) => {
  return <input onChange={props.action}></input>;
};

const Person = (props) => {
  return <h2>{props.name}</h2>;
};
//stateful
class App extends Component {
  state = {
    name: "Hazim",
    username: "jimmy",
    user: {},
  };

  render() {
    return (
      <div className="App">
        <Input action={this.onChangeHandler} />
        <Person name="Hazim"></Person>
        <Person name={this.state.name}></Person>
        <Person name={this.state.username}></Person>
        <Person name={this.state.user.name}action={this.onClickHandler}></Person>
      </div>
    );
  }

  fetchUser = () => {
    return fetch(`https://jsonplaceholder.typicode.com/users/1 $userId`)
      .then((Response) => Response.json())
      .then((user) => user);
  };

  componentDidMount() {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchUser().then((user) => this.setState({ user: user }));
  }

  onChangeHandler = (event) => {
    this.setState({ username: event.target.value });
  };

  onClickHandler = () => {
    const userId = Math.floor(Math.random() * 10 + 1);
    this.fetchUser(userId).then((user) => this.setState({ user: user }));
  };
}

export default App;
