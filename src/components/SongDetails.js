import React from 'react';
import {connect} from 'react-redux';

const SongDetails = ({song}) => {
    console.log(song);
    if(!song){
        return "select song"
    }
    return(
     <div>   
    <div> Song title : {song.title}</div>
    <div> Song duration : {song.dutation}</div>
    </div>
    );
};

const myStatePropes = (song) =>{
     
    return {

        song : song.selectedSong
    }

}

export default connect(myStatePropes)(SongDetails);