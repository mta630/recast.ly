import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';

class VideoList extends React.Component {
  constructor (props) {
    super(props);
  }

  // refer to it by exampleVideoData
  render () {
    return (
      <div className='video-list media'>
        {this.props.videoList ? this.props.videoList.map((video) => <VideoListEntry video={video} videoClick={this.props.videoClick} key={video.etag} />) : 'No videos to display'}
      </div>
    );
  }
}

export default VideoList;
