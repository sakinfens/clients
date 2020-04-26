import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getSongQuery} from "../queries/queries.js"


class SongDetails extends Component {
    displaySongDetails(){
        const { song } = this.props.data;
        if(song){
            return(
                <div>
                    <h2>{ song.title }</h2>
                    <p>{ song.genre }</p>
                    <p>{ song.artist.name }</p>
                    <p>All songs by this artist:</p>
                    <ul className="other-songs">
                        { song.artist.songs.map(item => {
                            return <li key={item.id}>{ item.title }</li>
                        })}
                    </ul>
                </div>
            );
        } else {
            return( <div>No song selected...</div> );
        }
    }
    render(){
      console.log(this.props)
        return(
            <div id="song-details">
                { this.displaySongDetails() }
            </div>
        );
    }
}

export default graphql(getSongQuery, {
    options: (props) => {
        return {
            variables: {
                id: props.songId
            }
        }
    }
})(SongDetails);
