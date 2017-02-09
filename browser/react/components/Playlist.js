import React from 'react';
import Songs from './Songs';

class Playlist extends React.Component {

// start here and make into a class for the selection operation on didMount....
constructor () {
  super();
}

componentWillReceiveProps(nextProps) {
  if(this.props !== nextProps) {
     this.props.selectPlaylist(nextProps.routeParams.playlistId);
  }
}

componentDidMount () {
  this.props.selectPlaylist(this.props.routeParams.playlistId);
}

render() {
  const playlist = this.props.selectedPlaylist;
  console.log(playlist);
  return (

    <div>
      <h3>{ playlist.name }</h3>
      <Songs songs={playlist.songs} /> {/** Hooray for reusability! */}
      { playlist.songs && !playlist.songs.length && <small>No songs.</small> }
      <hr />
    </div>

  );
}


}

export default Playlist;
