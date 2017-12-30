
const HouseInfoView = function(container) {
  this.container = container;
}

HouseInfoView.prototype.render = function (houses) {
  houses.forEach(function (house) {
    houseRegion = house.region;
    regionAsTag = houseRegion.replace(/ /g,'-');
    const region = document.createElement(`${regionAsTag}`);
    console.log(region);
    region.innerText = house.region;
    const header = this.createHeader(house.name);
    const ul = this.createUnorderedList();
    this.createListItem('Region', house.region, ul);
    this.createListItem('Coat of Arms', house.coatOfArms, ul);
    this.createListItem('Words', house.words, ul);
    this.createListItem('Titles', house.titles.join(', '), ul);
  }.bind(this));

}

HouseInfoView.prototype.createHeader = function (name) {
  const h3 = document.createElement('h3');
  h3.innerText = name;
  this.container.appendChild(h3);
};

HouseInfoView.prototype.createUnorderedList = function () {
  const ul = document.createElement('ul');
  this.container.appendChild(ul);
  return ul;
}

HouseInfoView.prototype.createListItem = function (label, content, ul) {
  if (!content) return;
  const li = document.createElement('li');
  li.innerText = `${ label }: ${ content }`;
  ul.appendChild(li);
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
  return wordCounts;
};





HouseInfoView.prototype.chartPopulator = function (keyValues) {
  var newArray = Object.keys(keyValues).map(function(data){
    return [data,keyValues[data]];
  });
  return newArray;
};

module.exports = HouseInfoView;
