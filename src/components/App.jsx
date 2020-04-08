import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoDescription from './VideoDescription.js';
import searchYouTube from '../lib/searchYouTube.js';
import searchVideo from '../lib/searchVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videoList: [],
      nowPlaying: null,
      fullDescription: null
    };
  }

  componentDidMount() {
    this.getYouTubeVideos('Guy on a buffalo');
    if (this.state.nowPlaying) {
      this.handleDescriptionUpdate(this.state.nowPlaying);
    }
  }

  getYouTubeVideos(searchTerm) {
    var obj = {query: searchTerm, max: 5, key: YOUTUBE_API_KEY};
    searchYouTube(obj, (newList) =>
      this.setState({
        videoList: newList,
        nowPlaying: newList[0]
      }));
    if (this.state.nowPlaying) {
      this.handleDescriptionUpdate(this.state.nowPlaying);
    }
  }

  handleDescriptionUpdate(video) {
    var obj = {id: video.id.videoId, key: YOUTUBE_API_KEY};
    searchVideo(obj, (newList) =>
      this.setState({
        fullDescription: newList
      }));
  }

  handleVideoClick(video) {
    this.setState({
      nowPlaying: video,
    });
    if (this.state.nowPlaying) {
      this.handleDescriptionUpdate(this.state.nowPlaying);
      console.log(this.state.fullDescription);
    }
  }



  render () {

    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em><Search handleSearchChange={this.getYouTubeVideos.bind(this)} /></em></h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.nowPlaying}/>
            <VideoDescription fullDescription={this.state.fullDescription} />
          </div>
          <div className="col-md-5">
            <VideoList videoList={this.state.videoList} handleVideoClick={this.handleVideoClick.bind(this)}/>
          </div>
        </div>
      </div>);
  }
}


export default App;