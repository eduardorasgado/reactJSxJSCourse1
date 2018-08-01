import React, { Component } from 'react'
import Loading from './Loading'
import axios from 'axios'

class App extends Component {
  constructor(props) {
    super(props)
    // state for data local storage
    this.state = {
      users: [],
      loading: false
    }

    // bindings
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  getUsers() {
    this.setState({
      loading: true
    })
    //Call to a API using axios
    axios('https://api.randomuser.me/?nat=US&results=5')
    .then((response) => this.setState({
      users: [...this.state.users, ...response.data.results],
      loading: false
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    this.getUsers()
    console.log('more users loaded')
  }

  //just before the component mounts
  componentWillMount() {
    this.getUsers()
  }
  render() {
    // destructuring
    const {loading, users} = this.state
    return (
      <div className="App">
      <form onSubmit={this.handleSubmit}>
        <input type="submit" value="Load more users"/>
      </form>
      <hr/>
      { !loading ? 
        users.map((user) => (
        <div key={user.id.value}>
          <h3 style={{color: "red"}}
            >{user.name.first.split("").map((l, key) => key === 0 ? l.toUpperCase() : l)}</h3>
          Email is { user.email }
          <hr/>
        </div>
      )) 
      : (<Loading message="Users"/>)}
     </div>
    );
  }
}

export default App;
