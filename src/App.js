import React, { Component }  from 'react';
import './App.css';
import MovieRow from './MovieRow'

class App extends Component {
  constructor(props) {
    super(props)

    const movies = [
      {id: 0, poster_src: "", title: "Avengers: Infinity War", overview: "Lorem ipsum dolor esat"},
      {id: 1, poster_src: "", title: "Terminator", overview: "Lorem ipsum dolor esat"},
      
    ]
    
   
    var movieRows = [];
    movies.forEach((movie) => {
      console.log(movie.title)

    const movieRow = <MovieRow movie={movie} />

        movieRows.push(movieRow)
    })
    
    this.state = {rows: movieRows}
  }

  render() {
  return (
    <div className="App">
      <table className="table">
        <tbody>
          <tr>
            <td width="8">
              <img  
                width="125" src="" alt="logo" 
              /> 
            </td>
            <td>
              <h1>MovieSearch DB</h1>
            </td>
          </tr>
        </tbody>
      </table>
      <input style={{
        fontSize: '24',
        display: 'block',
        width: '98%',
        paddingTop: 18,
        paddingBottom: 8,
        paddingLeft: 16,
        marginTop: '8px',
        borderRadius: '4px',
        }} placeholder="Enter your search term..." className="input"
      />

      {this.state.rows}
    </div>
  );
}
}

export default App;
