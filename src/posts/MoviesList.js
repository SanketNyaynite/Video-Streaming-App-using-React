import React, { Component } from 'react';
import Information from '../data/posts.json';

class MoviesList extends Component {

  constructor(){
    super();

    this.state={
      search:null
    };
  }

  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }

  render(){
    const styleInfo = {
      paddingRight:'10px'
    }
    const elementStyle ={
      border:'solid',
      borderRadius:'10px',
      position:'relative',
      display:'none',
      left:'10vh',
      height:'5vh',
      width:'30vh',
      marginTop:'5vh',
      marginBottom:'10vh'
    }

    const items = Information.filter((data)=>{
      if(this.state.search == null)
          return data
      else if(data.title.toLowerCase().includes(this.state.search.toLowerCase())|| data.releaseYear.toLowerCase().includes(this.state.search.toLowerCase())){
          return data
      }
      }).map(data=>{
        if(data.programType.toLowerCase()==='movie' && data.releaseYear >= 2010 )
    {
      return(
      <div style={{overflow:'hidden', display:'inline-block', left:'7vh',position:'relative'}}>
      <br></br>
        <table>
          <tr>
            <th></th>
            <td style={{display:'block'}}><img style={{ flex: 4, height: 200, width: 200, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }} src={data.images.Poster_Art.url} width={data.images.Poster_Art.width} height={data.images.Poster_Art.height}/></td>
            <br></br>
            <td style={{display:'block'}}>{data.title}</td>    
          </tr>  
        </table>
      </div>
      )
    }
    else
    {
      
    }
    })

    return (
      <div>
      <input type="text" placeholder="Search here" style={elementStyle} onChange={(e)=>this.searchSpace(e)} />
      {items}
      </div>
      )
   }
}

export default MoviesList;