import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';

class VideoPlayer extends React.Component {

  constructor(props) {
    super(props);
  }

  render () {

    return (
      <div className="video-player">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={this.props.nowPlaying ? 'https://www.youtube.com/embed/' + this.props.nowPlaying.id.videoId : 'https://www.youtube.com/embed/dQw4w9WgXcQ'} allowFullScreen></iframe>
        </div>
        <div className="video-player-details">
          <h3>{this.props.nowPlaying ? this.props.nowPlaying.snippet.title : 'Please choose a video'}</h3>
          <div>{this.props.nowPlaying ? this.props.nowPlaying.snippet.description : 'Enjoy Rick Astley while you make your decision' }</div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoPlayer;


