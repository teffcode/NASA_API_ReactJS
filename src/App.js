import React, { Component } from 'react';
import axios from 'axios';

import './App.css';

let API_KEY = 'Gi6BqZIES2d3N7v8UMFkL84pyP99e3qM94jIwfdV';

class App extends Component {

  state = {
    photos: []
  }

  componentDidMount(){
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=5`)
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
        <div>
          {console.log('photo', photo)}
          <img src={photo.url}/>
        </div>
      )
    })
  }

  render() {
    return (
      <div>
       APOD
       {this.renderGetPhotos()}
      </div>
    );
  }
}

export default App;
