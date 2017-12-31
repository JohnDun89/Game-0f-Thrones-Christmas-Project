
const HouseInfoView = function(container) {
  this.container = container;
}

HouseInfoView.prototype.render = function (houses) {
  createdRegions = [];
  //In here we want somthing to track created regions

  //we need to check if the region exists

  //if it does, add it to the exisitng tag

  //if not break and create a new one

  houses.forEach(function (house) {
    if (house.region === '') {
      return;
    }
    if (createdRegions.includes(house.region) === true) {
      const region = this.regionExists(house.region);
      console.log(region);
      const header = this.createHeaderOnExistingregion(house.name, region);

      const ul = this.createUnorderedList(header);
      this.createListItem('Region', house.region, ul);
      this.createListItem('Coat of Arms', house.coatOfArms, ul);
      this.createListItem('Words', house.words, ul);
      this.createListItem('Titles', house.titles.join(', '), ul);
      return;
      //here we want to append the item to the already existing region. perhapse use the gsub house name with the doc query

    } else {
      const region = this.createRegion(house.region);
      createdRegions.push(house.region);
      // console.log(region);
      const header = this.createHeader(house.name, region);
      console.log(header);
      const ul = this.createUnorderedList(header);
      this.createListItem('Region', house.region, ul);
      this.createListItem('Coat of Arms', house.coatOfArms, ul);
      this.createListItem('Words', house.words, ul);
      this.createListItem('Titles', house.titles.join(', '), ul);
      console.log(createdRegions);
    }

  }.bind(this));

}

HouseInfoView.prototype.regionExists = function (region) {
  regionAsTag = region.replace(/ /g, '-');
  const h1 = document.querySelector(`#${regionAsTag}`);
  return h1;
}

HouseInfoView.prototype.createHeaderOnExistingregion = function (name, region) {
  const h3 = document.createElement('h3');
  h3.innerText = name;
  region.appendChild(h3);
  return h3;
}

HouseInfoView.prototype.createRegion = function (region) {
  regionAsTag = region.replace(/ /g,'-');
  const h1 = document.createElement(`${regionAsTag}`);
  h1.innerText = region;
  this.container.appendChild(h1);
  return h1;
}

HouseInfoView.prototype.createHeader = function (name, region) {
  const h3 = document.createElement('h3');
  h3.innerText = name;
  region.appendChild(h3);
  return h3;
};

HouseInfoView.prototype.createUnorderedList = function (apend) {
  const ul = document.createElement('ul');
  apend.appendChild(ul);
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
