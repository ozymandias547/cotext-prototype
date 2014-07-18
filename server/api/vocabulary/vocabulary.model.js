'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var VocabularySchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  user: Array
});

module.exports = mongoose.model('Vocabulary', VocabularySchema);