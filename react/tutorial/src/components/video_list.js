import React,{Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component{

    render = () =>{
        const videos = this.props.videos;
        const listItems = videos.map((video) => {
            return (<
                VideoListItem video={video} 
                key={video.etag} 
                onVideoSelect2={this.props.onVideoSelect}/>
            );
        });

        return(
        <ul className="col-md-4 list-group">
            {listItems}
        </ul>);
    }
}

export default VideoList;