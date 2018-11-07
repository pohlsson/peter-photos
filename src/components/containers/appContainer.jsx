import React, {Component} from 'react'
import {connect} from 'react-redux';
import {actions as apiActions} from 'actions/apiActions';
import {getSelectedAlbum} from 'reducers/albumsReducer';
import AlbumContainer from 'components/containers/albumContainer';

export class AppContainer extends Component {
  componentDidMount() {
    this.props.dispatchGetPhotos();
  }

  render() {
    const {selectedAlbum} = this.props;
    return (
      <section className="app">
        <header>Peter Photos</header>
        {selectedAlbum && <AlbumContainer album={selectedAlbum}/>}
      </section>
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



