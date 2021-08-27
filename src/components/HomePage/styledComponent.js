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
  margin-top: 150px;
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
export const DataRecordsContainer = styled.ul`
  padding: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const DataRecordItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  color: #ffffff;
  margin-bottom: 10px;
  padding: 10px;
  width: 80%;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.06);
`

export const DataRecordTitle = styled.h1`
  font-size: 14px;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`

export const DataRecordBody = styled.p`
  font-size: 12px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`
export const ErrorText = styled.p`
  color: red;
`
