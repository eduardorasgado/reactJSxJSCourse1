import React, { Component } from 'react';
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    // state for data local storage
    this.state = {
      users: []
    }
  }

  //just before the component mounts
  componentWillMount() {
    //Call to a API using axios
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then((response) => this.setState({
      users: response.data.results
    }))
  }
  render() {
    return (
     <div className="App">
      { this.state.users.map((user) => (
        <div key={user.id.value}>
          <h3>{user.name.first.split("").map((l, key) => key === 0 ? l.toUpperCase() : l)}</h3>
          Email is { user.email }
          <hr/>
        </div>
      )) 
      }
     </div>
    );
  }
}

export default App;
