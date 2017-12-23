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
    data:graphPopulator(wordCounts)
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
