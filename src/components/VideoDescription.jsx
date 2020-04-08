class VideoDescription extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="video-description-area">
        <div className="video-description">{this.props.fullDescription ? this.props.fullDescription[0].snippet.description : "NO CURRENT DESCRIPTION"}</div>
        <div className="video-views"></div>
        <div className="video-stats"></div>
      </div>
    );
  }
}
export default VideoDescription;