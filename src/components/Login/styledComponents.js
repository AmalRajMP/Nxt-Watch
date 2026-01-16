import styled from 'styled-components'

export const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isLightTheme ? '#f9f9f9' : '#181818')};
`

export const LoginCard = styled.div`
  min-height: 300px;
  width: 350px;
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#0f0f0f')};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 15px;
  padding: 25px;
  box-shadow: ${(props) =>
    props.isLightTheme
      ? '0 8px 30px rgba(0,0,0,0.12)'
      : '0 8px 30px rgba(0,0,0,0.5)'};
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
`

export const LoginForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const InputSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const LabelText = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: ${(props) => (props.isLightTheme ? '#475569' : '#ffffff')};
`

export const InputBox = styled.input`
  height: 36px;
  width: 100%;
  font-size: 14px;
  padding: 8px 12px;
  border: 1px solid ${(props) => (props.isLightTheme ? '#94a3b8' : '#424242')};
  background-color: ${(props) => (props.isLightTheme ? '#ffffff' : '#0f0f0f')};
  color: ${(props) => (props.isLightTheme ? '#64748b' : '#ffffff')};
  outline: none;
`

export const ShowPasswordSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ShowPasswordLabelText = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: ${(props) => (props.isLightTheme ? '#000000' : '#ffffff')};
`

export const LoginButton = styled.button`
  background-color: #3b82f6;
  color: #ffffff;
  font-size: 14px;
  border: none;
  border-radius: 10px;
  padding: 10px;
  cursor: pointer;
`
export const DemoCredentials = styled.div`
  margin-top: 6px;
  padding: 10px;
  border-radius: 6px;
  text-align: left;
  font-size: 12px;
  line-height: 1.6;

  background-color: ${(props) => (props.isLightTheme ? '#f1f5f9' : '#1e1e1e')};

  color: ${(props) => (props.isLightTheme ? '#475569' : '#94a3b8')};
`

export const DemoHighlight = styled.span`
  color: ${(props) => (props.isLightTheme ? '#2563eb' : '#60a5fa')};
  font-weight: 600;
`

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: -10px;
`
