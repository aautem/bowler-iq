import React from 'react';

const RecentTrends = ({ games }) => {
  if (games.length === 0) {
    return (
      <div className="col s12 m7">
        <div className="center-align">
          <h5>No game data available</h5>
        </div>
      </div>
    );
  }

  window.google.charts.load('current', { packages: ['corechart'] });
  window.google.charts.setOnLoadCallback(drawChart);

  // Takes array of game objects and outputs dataArray to draw chart
  function makeDataArray(games) {
    var dataArray = [
      ['Date', 'Score']
    ];
    games.forEach(game => {
      var row = [game.date, game.score];
      dataArray.push(row);
    });
    return dataArray;
  }

  function drawChart() {
    var data = window.google.visualization.arrayToDataTable(makeDataArray(games.slice(0, 10)));
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
      colors: ['white'],
      legend: {
        position: 'none'
      }
    };

    var chart = new window.google.visualization.LineChart(document.getElementById('graph'));
    chart.draw(data, options);
  }

  // Render graph anytime window is resized
  window.addEventListener('resize', drawChart);

  return (
    <div className="col s12 m7">
      <div id="graph" className="z-depth-5" />
    </div>
  );
};

export default RecentTrends;
