
const HouseInfoView = function(container) {
  this.container = container;
}

HouseInfoView.prototype.render = function (houses) {
//In here we want somthing to track created regions

//we need to check if the region exists

//if it does, add it to the exisitng tag

//if not break and create a new one

  houses.forEach(function (house) {
    const region = this.createRegion(house.region);
    const header = this.createHeader(house.name);
    const ul = this.createUnorderedList();
    this.createListItem('Region', house.region, ul);
    this.createListItem('Coat of Arms', house.coatOfArms, ul);
    this.createListItem('Words', house.words, ul);
    this.createListItem('Titles', house.titles.join(', '), ul);
  }.bind(this));

}

HouseInfoView.prototype.createRegion = function (region) {
  regionAsTag = region.replace(/ /g,'-');
  const h1 = document.createElement(`${regionAsTag}`);
  h1.innerText = region;
  this.container.appendChild(h1);
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
