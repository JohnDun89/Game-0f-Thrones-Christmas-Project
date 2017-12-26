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
  var loyalHouses = {};
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

}

module.exports = CharacterInfo;
