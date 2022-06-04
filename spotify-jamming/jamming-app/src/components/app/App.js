import React from 'react';
import './App.css';
import { SearchBar } from "../searchBar/searchBar";
import { SearchResults } from "../searchResults/searchResults";
import { Playlist } from "../playlist/playlist"

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [
        {
          name: "Name 1",
          artist: 'Artist 1',
          album: 'Album 1',
          id: 1
        },
        {
          name: "Name 2",
          artist: 'Artist 2',
          album: 'Album 2',
          id: 2
        }
        ],
      playListName: 'lorenzo Franco',
      playListTrack: [
        {
          name: "playlistName 1",
          artist: 'playlistArtist 1',
          album: 'playlistAlbum 1',
          id: 3
        },
        {
          name: "playlistName 2",
          artist: 'playlistArtist 2',
          album: 'playlistAlbum 2',
          id: 4
        }
      ]
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
    this.setState({
      tackURIs: [...this.state.playListTrack]
    })
  }

  search(searchTerm) {
    console.log(searchTerm);
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

