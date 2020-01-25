import React, { Component } from "react";
import Header from "./Components/Header";
// import UsernameForm from "./Components/UsernameForm";
import "./App.css";

class App extends Component<StateProps> {
  state = {
    username: "",
    username_list: [],
    randomUser: null
  };

  handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    this.setState({
      username: "",
      username_list: [
        ...this.state.username_list,
        {
          id: this.timeInMilliSeconds(),
          value: this.state.username,
          added: false
        }
      ]
    });
  }
  private timeInMilliSeconds(): Number {
    const date: Date = new Date();
    return date.getTime();
  }

  renderUsernames() {
    return this.state.username_list.map(
      (username: StateList, index: number) => {
        return (
          <div key={username.id}>
            <span>{username.value}</span>
            <button onClick={() => this.deleteTask(username.id)}>
              Delete Username
            </button>
          </div>
        );
      }
    );
  }
  deleteTask(id: number) {
    const filtered: Array<StateList> = this.state.username_list.filter(
      (Uid: StateList) => Uid.id !== id
    );
    this.setState({ username_list: filtered });
  }
  randomUsernameHandler = () => {
    const randNumb = Math.floor(
      Math.random() * this.state.username_list.length
    );
    const randomUsername = this.state.username_list[randNumb];

    this.setState({
      randomUser: randomUsername
    });
    console.log(this.state.username);
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <Header text="Username List" />
        <form className="form-user" onSubmit={e => this.handleSubmit(e)}>
          <div className="form-content">
            <input
              type="text"
              placeholder="enter Username"
              value={this.state.username}
              onChange={e => this.setState({ username: e.target.value })}
            />
            <button type="submit">Add Username</button>
          </div>
          <div className="usernames">
            <h3>Usernames</h3>
            <section className="username-list">
              {this.renderUsernames()}
            </section>
          </div>
        </form>

        <div>
          <button onClick={this.randomUsernameHandler}>Random</button>
          <p>{this.state.randomUser !== null && this.state.randomUser}</p>
        </div>
      </div>
    );
  }
}
export default App;

interface StateProps {
  username?: string;
  username_list?: Array<StateList>;
  randomUser?: any;
}

interface StateList {
  id?: any;
  value?: string;
  added?: boolean;
}
