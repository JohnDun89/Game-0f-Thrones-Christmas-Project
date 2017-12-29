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
    // console.log('url =',aligenceUrl);
    ajax.get(aligenceUrl, function(house) {
      houseTitle = house.name;
      // console.log(houseTitle);
      for (var i = 0; i < houseTitle.length; i++) {
        house = houseTitle[i]
        if (!allHousescount[house]) {
          allHousescount[house] = 1;
        } else{
          allHousescount[house]++;
        }
      }
    })
  })
  console.log(allHousescount);
  return allHousescount;
}

module.exports = CharacterInfo;
