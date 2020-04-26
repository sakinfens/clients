import React, {Component} from 'react';
import {graphql} from 'react-apollo';
import { flowRight as compose } from 'lodash';
import {getArtistQuery, addSongMutation, getSongsQuery} from "../queries/queries.js";

class AddSong extends Component {
  constructor(props){
    super(props);
    this.state={
      title: "",
      genre: "",
      artistId: ""
    };
  }
  displayArtist(){
    const data = this.props.getArtistQuery;
    if(data.loading){
      return(<option>Loading Artist</option>);
    }else{
      return data.artists.map(artist =>{
        return(<option key = {artist.id} value={artist.id}>{artist.name}</option>)
      })
    }
  }
  submitForm(e){
    e.preventDefault();
    this.props.addSongMutation({
      variables:{
        title:this.state.title,
        genre:this.state.genre,
        artistId:this.state.artistId
      },
      refetchQueries:[{query:getSongsQuery}]
    });
  }
  render(){
    return(
      <form id="add-book" onSubmit={this.submitForm.bind(this)}>
        <div className="field">
            <label>Song name:</label>
            <input type="text" onChange={(e)=>this.setState({title:e.target.value})}/>
        </div>
        <div className="field">
            <label>Genre:</label>
            <input type="text" onChange={(e)=>this.setState({genre:e.target.value})}/>
        </div>
        <div className="field">
            <label>Artist:</label>
            <select onChange={(e)=>this.setState({artistId:e.target.value})}>
                <option>Select artist</option>
                {this.displayArtist()}
            </select>
        </div>
        <button>+</button>
      </form>
    )
  }
}

export default compose(
    graphql(getArtistQuery, { name: "getArtistQuery" }),
    graphql(addSongMutation, { name: "addSongMutation" })
)(AddSong);
