const HouseInfoView = require('./views/house_info_view.js');
const Ajax = require('./services/ajax.js');

const app = function () {
  const container = document.querySelector('#root');
  // const houseInfoView = new HouseInfoView();
  let pageNumber = 1;

  const url = `https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`;
  const ajax = new Ajax();

  console.log(pageNumber);
  // console.log('Im here');


  // const loadAllData = function() {
  //   while (pageNumber <= 8)
  //   {
  //     ajax.get(`https://www.anapioficeandfire.com/api/houses?page=${pageNumber}&pageSize=50`, function(data) {
  //       houseInfoView.wordCount(data);
  //       console.log(data);
  //       pageNumber + 1;
  //     }
  //   }
  // }



  //-------------------------------------------------------------------Chart Code.


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
    data: ["Stark", "are"]
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
}
  document.addEventListener('DOMContentLoaded', app);
