import React from 'react';

const NewGameGraph = (props) => {
  var getMax = function(frame) {
    if (frame === 1) {
      return 300;
    } else {
      if (props.scorecard[frame - 2].totalScore) {
        return (props.scorecard[frame - 2].totalScore + (30 * (11 - frame)));
      } else {
        return getMax(frame - 1);
      }
    }
  };

  // set up Google Chart
  window.google.charts.load('current', {'packages':['corechart']});
  window.google.charts.setOnLoadCallback(drawChart);

  function drawChart() {
    var data = window.google.visualization.arrayToDataTable([
      ['Frame', 'Total Score', 'Max Score'],
      ['1', (props.scorecard[0].totalScore || 0), getMax(1)],
      ['2', props.scorecard[1].totalScore, getMax(2)],
      ['3', props.scorecard[2].totalScore, getMax(3)],
      ['4', props.scorecard[3].totalScore, getMax(4)],
      ['5', props.scorecard[4].totalScore, getMax(5)],
      ['6', props.scorecard[5].totalScore, getMax(6)],
      ['7', props.scorecard[6].totalScore, getMax(7)],
      ['8', props.scorecard[7].totalScore, getMax(8)],
      ['9', props.scorecard[8].totalScore, getMax(9)],
      ['10', props.scorecard[9].totalScore, getMax(10)]
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
