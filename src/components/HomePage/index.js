import {Component} from 'react'

import Header from '../Header'

import {
  HomePageContainer,
  UploadFileForm,
  FormHeading,
  InputField,
  UploadButton,
  DataRecordsContainer,
  DataRecordItem,
  DataRecordTitle,
  DataRecordBody,
  ErrorText,
} from './styledComponent'

class HomePage extends Component {
  state = {
    selectedFile: null,
    isFileValidated: false,
    fileContent: '',
    showError: false,
  }

  isValidJSON = () => {
    const {fileContent} = this.state
    try {
      JSON.parse(fileContent)
      this.setState({isFileValidated: true})
    } catch (e) {
      console.log('hj')
      this.setState({isFileValidated: false})
    }
  }

  getFileContent = () => {
    const {selectedFile} = this.state
    const reader = new FileReader()
    if (selectedFile.type === 'application/json') {
      reader.onload = e => {
        const file = e.target.result
        const lines = file.split(/\r\n|\n/)
        this.setState({fileContent: lines.join('\n'), showError: false})
      }
    } else {
      this.setState({showError: true})
    }

    reader.onerror = e => e.target.error.name
    reader.readAsText(selectedFile)
  }

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]}, this.getFileContent)
  }

  onFileUpload = event => {
    event.preventDefault()
    const {selectedFile} = this.state
    if (selectedFile.type === 'application/json') {
      this.isValidJSON()
    } else {
      this.setState({isFileValidated: false, showError: true})
    }
  }

  renderFileUploadSection = () => (
    <UploadFileForm onSubmit={this.onFileUpload}>
      <FormHeading>Upload JSON file</FormHeading>
      <InputField type="file" onChange={this.onFileChange} />
      <UploadButton type="submit">Upload!</UploadButton>
    </UploadFileForm>
  )

  renderFileRecords = () => {
    const {isFileValidated, fileContent, showError} = this.state
    if (isFileValidated) {
      const valuesArray = JSON.parse(fileContent)
      return (
        <DataRecordsContainer>
          {valuesArray.map(item => (
            <DataRecordItem key={item.id}>
              <DataRecordTitle>{item.title}</DataRecordTitle>
              <DataRecordBody>{item.body}</DataRecordBody>
            </DataRecordItem>
          ))}
        </DataRecordsContainer>
      )
    }
    if (showError) {
      return <ErrorText>Select Valid JSON Data File</ErrorText>
    }
    return null
  }

  render() {
    return (
      <HomePageContainer>
        <Header />
        {this.renderFileUploadSection()}
        {this.renderFileRecords()}
      </HomePageContainer>
    )
  }
}

export default HomePage
