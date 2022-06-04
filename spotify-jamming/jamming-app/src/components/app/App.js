import React from 'react';
import './App.css';
import { SearchBar } from "../searchBar/searchBar";
import { SearchResults } from "../searchResults/searchResults";
import { Playlist } from "../playlist/playlist"
// import default from '../../util/Spotify';
import { Spotify } from '../../util/Spotify';

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      playListName: 'My playlist',
      playListTrack: []
    };
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
    this.savePlaylist = this.savePlaylist.bind(this);
    this.search = this.search.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playListTrack;
    if( this.state.playListTrack.find(trackToCheck => trackToCheck.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState(
      {
        playListTrack: tracks
      }
    )

  }
  removeTrack(track) {
    let tracks = this.state.playListTrack;
    tracks = tracks.filter(playlistTrack => playlistTrack.id !== track.id);
    this.setState(
      {
        playListTrack: tracks
      }
    )
  }

  updatePlaylistName(name) {
    this.setState({
      playListName : name
    })
  }


  savePlaylist() {
    const trackUris = this.state.playListTrack.map(track => track.uri);
    Spotify.savePlaylist(this.state.playListName, trackUris).then(() => {
      this.setState({
        playListName: 'New playlist',
        playListTrack: []
      })
    })
  }

  search( term ) {
    Spotify.search( term ).then(results => {
      this.setState({ searchResults: results})
    });
  }


  render() {
    return (
    <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar
          onSearch={this.search}
        />
        <div className="App-playlist">
          <SearchResults
            searchResults={this.state.searchResults}
            onAdd={this.addTrack}
        />
          <Playlist
            playListName={this.state.playListName}
            playListTrack={this.state.playListTrack}
            onRemove={this.removeTrack}
            onNameChange={this.updatePlaylistName}
            onSave={this.savePlaylist}
          />
        </div>
      </div>
    </div>
    )
  }
}

