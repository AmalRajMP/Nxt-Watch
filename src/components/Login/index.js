import { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  LoginPage,
  LoginCard,
  WebsiteLogo,
  LoginForm,
  InputSectionWrapper,
  LabelText,
  InputBox,
  ShowPasswordSection,
  ShowPasswordLabelText,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

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
    this.setState({ password: event.target.value })
  }

  onSubmitSuccess = (jwtToken) => {
    const { history } = this.props
    Cookies.set('jwt_token', jwtToken, { expires: 30 })
    history.replace('/')
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
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    const data = await response.json()

    if (response.ok) {
      console.log(data.jwt_token)
      this.onSubmitSuccess(data.jwt_token)
    } else {
      console.log('Error')
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    const { username, password, showPassword, showSubmitError, errorMsg } =
      this.state

    return (
      <LoginPage>
        <LoginCard>
          <WebsiteLogo
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="website logo"
          />

          <LoginForm onSubmit={this.submitForm}>
            <InputSectionWrapper>
              <LabelText htmlFor="username">USERNAME</LabelText>
              <InputBox
                id="username"
                type="text"
                value={username}
                placeholder="Username"
                onChange={this.onChangeUsername}
              />
            </InputSectionWrapper>

            <InputSectionWrapper>
              <LabelText htmlFor="password">PASSWORD</LabelText>
              <InputBox
                id="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                value={password}
                placeholder="Password"
                onChange={this.onChangePassword}
              />
            </InputSectionWrapper>

            <ShowPasswordSection>
              <input
                id="showPassword"
                type="checkbox"
                checked={showPassword}
                onChange={this.toggleShowPassword}
              />
              <ShowPasswordLabelText htmlFor="showPassword">
                Show Password
              </ShowPasswordLabelText>
            </ShowPasswordSection>

            <LoginButton type="submit">Login</LoginButton>
            <LoginButton
              type="button"
              onClick={() => {
                Cookies.set('jwt_token', 'guest-token', { expires: 1 })
                window.location.replace('/')
              }}
            >
              Explore as Guest
            </LoginButton>

            {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
          </LoginForm>
        </LoginCard>
      </LoginPage>
    )
  }
}

export default withRouter(Login)
