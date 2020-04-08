var VideoPlayer = ({video}) => (
  !video ? <div className ='video-list'>No current video</div> :
    <div className='video-list'>
      <div className='embed-responsive embed-responsive-16by9'>
        <iframe className='embed-video-list' src={`https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`}></iframe>
      </div>
      <div className='video-player-details'>
        <h3>{video.snippet.title}</h3>
      </div>
    </div>
);

VideoPlayer.propTypes = {
  video: PropTypes.object.isRequired
};

export default VideoPlayer;



