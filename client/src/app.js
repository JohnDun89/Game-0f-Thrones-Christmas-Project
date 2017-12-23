const HouseInfoView = require('./views/house_info_view.js');
const Ajax = require('./services/ajax.js');

const app = function () {
  const container = document.querySelector('#root');
  const house_info_view = new HouseInfoView(chart);
  let pageNumber = 1;

  const url = `https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=5`;
  const ajax = new Ajax();
  // console.log('Im here');




}
