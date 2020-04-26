import{gql} from 'apollo-boost';

const getArtistQuery = gql`
{
  artists{
    name
    id
  }
}
`

const getSongsQuery = gql`
{
  songs{
    title
    id
  }
}
`
const addSongMutation = gql`
mutation($title:String!, $genre:String!, $artistId:ID!){
  addSong(title:$title, genre: $genre, artistId:$artistId){
    title
    id
  }
}
`
const getSongQuery =gql`
query GetSong($id:ID){
  song(id: $id){
    id
    title
    genre
    artist{
      id
      name
      age
      songs{
        title
        id
      }
    }

  }
}
`



export {getArtistQuery, getSongsQuery, addSongMutation, getSongQuery}
