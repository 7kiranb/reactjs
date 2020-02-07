
import { combineReducers} from 'redux';

const songsReducer = () => {

    return [
        {  title : "janagana mana" ,dutation : '4:20'},
        {  title : "om nama shivaya " ,dutation : '3:20'},
        {  title : "jaya jayahea telangana" ,dutation : '4:20'}
    ];
};

const selectedSongReducer = (selectedSong=null,action) =>{
   if(action.type === "SONG_SELECTED"){
    return action.payload;

   }
   else if(action.type === "KIRAN_SELECTED"){
       return action.kiranload
   }


   return selectedSong ;
};

const count = (count=0,action) =>{
     if(action.type === "increment"){
         return count + 1 ;
     }
     else if(action.type === "decrement"){
         return count - 1 ;
     }
     return count ;

}
 

export default combineReducers({
 songs : songsReducer,
 selectedSong: selectedSongReducer,
 counts : count 

});