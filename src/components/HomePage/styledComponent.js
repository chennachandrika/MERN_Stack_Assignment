import styled from 'styled-components'

export const HomePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  background-color: #0f172a;
  color: #ffffff;
`

export const HomePageHeading = styled.div`
  display: flex;
`
export const UploadFileForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    width: 30vw;
    border-radius: 10px;
    padding: 20px;
    background: rgba(255, 255, 255, 0.06);
    box-shadow: 0px 4px 16px rgba(126, 133, 142, 0.16);
  }
`

export const FormHeading = styled.h1``
export const InputField = styled.input`
  width: 246px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-top: 5px;
  outline: none;
  color: #ffffff;
  background: rgba(255, 255, 255, 0.06);
`
export const UploadButton = styled.button`
  border: none;
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  margin: 10px;
  outline: none;
  cursor: pointer;
  background-color: #0b69ff;
  color: #ffffff;
  font-weight: bold;
`
