const Ajax = require('../services/ajax.js');


const CharacterInfo = function (container) {
  this.container = container;
}

CharacterInfo.prototype.dateOfDeathCount = function (characters) {
  var deathInYear = {};
  characters.forEach(function(character, index){
    allDeathData = character.died;
    dateOfDeath = allDeathData.replace(/\D/g,'');
    console.log(dateOfDeath);
    if (dateOfDeath === '') {
      return;
    };
    arrayOfDeaths = dateOfDeath.split(/\s+/);
    for (var i = 0; i < arrayOfDeaths.length; i++) {
      death = arrayOfDeaths[i];
      if (!deathInYear[death]) {
        deathInYear[death] = 1;
      } else {
        deathInYear[death]++;
      };
    };
  });
  return deathInYear;
};


CharacterInfo.prototype.houseLoyalty = function (characters) {
  const ajax = new Ajax();
  var allHousescount = {};
  characters.forEach(function(character, index){
    aligenceUrl = character.allegiances[0];
    console.log(aligenceUrl);
    ajax.get(aligenceUrl, function(data) {
      houseTitle = house.name(data);
      console.log(houseTitle);
    })
    arrayOfHouses = houseTitle.split(/\s+/);
    for (var i = 0; i < arrayOfHouses.length; i++) {
      house = arrayOfHouses[i]
      if (!allHousescount[house]) {
        allHousescount[house] = 1;
      } else{
        allHousescount[house]++;
      }
    }
  })
  return allHousescount;
}

module.exports = CharacterInfo;
