import React, {Component} from 'react'
import {connect} from 'react-redux';
import {actions as apiActions} from 'actions/apiActions';
import Album from 'components/containers/album';

export class App extends Component {
  componentDidMount() {
    this.props.dispatchGetPhotos();
  }

  render() {
    return (
      <section className="app">
        <header>Peter Photos</header>

      </section>
    )
  }
}

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchGetPhotos: () => dispatch(apiActions.getPhotos()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);



