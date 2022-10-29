//coditional rendering - using if else statement

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  renderAuthButton = () => {
    const {isLoggedIn} = this.state
    if (isLoggedIn === true) {
      return <button type="button">Logout</button>
    }
    return <button type="button">Login</button>
  }

  render() {
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {this.renderAuthButton()}
      </div>
    )
  }
}

export default App


//coditional rendering - using element variables

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    let authButton
    if (isLoggedIn === true) {
      authButton = <button type="button">Logout</button>
    } else {
      authButton = <button type="button">Login</button>
    }

    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {authButton}
      </div>
    )
  }
}

export default App

//Using Ternary Operators

mport {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn ? (
          <button type="button">Logout</button>
        ) : (
          <button type="button">Login</button>
        )}
      </div>
    )
  }
}

export default App

//Display no buttons

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn ? <button type="button">Logout</button> : null}
      </div>
    )
  }
}

export default App


//Using Logical && Operator and not display if false

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button type="button">Logout</button>}
      </div>
    )
  }
}

export default App

//Using Logical && Operator

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hello" name="User" />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App

//Default props

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}


import './index.css'

const Welcome = props => {
  const {name, greeting} = props
  return (
    <h1 className="message">
      {greeting}, {name}
    </h1>
  )
}

Welcome.defaultProps = {
  name: 'Rahul',
  greeting: 'Hello',
}

export default Welcome



//Default props passing values

import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  render() {
    const {isLoggedIn} = this.state
    return (
      <div className="container">
        <Welcome greeting="Hi" />
        {isLoggedIn && <button type="button">Logout</button>}
        {!isLoggedIn && <button type="button">Login</button>}
      </div>
    )
  }
}

export default App
