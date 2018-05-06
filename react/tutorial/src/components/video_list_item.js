import React,{Component} from 'react';

class VideoListItem extends Component{
    render = () =>{
        const imgurl = this.props.video.snippet.thumbnails.default.url;
        const thisVid = this.props.video;
        return(
        <li className="list-group-item" 
        onClick={() =>  {this.props.onVideoSelect2(thisVid);}}>
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imgurl}/>
                </div>
                <div className="media-body">
                    <div className="media-heading">{this.props.video.snippet.title}</div>
                </div>    

            </div>
        </li>
        );
    }
}

export default VideoListItem;