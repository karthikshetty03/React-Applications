import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar'; 
import ImageList from './ImageList';





class App extends React.Component {
    state={images:[]};
    onSearchSubmit=async term => {
       const response=await unsplash.get('/search/photos',{
           params : {
            query : term
           },


       });
       //remove semicoplon above and put .then((response)=>{console.log(response.data.results);)};
       
    
    //console.log(response.data.results);
    //console.log(this);
    this.setState({
        images:response.data.results
    });

    }


    render() {
        return (
            <div className="ui container" style={{marginTop:'20px'}}>
                <SearchBar onformsubmit={this.onSearchSubmit}/>  
                <ImageList images={this.state.images} />
            </div>
        );
    }
}


export default App;
