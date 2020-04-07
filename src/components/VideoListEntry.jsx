import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import Search from './Search.js';

class VideoListEntry extends React.Component {
  constructor (props) {
    super(props);
  }



  render() {
    var clicked = (videoObject) => {
      this.props.videoClick(videoObject);
    };

    return (
      <div className="video-list-entry media" onClick={clicked.bind(this, this.props.video)}>
        <div className="media-left media-middle">
          <img className='media-object' src={this.props.video.snippet.thumbnails.default.url} alt="" />
        </div>
        <div className="media-body">
          <div className="video-list-entry-title" >{this.props.video.snippet.title}</div>
          <div className="video-list-entry-detail">{this.props.video.snippet.description}</div>
        </div>
      </div>);
  }
}

export default VideoListEntry;
