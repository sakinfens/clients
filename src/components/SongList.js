import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import {getSongsQuery} from "../queries/queries.js"
import SongDetails from './SongDetails.js'


class SongList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected:null
    }
  }
  displaySongs(){
    const data = this.props.data;
    if(data.loading){
      return(<div>Loading Songs... </div>);
    }else{
      return data.songs.map(song =>{
        return(
           <li key={ song.id } onClick={ (e) => this.setState({ selected: song.id }) }>{ song.title }</li>
        )
      })
    }
  }

  render(){
    console.log(this.props);
    return(
      <div id="main">
        <ul id="song-list">
          {this.displaySongs()}
        </ul>
        <SongDetails songId={this.state.selected}/>
      </div>
    )
  }
}

export default graphql(getSongsQuery)(SongList);
