import React from 'react';

const NewGameGraph = (props) => {
  console.log('NewGameGraph Props:', props);

  // set up Google Chart
  window.google.charts.load('current', {'packages':['corechart']});
  window.google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = window.google.visualization.arrayToDataTable([
      ['Frame', 'Total Score', 'Max Score'],
      ['1', (props.scorecard[0].totalScore || 0), 300],
      ['2', props.scorecard[1].totalScore, (props.scorecard[0].totalScore + (30 * 9))],
      ['3', props.scorecard[2].totalScore, (props.scorecard[1].totalScore + (30 * 8))],
      ['4', props.scorecard[3].totalScore, (props.scorecard[2].totalScore + (30 * 7))],
      ['5', props.scorecard[4].totalScore, (props.scorecard[3].totalScore + (30 * 6))],
      ['6', props.scorecard[5].totalScore, (props.scorecard[4].totalScore + (30 * 5))],
      ['7', props.scorecard[6].totalScore, (props.scorecard[5].totalScore + (30 * 4))],
      ['8', props.scorecard[7].totalScore, (props.scorecard[6].totalScore + (30 * 3))],
      ['9', props.scorecard[8].totalScore, (props.scorecard[7].totalScore + (30 * 2))],
      ['10', props.scorecard[9].totalScore, (props.scorecard[8].totalScore + 30)]
    ]);

    var options = {
      curveType: 'none',
      chartArea: {
        top: 20,
        height: 150
      },
      backgroundColor: '#0d47a1',
      hAxis: {
        ticks: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        baselineColor: 'grey',
        gridlines: {
          color: 'grey'
        },
        textStyle: {
          color: 'white'
        }
      },
      vAxis: {
        ticks: [0, 50, 100, 150, 200, 250, 300],
        baselineColor: 'grey',
        gridlines: {
          color: 'grey'
        },
        textStyle: {
          color: 'white'
        }
      },
      pointSize: 5,
      colors: ['white', 'grey'],
      legend: {
        position: 'none'
      }
    };

    var chart = new window.google.visualization.LineChart(document.getElementById('graph'));
    chart.draw(data, options);
  }

  // re-render graph anytime window is resized
  window.addEventListener("resize", drawChart);

  return (
    <div id="graph" className="z-depth-5"></div>
  );
};

export default NewGameGraph;
