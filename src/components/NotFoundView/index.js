import {withRouter} from 'react-router-dom'
import NotFoundViewImg from '../../resources/NotFoundView.png'

import {
  NotFoundViewContainer,
  NotFoundViewLogo,
  Heading,
  Text,
  GoBackButton,
} from './styledComponents'

const NotFoundView = props => {
  const gotoBackPage = () => {
    const {history} = props
    history.goBack()
  }
  return (
    <NotFoundViewContainer>
      <NotFoundViewLogo src={NotFoundViewImg} alt="not found" />
      <Heading>PAGE NOT FOUND</Heading>
      <Text>
        were sorry, the page you requested could not be found please go back to
        home
      </Text>
      <GoBackButton onClick={gotoBackPage}>Go Back</GoBackButton>
    </NotFoundViewContainer>
  )
}

export default withRouter(NotFoundView)
