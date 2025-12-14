import { Component } from 'react'
import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showPassword: false,
    showSubmitError: false,
    errorMsg: '',
  }

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value })
  }

  onChangePassword = (event) => {
    this.setState({
      password: event.target.value,
    })
  }

  onSubmitSuccess = (jwtToken) => {
    Cookies.set('jwt_token', jwtToken, { expires: 30 })
  }

  onSubmitFailure = (errorMsg) => {
    this.setState({
      showSubmitError: true,
      errorMsg,
    })
  }

  toggleShowPassword = () => {
    this.setState((prevState) => ({
      showPassword: !prevState.showPassword,
    }))
  }

  submitForm = async (event) => {
    event.preventDefault()

    const { username, password } = this.state
    const userDetails = { username, password }

    const apiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      'Content-Type': 'application/json',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const { username, password, showPassword, showSubmitError, errorMsg } =
      this.state

    return (
      <div className="login-page">
        <div className="login-card">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            className="website-logo"
            alt="website logo"
          />
          <form className="login-form" onSubmit={this.submitForm}>
            <div className="input-section-wrapper">
              <label htmlFor="username" className="label-text">
                USERNAME
              </label>
              <input
                id="username"
                className="input-box"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </div>

            <div className="input-section-wrapper">
              <label htmlFor="password" className="label-text">
                PASSWORD
              </label>
              <input
                id="password"
                className="input-box"
                type={showPassword ? 'text' : 'password'}
                value={password}
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </div>

            <div className="show-password-section">
              <input
                id="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={this.toggleShowPassword}
              />
              <label
                htmlFor="showPassword"
                className="show-password-label-text"
              >
                Show Password
              </label>
            </div>
            <button type="submit" className="login-btn">
              Login
            </button>
            {showSubmitError && <p className="error-msg">{errorMsg}</p>}
          </form>
        </div>
      </div>
    )
  }
}

export default Login
