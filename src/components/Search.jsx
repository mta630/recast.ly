import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoListEntry from './VideoListEntry.js';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  }

  handleSearchChange(inputBox) {
    this.props.handleSearchChange(inputBox.target.value);
    this.setState({
      value: inputBox.target.value
    });
  }


  render () {
    return (
      <div className="search-bar form-inline">
        <input className="form-control" id="search-box" type="text" onChange={this.handleSearchChange.bind(this)} />
        <button className="btn hidden-sm-down">
          <span className="glyphicon glyphicon-search"></span>
        </button>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
