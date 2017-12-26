const HouseInfoView = require('./views/house_info_view.js');
const Ajax = require('./services/ajax.js');

const app = function () {
  const container = document.querySelector('#root');
  const houseInfoView = new HouseInfoView(container);
  graphData = new Array();

  // const houseInfoView = new HouseInfoView();

  // const url = `https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`;
  const ajax = new Ajax();

  const button = document.querySelector('#more-houses');
  button.addEventListener('click', function() {
    let pageNumber = 1;
    while (pageNumber <= 8) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
        wordCount = houseInfoView.wordCount(data);
        onePage = houseInfoView.chartPopulator(wordCount);
        console.log(onePage);
        graphData.push(onePage);
      })
    }
  })
}

document.addEventListener('DOMContentLoaded', app);
