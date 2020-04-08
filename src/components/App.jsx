import VideoList from './VideoList.js';
import Search from './Search.js';
import VideoPlayer from './VideoPlayer.js';
import VideoDescription from './VideoDescription.js';
import searchYouTube from '../lib/searchYouTube.js';
import searchVideoDetails from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      videoList: [],
      nowPlaying: null,
      fullDescription: []
    };
  }

  selectVideo(selectedVideo) {
    this.setState({
      nowPlaying: selectedVideo
    });
  }

  componentDidMount() {
    this.getYouTubeVideos('Guy on a buffalo');
  }

  getYouTubeVideos(searchTerm) {
    var obj = {query: searchTerm, max: 5, key: YOUTUBE_API_KEY};
    searchYouTube(obj, (newList) =>
      this.setState({
        videoList: newList,
        nowPlaying: newList[0]
      }));
  }



  setNewList(data) {
    this.setState({
      nowPlaying: data[0],
      videoList: data
    });
  }

  handleVideoClick(video) {
    this.setState({
      nowPlaying: video,
    });
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
            {console.log(this.state.nowPlaying)}
            <VideoPlayer video={this.state.nowPlaying}/>
            <VideoDescription fullDescription={this.state.videoDescription} />
          </div>
          <div className="col-md-5">
            <VideoList videoList={this.state.videoList} handleVideoClick={this.handleVideoClick.bind(this)}/>
          </div>
        </div>
      </div>);
  }
}


export default App;