
const HouseInfoView = function(data) {
  this.data = data;
}

HouseInfoView.prototype.render =function (houses) {

}

HouseInfoView.prototype.wordCount = function(houses) {
  var wordCounts = {};
  var ul = document.querySelector('#count');
  houses.forEach(function(house, index){
    allHouseWords = house.words;
    if (allHouseWords === '') {
      return;
    };
    arrayOfWords = allHouseWords.split(/\s+/);
    for (var i = 0; i < arrayOfWords.length; i++) {
      word = arrayOfWords[i];
      if (!wordCounts[word]) {
        wordCounts[word] = 1;
      } else {
        wordCounts[word]++;
      };
    };
  });
};

HouseInfoView.prototype.chartPopulator = function (keyValues) {
  var newArray = Object.keys(keyValues).map(function(data){
    return [data,keyValues[data]];
  });
  return newArray;
};
