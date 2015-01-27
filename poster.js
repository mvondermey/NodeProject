/**
 * @author martin
 */
var poster = require('poster');

var options = {
  uploadUrl: 'http://localhost',
  method: 'POST',
  fileId: 'file',
  fileContentType: 'image/jpeg',
  fields: {
    'myfield': 'value',
    'myfield2': 'value2'
  }
};

poster.post('poster.js', options, function(err, data) {
  if (!err) {
    console.log(data);
  }
});