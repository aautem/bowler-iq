import React from 'react';

const NewGameGraph = (props) => {
  console.log('NewGameGraph Props:', props);

  // set up Google Chart
  window.google.charts.load('current', {'packages':['corechart']});
  window.google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = window.google.visualization.arrayToDataTable([
      ['Frame', 'Score'],
      ['1', (props.scorecard[0].totalScore || 0)],
      ['2', props.scorecard[1].totalScore],
      ['3', props.scorecard[2].totalScore],
      ['4', props.scorecard[3].totalScore],
      ['5', props.scorecard[4].totalScore],
      ['6', props.scorecard[5].totalScore],
      ['7', props.scorecard[6].totalScore],
      ['8', props.scorecard[7].totalScore],
      ['9', props.scorecard[8].totalScore],
      ['10', props.scorecard[9].totalScore]
    ]);

    var options = {
      curveType: 'none',
      chartArea: {
        top: 10,
        height: 150
      },
      hAxis: {
        ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
      },
      vAxis: {
        ticks: [0, 50, 100, 150, 200, 250, 300]
      },
      pointSize: 5,
      colors: ['blue'],
      legend: {
        position: 'none'
      }
    };

    var chart = new window.google.visualization.LineChart(document.getElementById('graph'));
    chart.draw(data, options);
  }

  return (
    <div id="graph" className="col-6"></div>
  );
};

export default NewGameGraph;
