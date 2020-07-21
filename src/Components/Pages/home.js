import React, { Component } from 'react'
import { View } from 'react-native'
class Home extends Component{
  render() {
    return (
      <div className="container"> 
      	<h1>Welcome to Home page...</h1>	
      	<div style={{overflow:'hidden', display:'inline-block', left:'7vh',position:'relative'}}>
      <br></br>
        <table>
          <tr>
          <th></th>
            <td><a href="MoviesList"><img style={{ flex: 4, height: 200, width: 200, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} src='/assets/images/movies.jpg' alt="Logo" /></a></td>
            <td><a href="SeriesList"><img style={{ flex: 4, height: 200, width: 200, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} src='/assets/images/series.jpg' alt="Logo" /></a></td>
          </tr>  
        </table>
      </div>  
      </div>
    ); 
  }
}

export default Home;

