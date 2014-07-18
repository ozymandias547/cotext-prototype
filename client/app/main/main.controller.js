'use strict';

angular.module('cotextPrototypeApp')
  .controller('MainCtrl', function ($scope) {

    // Build verse view model
    $scope.verses = [
        {   
            number : 1,
            text : "A Hebrew or Greek scripture verse.",
            words : []
        }
    ];

    // Populate verses view model
    $scope.verses.forEach(function(verse) { 
        verse.text.split(" ").forEach(function(word) { 
            verse.words.push({text: word}); 
        });
    });

    // Vocab words view model
    $scope.vocabWords = {};
    

    // Controller methods
    $scope.onWordClick = function(word) {
        // Before adding a vocab word, remove punctuation and make it lower case;
        word = word.text.replace(/[\!\.\,\?\\]/g, "").toLowerCase();
        $scope.vocabWords[word] = word;
    }

    $scope.removeWord = function(word) {
        if ($scope.vocabWords[word] !== "undefined")
            delete $scope.vocabWords[word];
    }

});

