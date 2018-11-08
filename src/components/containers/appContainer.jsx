import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import reset from 'styled-reset';
import {mainTheme} from 'styles/themes';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import MainContainer from 'components/containers/mainContainer';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const StyledApp = styled.div`
    background-image: linear-gradient(
    to bottom right,
    ${props => props.theme.depth0},
    ${props => props.theme.depth2}
   );
`;

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatchGetPhotos();
  }

  render() {
    const {selectedAlbum} = this.props;
    return (
      <ThemeProvider theme={mainTheme}>
        <StyledApp>
          <GlobalStyle />
          <header>Peter Photos</header>
          <MainContainer />
        </StyledApp>
      </ThemeProvider>
    )
  }
}

const mapStateToProps = state => ({
  selectedAlbum: getSelectedAlbum(state),
});


const mapDispatchToProps = dispatch => ({
  dispatchGetPhotos: () => dispatch(apiActions.getPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppContainer);



