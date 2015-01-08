var express = require('express');
var router = express.Router();

var fs = require('fs');
/* GET home page. */
router.get('/:mode', function(req, res) {
  if (req.params.mode == 'training') {
    var raw = require('../imageclusterswithtext.json'); //loads clip clusters
  }
  else {
    var raw = require('../imageclusterswithtext2.json'); //loads clip clusters
  }
  var clusters = [];
  var clips = [];

  //separates clips from clusters with clips inside them already
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
  title = 'Product Classification'
  res.send(haml.render(fs.readFileSync('views/index.haml'), {locals: {title: title, clips: clips, clusters: clusters, getUUID: getUUID, mode: req.params.mode}}));
  //this sends it to the front end

});

router.get('/feedback/training', function(req, res) {
        console.log('test');
        console.log(req.query);
	 fs.writeFile("trainingData/" + Date.now() + ".txt", "Hey there!\n" + req.query.labels, function(err) {
                //req.query.labels correspond to label= in main.js
		if(err) {
                        console.log(err);
                } else {
                        console.log("The file was saved!");
                }
        });

	res.redirect('/chocolate')
	

        //res.send('ohai'); // redirect to chocolate 
});

router.get('/feedback/question/:question_id/option_manager2', function(req, res) {
        console.log('test');
        console.log(req.query);
        fs.writeFile("data/" + Date.now() + ".txt", "Hey there!\n" + req.query.labels, function(err) {
                //req.query.labels correspond to label= in main.js
		if(err) {
                        console.log(err);
                } else {
                        console.log("The file was saved!");
                }
        });
        res.send('ohai');
});

module.exports = router;
