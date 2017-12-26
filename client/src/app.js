const HouseInfoView = require('./views/house_info_view.js');
const CharacterInfo = require('./views/character_info.js');
const Ajax = require('./services/ajax.js');
var _ = require('lodash');

const app = function () {
  const container = document.querySelector('#root');
  const houseInfoView = new HouseInfoView(container);
  const characterInfo = new CharacterInfo(container);
  const ajax = new Ajax();

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
       // onePage = characterInfo.chartPopulator(wordCount);
       // console.log('onepage',onePage);
       Highcharts.chart('container', {
         chart: {
           type: 'column'
         },
         title: {
           text: 'Most Deadly Years(For Important Characters)'
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
             text: 'Total Deaths'
           }
         },
         legend: {
           enabled: false
         },
         tooltip: {
           pointFormat: 'Deaths of mentioned Characters: <b>{point.y:1f}  </b>'
         },
         series: [{
           name: 'Year',
           data: houseInfoView.chartPopulator(allDeaths)
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

  const button = document.querySelector('#more-houses');
  button.addEventListener('click', function() {
     let allOcurances = {};
    let pageNumber = 1;
    while (pageNumber <= 8) {
      pageNumber++;
      ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
        wordCount = houseInfoView.wordCount(data);
        _.merge(allOcurances, wordCount)
        // console.log('wordcount',wordCount);
        // console.log('allOcurances', allOcurances);
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
