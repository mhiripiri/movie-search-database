import React, { Component }  from 'react';
import './App.css';
import MovieRow from './MovieRow'
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props)
    this.state= {}

  //   const movies = [
  //     {id: 0, poster_src: "", title: "Avengers: Infinity War", overview: "Lorem ipsum dolor esat"},
  //     {id: 1, poster_src: "", title: "Terminator", overview: "Lorem ipsum dolor esat"},
      
  //   ]
    
   
  //   var movieRows = [];
  //   movies.forEach((movie) => {
  //     console.log(movie.title)

  //   const movieRow = <MovieRow movie={movie} />

  //       movieRows.push(movieRow)
  //   })
    
  //   this.state = {rows: movieRows}
  // }
  this.performSearch("england")

}

  performSearch(searchTerm) {
    console.log("Perform Search using TMdB")
    const urlString = "https://api.themoviedb.org/3/search/movie?api_key=973caae44cfe60854211375f4a9dc7d6&language=en-US&page=1&include_adult=false&&query=" + searchTerm;
    $.ajax({
      url: urlString,
      success: (searchResults) => {
        console.log("Fetched Successfully")
        // console.log(searchResults)
        const results = searchResults.results
        console.log(results[0])

        var movieRows = []

        results.forEach((movie) => {
          movie.poster_src = "http://image.tmdb.org/t/p/w185" + movie.poster_path
          console.log(movie.title)
          const movieRow = <MovieRow key={movie.id} movie={movie} />
          movieRows.push(movieRow)
        })

        this.setState({rows: movieRows})
    
      },
      error: (xhr, status, err) => {
        console.error("Error: Failed to Fetch Data")
      }
    })
  }

  searchChangeHandler (event) {
    console.log(event.target.value)
    const boundObject = this
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
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
        }} onChange={this.searchChangeHandler.bind(this)} placeholder="Enter your search term..." className="input"
      />

      {this.state.rows}
    </div>
  );
}
}

export default App;
