import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'
import { kiranSong } from '../actions'

class SongList extends Component {
    render() {
        return (
            <div >
                songs list
            
                 
                {this.props.songs.map((song) => (
                    <div className="ui divided list"  key={song.title}> 
                    <div className="item" >
                        <div className="right floated content">
                            <button onClick={()=>this.props.selectSong(song)} className="ui button primary">
                                select
                             </button>
                             <button onClick={()=>this.props.kiranSong(song)} className="ui button primary">
                                kiran
                             </button>
                        </div>
                        <div className="content">{song.title}</div>
                    </div>
                  </div>
                ))}
            </div>
        )
    }
}

const mapStateProps = (state) => {
   // console.log(state);
    return {
        songs: state.songs
    }
}

export default connect(mapStateProps, { selectSong,kiranSong })(SongList);