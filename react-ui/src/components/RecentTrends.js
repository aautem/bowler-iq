import React from 'react';

const RecentTrends = (props) => {
  console.log('RecentTrends Props:', props);

  if (props.games.length === 0) {
    // no game data available
    return (
      <div className="col s12 m7">
        <div className="center-align">
          <h5>No Game Data Available</h5>
        </div>
      </div>
    );
  } else {
    // set up Google Chart
    window.google.charts.load('current', {'packages':['corechart']});
    window.google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = window.google.visualization.arrayToDataTable([
        ['Date', 'Score'],
        [props.games[0].date, props.games[0].score],
        [props.games[1].date, props.games[1].score],
        [props.games[2].date, props.games[2].score],
        [props.games[3].date, props.games[3].score],
        [props.games[4].date, props.games[4].score],
        [props.games[5].date, props.games[5].score]
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
        colors: ['white'],
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
      <div className="col s12 m7">
        <div id="graph" className="z-depth-5"></div>
      </div>
    );
  }
};

export default RecentTrends;
