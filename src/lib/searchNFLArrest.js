var searchNFLArrest = (query, callback) => {
  // console.log('props ', props);
  $.get(`http://nflarrest.com/api/v1/player/search?term=${query}&limit=5`, {
  })
  .done (function(data) {
    callback(data);
  })
  .fail(({responseJSON}) => {
    responseJSON.error.errors.forEach((err) =>
      console.error(err)
    );
  });
}

window.searchNFLArrest = searchNFLArrest;