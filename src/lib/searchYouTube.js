var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    key: options.key,
    q: options.query,
    maxResults: options.max,
    type: 'video',
    videoEmbeddable: 'true'
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

var searchVideoDetails = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/videos', {
    part: 'snippet, statistics',
    id: options.id,
    key: options.key
  })
    .done(({description}) => {
      if (callback) {
        callback(description);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

// var searchYouTube = (options, callback) => {

//   $.ajax({
//     url: 'https://www.googleapis.com/youtube/v3/search',
//     type: 'GET',
//     data: {part: 'snippet',
//       maxResults: options.max,
//       q: options.query,
//       type: 'video',
//       key: options.key,
//       videoEmbeddable: true
//     },
//     contentType: 'application/json',
//     success: () => {
//       console.log('help ')
//       console.log (data)
//     },
//     error: function(error) {
//       console.error('Failed to GET', error);
//     }
//   });

// };

// searchYouTube.propTypes = {
//   searchYouTube: PropTypes.array.isRequired
// };

export default searchYouTube;



// part: snippet
// maxResults: 25
// q: (stuff we're searching for)

//GET https://www.googleapis.com/youtube/v3/search

// Required parameters:

// part: type = string, value: 'snippet'
// The part parameter specifies a comma-separated list of one or more search resource properties that the API response will include. Set the parameter value to snippet.

//Optional parameters:

// q 	string
// The q parameter specifies the query term to search for.

// Your request can also use the Boolean NOT (-) and OR (|) operators to exclude videos or to find videos that are associated with one of several search terms. For example, to search for videos matching either "boating" or "sailing", set the q parameter value to boating|sailing. Similarly, to search for videos matching either "boating" or "sailing" but not "fishing", set the q parameter value to boating|sailing -fishing. Note that the pipe character must be URL-escaped when it is sent in your API request. The URL-escaped value for the pipe character is %7C.

// type 	string
// The type parameter restricts a search query to only retrieve a particular type of resource. The value is a comma-separated list of resource types. The default value is video,channel,playlist.

// Acceptable values are:

//     channel
//     playlist
//     video

// videoEmbeddable 	string
// The videoEmbeddable parameter lets you to restrict a search to only videos that can be embedded into a webpage. If you specify a value for this parameter, you must also set the type parameter's value to video.

// Acceptable values are:

//     any – Return all videos, embeddable or not.
//     true – Only retrieve embeddable videos.





// {
//   "kind": "youtube#searchListResponse",
//   "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/GfRIKhbGgKnhHMPsp--hO1Gmnjs\"",
//   "nextPageToken": "CAIQAA",
//   "regionCode": "US",
//   "pageInfo": {
//    "totalResults": 1000000,
//    "resultsPerPage": 2
//   },
//   "items": [
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/DyVKhyw-dTpkI2ThAUXHy5o6pB8\"",
//     "id": {
//      "kind": "youtube#video",
//      "videoId": "dQw4w9WgXcQ"
//     },
//     "snippet": {
//      "publishedAt": "2009-10-25T06:57:33.000Z",
//      "channelId": "UC38IQsAvIsxxjztdMZQtwHA",
//      "title": "Rick Astley - Never Gonna Give You Up (Video)",
//      "description": "Rick Astley's official music video for “Never Gonna Give You Up” Listen to Rick Astley: https://RickAstley.lnk.to/_listenYD Subscribe to the official Rick Astley ...",
//      "thumbnails": {
//       "default": {
//        "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/default.jpg",
//        "width": 120,
//        "height": 90
//       },
//       "medium": {
//        "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/mqdefault.jpg",
//        "width": 320,
//        "height": 180
//       },
//       "high": {
//        "url": "https://i.ytimg.com/vi/dQw4w9WgXcQ/hqdefault.jpg",
//        "width": 480,
//        "height": 360
//       }
//      },
//      "channelTitle": "RickAstleyVEVO",
//      "liveBroadcastContent": "none"
//     }
//    },
//    {
//     "kind": "youtube#searchResult",
//     "etag": "\"xwzn9fn_LczrfK9QS3iZcGzqRGs/xoJHxeyhDVLZZITXL9ATvvJ4hbk\"",
//     "id": {
//      "kind": "youtube#channel",
//      "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw"
//     },
//     "snippet": {
//      "publishedAt": "2015-02-01T16:32:30.000Z",
//      "channelId": "UCuAXFkgsw1L7xaCfnd5JJOw",
//      "title": "Official Rick Astley",
//      "description": "Rick Astley's new album \"The Best Of Me\" is out now. Buy/Listen: https://rickastley.lnk.to/BestID.",
//      "thumbnails": {
//       "default": {
//        "url": "https://yt3.ggpht.com/-J99ZnnSa7vE/AAAAAAAAAAI/AAAAAAAAAAA/KAhUFRgc9hU/s88-c-k-no-mo-rj-c0xffffff/photo.jpg"
//       },
//       "medium": {
//        "url": "https://yt3.ggpht.com/-J99ZnnSa7vE/AAAAAAAAAAI/AAAAAAAAAAA/KAhUFRgc9hU/s240-c-k-no-mo-rj-c0xffffff/photo.jpg"
//       },
//       "high": {
//        "url": "https://yt3.ggpht.com/-J99ZnnSa7vE/AAAAAAAAAAI/AAAAAAAAAAA/KAhUFRgc9hU/s800-c-k-no-mo-rj-c0xffffff/photo.jpg"
//       }
//      },
//      "channelTitle": "Official Rick Astley",
//      "liveBroadcastContent": "none"
//     }
//    }
//   ]
//  }
