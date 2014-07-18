/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var Vocabulary = require('./vocabulary.model');

// Get list of vocabulary words assigned to you.
exports.index = function(req, res) {
  
  // var userId = req.user._id;

  Vocabulary.find({ user : 1 }, function (err, vocab) {
    if(err) { return handleError(res, err); }
    return res.json(200, vocab);
  });
};

function handleError(res, err) {
  return res.send(500, err);
}