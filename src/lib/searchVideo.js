var searchVideo = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/videos', {
    part: 'snippet, statistics',
    id: options.id,
    key: options.key
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
        console.log(items);
      }
    })
    .fail(({responseJSON}) => {
      responseJSON.error.errors.forEach((err) =>
        console.error(err)
      );
    });
};

export default searchVideo;