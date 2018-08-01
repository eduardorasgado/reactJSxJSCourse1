import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    // state for data local storage
    this.state = {
      users: [],
      loading: false
    }
  }

  getUsers() {
    this.setState({
      loading: true
    })
    //Call to a API using axios
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then((response) => this.setState({
      users: response.data.results,
      loading: false
    }))
  }

  //just before the component mounts
  componentWillMount() {
    this.getUsers()
  }
  render() {
    return (
     <div className="App">
      { !this.state.loading ? 
        this.state.users.map((user) => (
        <div key={user.id.value}>
          <h3>{user.name.first.split("").map((l, key) => key === 0 ? l.toUpperCase() : l)}</h3>
          Email is { user.email }
          <hr/>
        </div>
      )) 
      : 'Loading'}
     </div>
    );
  }
}

export default App;
