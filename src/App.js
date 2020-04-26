import React, {Component} from 'react';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from 'react-apollo';

//components
import SongList from "./components/SongList.js";
import AddSong from"./components/AddSong.js"

//setting up Apollo
const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})


class App extends Component {
  render(){
    return(
      <ApolloProvider client={client}>
      <div id="main">
        <h1>All Time Music List</h1>
        <SongList />
        <AddSong />
      </div>
      </ApolloProvider>
    )
  }
}

export default App;
