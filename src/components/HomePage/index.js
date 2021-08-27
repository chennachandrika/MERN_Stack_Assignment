import {Component} from 'react'

import Header from '../Header'

import {
  HomePageContainer,
  UploadFileForm,
  FormHeading,
  InputField,
  UploadButton,
} from './styledComponent'

class HomePage extends Component {
  state = {selectedFile: null, isFileValidated: false}

  onFileChange = event => {
    this.setState({selectedFile: event.target.files[0]})
  }

  onFileUpload = () => {
    const {selectedFile} = this.state
    const formData = new FormData()
    formData.append('myFile', selectedFile, selectedFile.name)
    console.log(selectedFile, Object.keys(selectedFile))
  }

  renderFileUploadSection = () => (
    <UploadFileForm onSubmit={this.onFileUpload}>
      <FormHeading>Upload JSON file</FormHeading>
      <InputField type="file" onChange={this.onFileChange} />
      <UploadButton type="submit">Upload!</UploadButton>
    </UploadFileForm>
  )

  renderFileRecords = () => {
    const {isFileValidated} = this.state
    if (isFileValidated) {
      return <h1>hi</h1>
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
