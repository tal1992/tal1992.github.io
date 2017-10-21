import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import YTSearch from 'youtube-api-search';

const API_KEY = 'AIzaSyC7wYKVBLJM3fQEl_blUbFULsWmvQXIaAU';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {videos:[], active:null, searchTerm:'Robot'};
    this.ytsearch(this.state.searchTerm);
  }

  ytsearch = (term) => {  
    YTSearch({key:API_KEY,term:term}, (data) => {
      this.setState({videos:data, active: data[0]});
    });
  }


  render() {
    this.ytsearch(this.state.searchTerm);
    return (
      <div className="App container">
        <Searchbar onInputEnter={(newTerm) => {this.setState({searchTerm:newTerm}); }}/>
        <div className="row">
            <VideoDetail video={this.state.active}/>
            <VideoList videos={this.state.videos} 
            onVideoSelect={(active) => this.setState({active})} />
        </div>
      </div> 
    );
  }
}

export default App;
