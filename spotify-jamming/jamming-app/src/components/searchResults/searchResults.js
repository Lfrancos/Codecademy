import React from 'react';
import "./searchResults.css";
import { TrackList } from '../trackList/trackList';

export class SearchResults extends React.Component {
    render() {
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList onAdd={this.props.onAdd} tracks={this.props.searchResults} isRemoval={false} />
            </div>
        )
    }
}