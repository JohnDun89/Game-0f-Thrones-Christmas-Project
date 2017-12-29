const ChartView = function(data) {
  this.data = data;
}

ChartView.prototype.lineChart = function (data, title) {
  Highcharts.chart('container', {
    chart: {
      type: 'column'
    },
    title: {
      text: title
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
      data: (data)
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

ChartView.prototype.pieChart = function(data) {
  Highcharts.chart('container', {
    chart: {
      type: 'pie',
      options3d: {
        enabled: true,
        alpha: 45
      }
    },
    title: {
      text: 'Contents of Highsoft\'s weekly fruit delivery'
    },
    subtitle: {
      text: '3D donut in Highcharts'
    },
    plotOptions: {
      pie: {
        innerSize: 100,
        depth: 45
      }
    },
    series: [{
      name: 'Delivered amount',
      data: data
    }]
  });
}

module.exports = ChartView;
