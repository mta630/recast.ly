class VideoDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      !this.props.fullDescription ? <div className="video-description-area">DESCRIPTION HOLDER</div> :
      <div className="video-description-area">
        <div className="video-views">{this.props.fullDescription[0].statistics.viewCount} <b>Views</b>
          <span><i className="far fa-thumbs-up"></i>{this.props.fullDescription[0].statistics.likeCount}
        <i className="far fa-thumbs-down"></i>   {this.props.fullDescription[0].statistics.dislikeCount}</span></div>
        <div className="video-description">{this.props.fullDescription[0].snippet.description}</div>
        <div className="video-views"></div>
      </div>
    );
  }
}
export default VideoDescription;