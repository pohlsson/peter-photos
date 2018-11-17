import React, {Component} from 'react'
import {connect} from 'react-redux';
import styled, {createGlobalStyle, ThemeProvider} from 'styled-components';
import reset from 'styled-reset';
import {mainTheme} from 'styles/themes';
import {actions as apiActions} from 'actions/apiActions';
import MainContainer from 'components/containers/mainContainer';

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body, #root {
      height: 100%;
  }
  html {
    overflow: hidden;
    background-image: linear-gradient(
      to bottom right,
      ${props => props.theme.depth0},
      ${props => props.theme.depth2}
     );
  }
`;

const StyledApp = styled.div`
    height: 100%;
    header {
        display: none;
    }
`;

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatchGetPhotos();
  }

  render() {
    return (
      <ThemeProvider theme={mainTheme}>
        <StyledApp>
          <GlobalStyle />
            <header><h1>Peter Photos</h1></header>
          <MainContainer />
        </StyledApp>
      </ThemeProvider>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  dispatchGetPhotos: () => dispatch(apiActions.getPhotos()),
});

export default connect(
  null,
  mapDispatchToProps,
)(AppContainer);



