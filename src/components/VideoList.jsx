import VideoListEntry from './VideoListEntry.js';
import Search from './Search.js';


// var VideoList = (exampleVideoData) (
//   <div className="video-list media">
//     {exampleVideoData.map( (video) =>
//       <   V  ideoListEntry />)}
//   </div>
// );


class VideoList extends React.Component {
  constructor (props) {
    super(props);
  }

  // refer to it by exampleVideoData
  render () {
    return (
      <div className='video-list media'>
        {this.props.videoList.map((video) => <VideoListEntry video={video} key={video.etag} />)}
      </div>
    );
  }
}

export default VideoList;
