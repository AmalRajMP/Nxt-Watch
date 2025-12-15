import styled from 'styled-components'

export const LoginPage = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginCard = styled.div`
  min-height: 300px;
  width: 350px;
  max-width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
`

export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
  max-height: 50px;
  max-width: 180px;
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
  color: #475569;
  font-size: 12px;
  font-weight: 500;
`

export const InputBox = styled.input`
  height: 30px;
  width: 100%;
  color: #64748b;
  font-size: 12px;
  border: 1px solid #94a3b8;
  padding: 12px;
  outline: none;
`

export const ShowPasswordSection = styled.div`
  height: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
`

export const ShowPasswordLabelText = styled.label`
  color: #000000;
  font-size: 14px;
  font-weight: 500;
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

export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-size: 14px;
  margin-top: -10px;
`
