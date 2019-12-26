import { combineReducers } from 'redux';


const songsReducer = () => {
    return [
        { title : 'No Scrubs' ,duration : '2:30'},
        { title : 'Macarena' ,duration : '3:20'},
        { title : 'All Star' ,duration : '3:30'},
        { title : 'I want that way' ,duration : '2:20'}


    ];

};


const selectedSongReducer = (selectedSong=null,action) => {
    if(action.type === 'SONG_SELECTED')
    {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs : songsReducer,
    selectedSong : selectedSongReducer
});