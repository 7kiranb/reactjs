
//Action Creator
export const selectSong = (song) => {

    return{
        type : "SONG_SELECTED",
        payload : song
    };
};

export const kiranSong = (kiran) =>{

    return{
        type : "KIRAN_SELECTED",
        kiranload :  kiran
    };
};

export const increment = () =>{
    return{
        type: "increment",
    
    };
;}
export const decrement = () =>{
    return {
        type: "decrement"
    }
}