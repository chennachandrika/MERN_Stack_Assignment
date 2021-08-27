import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import './index.css'

class LoginFormPage extends Component {
  state = {
    username: '',
    password: '',
    errorText: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  renderUsernameInputUI = () => {
    const {username} = this.state
    return (
      <div className="input-field">
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <br />
        <input
          id="username"
          type="text"
          className="input"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="ENTER USERNAME"
        />
      </div>
    )
  }

  renderPasswordInputUI = () => {
    const {password} = this.state
    return (
      <div className="input-field">
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <br />
        <input
          id="password"
          type="password"
          className="input"
          value={password}
          onChange={this.onChangePassword}
          placeholder="ENTER PASSWORD"
        />
      </div>
    )
  }

  onSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token_stored', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onFailure = errorMsg => {
    this.setState({errorText: errorMsg})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state

    const requestObj = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(requestObj),
    }
    const promise = await fetch('https://apis.ccbp.in/login', options)
    const response = await promise.json()
    if (promise.ok === true) {
      this.onSuccess(response.jwt_token)
    } else {
      this.onFailure(response.error_msg)
    }
  }

  renderLoginForm = () => {
    const {errorText} = this.state
    return (
      <form className="login-form" onSubmit={this.onSubmitForm}>
        {this.renderUsernameInputUI()}
        {this.renderPasswordInputUI()}
        <button className="button" type="submit">
          Login
        </button>
        <p className="error-text">{errorText && errorText}</p>
      </form>
    )
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div className="login-container">
        <div className="login-form-container">
          <h1 className="login-page-heading">Login Form</h1>
          {this.renderLoginForm()}
        </div>
      </div>
    )
  }
}

export default LoginFormPage
