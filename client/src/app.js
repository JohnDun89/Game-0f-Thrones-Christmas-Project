const HouseInfoView = require('./views/house_info_view.js');
const Ajax = require('./services/ajax.js');
var _ = require('lodash');

const app = function () {
  const container = document.querySelector('#root');
  const houseInfoView = new HouseInfoView(container);
  const ajax = new Ajax();


  const button = document.querySelector('#more-houses');
  button.addEventListener('click', function() {
    let allOcurances = {};
    let pageNumber = 1;
    while (pageNumber <= 8) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
        wordCount = houseInfoView.wordCount(data);
        _.merge(allOcurances, wordCount)
        console.log('wordcount',wordCount);
        console.log('allOcurances', allOcurances);
        // onePage = houseInfoView.chartPopulator(wordCount);
        // console.log('onepage',onePage);
      })

    }
  })
}

document.addEventListener('DOMContentLoaded', app);
