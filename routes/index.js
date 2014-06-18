var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  var raw = require('../svm_clusters_102.json');
  var clusters = [];
  var clips = [];

  raw.forEach(function(_data){
	  if (_data['clips'].length == 1) {
		  clips.push(_data);
	  } else {
		  clusters.push(_data);
	  }
  });

  var haml = require('hamljs');
  var fs = require('fs')
  getUUID = function() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r, v;
      r = Math.random() * 16 | 0;
      v = c === 'x' ? r : r & 0x3 | 0x8;
      return v.toString(16);
    });
  };
  title = 'Here are some answer clips and clip clusters to the question: "How do I unclog my bathtub drain?"';
  res.send(haml.render(fs.readFileSync('views/index.haml'), {locals: {title: title, clips: clips, clusters: clusters, getUUID: getUUID}}));

});

module.exports = router;
