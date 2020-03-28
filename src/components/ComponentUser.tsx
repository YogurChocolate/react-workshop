import React, {ChangeEvent, Component, FormEvent} from 'react'

export interface User {
  firstName: string,
  lastName: string
}

class ComponentUser extends Component<{}, User> {
  constructor(props: any) {
    super(props);
    this.state = {firstName: '', lastName: ''};
  }

  handleFirstNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({firstName: event.target.value});
  }

  handleLastNameChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({lastName: event.target.value});
  }

  handleSubmit(event: FormEvent) {
    alert('User Name: ' + this.state.firstName + ' ' + this.state.lastName);
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <p>Personal Info</p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <label>
            First Name:
            <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange.bind(this)}/>
          </label>
          <label>
            Last Name:
            <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange.bind(this)}/>
          </label>
          <input type="submit" value="submit"/>
        </form>
      </div>
    );
  }
}

export default ComponentUser
