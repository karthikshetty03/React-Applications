import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

//if it is a named export means if there a multiple exports than you need the curly braces otherwise you dont need
const App = () =>
{
    return (
        <div className ="ui container grid">
            <div className="ui row">
                <div className="column eight wide"><SongList/>
                </div>
                <div className="column eight wide">
                    <SongDetail/>
                </div>
            </div>
        </div>
    
    );
};

export default App;
