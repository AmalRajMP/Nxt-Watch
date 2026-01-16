import { Component } from 'react'
import { Redirect, withRouter } from 'react-router-dom'
import Cookies from 'js-cookie'

import ThemeAndVideoContext from '../../context/ThemeAndVideoContext'

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
    this.setState({ showSubmitError: true, errorMsg })
  }

  toggleShowPassword = () => {
    this.setState((prev) => ({ showPassword: !prev.showPassword }))
  }

  submitForm = async (event) => {
    event.preventDefault()
    const { username, password } = this.state

    const response = await fetch('https://apis.ccbp.in/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    })

    const data = await response.json()

    if (response.ok) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) return <Redirect to="/" />

    const {
      username,
      password,
      showPassword,
      showSubmitError,
      errorMsg,
    } = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {(value) => {
          const { isLightTheme } = value

          return (
            <LoginPage isLightTheme={isLightTheme}>
              <LoginCard isLightTheme={isLightTheme}>
                <WebsiteLogo
                  src={
                    isLightTheme
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  alt="website logo"
                />

                <LoginForm onSubmit={this.submitForm}>
                  <InputSectionWrapper>
                    <LabelText htmlFor="username" isLightTheme={isLightTheme}>
                      USERNAME
                    </LabelText>
                    <InputBox
                      id="username"
                      type="text"
                      value={username}
                      placeholder="Username"
                      onChange={this.onChangeUsername}
                      isLightTheme={isLightTheme}
                    />
                  </InputSectionWrapper>

                  <InputSectionWrapper>
                    <LabelText htmlFor="password" isLightTheme={isLightTheme}>
                      PASSWORD
                    </LabelText>
                    <InputBox
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      placeholder="Password"
                      onChange={this.onChangePassword}
                      isLightTheme={isLightTheme}
                    />
                  </InputSectionWrapper>

                  <ShowPasswordSection>
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={this.toggleShowPassword}
                    />
                    <ShowPasswordLabelText isLightTheme={isLightTheme}>
                      Show Password
                    </ShowPasswordLabelText>
                  </ShowPasswordSection>

                  <LoginButton type="submit">Login</LoginButton>
                  {showSubmitError && <ErrorMsg>{errorMsg}</ErrorMsg>}
                </LoginForm>
              </LoginCard>
            </LoginPage>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default withRouter(Login)
