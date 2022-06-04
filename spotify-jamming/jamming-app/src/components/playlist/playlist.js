import React from "react";
import "./playlist.css";
import { TrackList } from "../trackList/trackList";

export class Playlist extends React.Component {
    constructor(props) {
        super(props);
        this.handleNameChange = this.handleNameChange.bind(this);
    }
    handleNameChange(e) {
        this.props.onNameChange(e.target.value);
    }
    render() {
        return (
            <div className="Playlist">
                <input
                    defaultValue={this.props.playListName ? this.props.playListName : 'New playlist'}
                    onChange={this.handleNameChange}
                />
                <TrackList
                    tracks={this.props.playListTrack}
                    isRemoval={true}
                    onRemove={this.props.onRemove}
                />
                <button className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</button>
            </div>
        )
    }
}