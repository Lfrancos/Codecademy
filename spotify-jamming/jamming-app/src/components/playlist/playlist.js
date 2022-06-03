import React from "react";
import "./playlist.css";
import { TrackList } from "../trackList/trackList";

export class Playlist extends React.Component {
    render() {
        return (
            <div className="Playlist">
                <input defaultValue={this.props.playListName ? this.props.playListName : 'New playlist'}/>
                <TrackList tracks={this.props.playListTrack} isRemoval={true} onRemove={this.props.onRemove} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        )
    }
}