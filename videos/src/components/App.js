import React from 'react';
import SearchBar from './SearchBar';
import axios from 'axios';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
const KEY = 'AIzaSyCsGozUjE7ktIWneRjamV-of6vJill5HaU';



class App extends React.Component 
{
    
    state={videos : [],selectedVideo : null};
    
    componentDidMount() {
        this.onTermSubmit('Songs');
    }
    onTermSubmit = async term => {


        const response = await axios.get('/search',
        {
            baseURL : 'https://www.googleapis.com/youtube/v3',
            params :
            {  
                part : 'snippet' ,
                maxResults : 5,
                key : KEY ,
                q:term,
    
    
            }
        })
       
    .then(response => { 
        
        this.data=response.data;
        this.data.items=response.data.items;
        this.setState({ 
            videos : this.data.items ,
            selectedVideo : this.data.items[0] //from our search set , set the first video as the default selected video and display 
        }) ;
        return Promise.resolve(this);
    })
    .catch(error => {
        console.log(error.response)
    });

    
    
      
};


onVideoSelect = video =>
{
    
    
    this.setState({
        selectedVideo : video
    });

};
  
   



   render()
   {
       return (
           <div className ="ui container">
               <SearchBar onFormSubmit = {this.onTermSubmit} />
               <div className="ui grid">
                   
                    <div className="ui row">

                        <div className="eleven wide column" >
                            <VideoDetail video={this.state.selectedVideo} />
                        </div>

                        <div className="five wide column">
                            <VideoList onVideoSelect={this.onVideoSelect}  videos={this.state.videos} />
                        </div>

                    </div>

                </div>
            </div>


         );

    };
}


export default App;