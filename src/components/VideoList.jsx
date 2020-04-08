import VideoListEntry from './VideoListEntry.js';

var VideoList = ({videoList, handleVideoClick}) => (
  <div className='video-list'>
    {videoList.map( (video) => <VideoListEntry video={video} handleVideoClick={handleVideoClick} key={video.etag} />)}
  </div>
);

VideoList.propTypes = {
  videoList: PropTypes.array.isRequired
};

export default VideoList;






// import VideoListEntry from './VideoListEntry.js';

// var VideoList = ({videos, handleVideoClick})

//   // refer to it by exampleVideoData
//   render () {
//     return (
//       <div className='video-list'>
//         {this.props.videoList ? this.props.videoList.map((video) => <VideoListEntry video={video} videoClick={this.props.videoClick} key={video.etag} />) : 'No videos to display'}
//       </div>
//     );
//   }
// }

// VideoList.propTypes = {
//   videos: PropTypes.array.isRequired
// };

// export default VideoList;