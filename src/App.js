import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

let API_KEY = 'Gi6BqZIES2d3N7v8UMFkL84pyP99e3qM94jIwfdV';

class App extends Component {

  state = {
    photos: []
  }

  componentDidMount(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=12`)
    .then(response => {
      this.setState({
        photos: response.data
      })
      console.log(this.state)
    })
  }

  renderGetPhotos = () => {
    const { photos } = this.state;

    return photos.map(photo => {
      return (
        <div className="card">
          <img src={photo.url}/>
          <p>{photo.title}</p>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <h1>Astronomy Picture of the Day</h1>
        <div className="container">
          {this.renderGetPhotos()}
        </div>
      </div>
    );
  }
}

export default App;
