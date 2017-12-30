const HouseInfoView = require('./views/house_info_view.js');
const CharacterInfo = require('./views/character_info.js');
const ChartView = require('./views/chart.js');
const Ajax = require('./services/ajax.js');
var _ = require('lodash');

const app = function () {

  const container = document.querySelector('#root');
  const chart = new ChartView(container);
  const houseInfoView = new HouseInfoView(container);
  const characterInfo = new CharacterInfo(container);
  const ajax = new Ajax();


  const showHouses = document.querySelector('#houses-button');
  showHouses.addEventListener('click',function(){
    let allHouses = [];
    let pageNumber = 1;
    while (pageNumber <= 10) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
        houseInfoView.render(data);
        console.log('data',data);
        console.log('all data',allHouses);

      });
    }


  })




  const buttonDeadlyYears = document.querySelector('#character-button');
  buttonDeadlyYears.addEventListener('click', function() {
    let allDeaths = {};
    let pageNumber = 1;
    while (pageNumber <= 20) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=50`, function(data) {
        onePageOfDeaths = characterInfo.dateOfDeathCount(data);
        _.merge(allDeaths, onePageOfDeaths)
        console.log('allDeaths', allDeaths);
        formatedHousesForChart = houseInfoView.chartPopulator(allDeaths);
        chart.lineChart(formatedHousesForChart,'Most Deadly Years');
      })
    }

  })

  const button = document.querySelector('#more-houses');
  button.addEventListener('click', function() {
    let allOcurances = {};
    let pageNumber = 1;
    while (pageNumber <= 8) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
        wordCount = houseInfoView.wordCount(data);
        _.merge(allOcurances, wordCount)
        formatedHousesForChart = houseInfoView.chartPopulator(allOcurances)
        chart.lineChart(formatedHousesForChart, "House words Occurace");
      })
    }

  })

  const loyaltyButton = document.querySelector('#loyalty-button');
  loyaltyButton.addEventListener('click', function() {
    let allHouses = [];
    console.log('all houses', allHouses);
    let pageNumber = 1;
    while (pageNumber <= 10) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/characters?page=${pageNumber}&pageSize=50`, function(data) {
        onePageOfCharacters = characterInfo.houseLoyalty(data);
        _.merge(allHouses, onePageOfCharacters);
        formatedData = characterInfo.houseLoyalty(allHouses);
        chart.lineChart(formatedData);
      })
    }
  })

  //-----------------------------------------------------------API appending code.
};

document.addEventListener('DOMContentLoaded', app);
