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
        Highcharts.chart('container', {
          chart: {
            type: 'column'
          },
          title: {
            text: 'Most popular words in all House Words'
          },
          subtitle: {
            text: ''
          },
          xAxis: {
            type: 'category',
            labels: {
              rotation: -45,
              style: {
                fontSize: '8px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          },
          yAxis: {
            min: 0,
            title: {
              text: 'Word Count'
            }
          },
          legend: {
            enabled: false
          },
          tooltip: {
            pointFormat: 'Word Occurs: <b>{point.y:1f} times</b>'
          },
          series: [{
            name: 'Words',
            data: houseInfoView.chartPopulator(allOcurances)
            ,
            dataLabels: {
              enabled: false,
              rotation: -90,
              color: 'red',
              align: 'right',
              format: '{point.y:.1f}', // one decimal
              y: 10, // 10 pixels down from the top
              style: {
                fontSize: '8px',
                fontFamily: 'Verdana, sans-serif'
              }
            }
          }]
        })
      })
    }

  })








}

document.addEventListener('DOMContentLoaded', app);
