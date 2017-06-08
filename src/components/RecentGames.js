import React from 'react';

const RecentGames = (props) => {
  console.log('RecentGames Props:', props);
  return (
    <div className="col s12 m6">
      <div className="grey darken-1 z-depth-5 stat-block">
        <div className="row">
          <div className="col s12">
            <h4>Recent Games</h4>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div className="blue darken-4 recent-score" onClick={() => {console.log('Loading')}}>
              <div><h6>06/08/2017</h6></div>
              <div><span>276</span></div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="blue darken-4 recent-score" onClick={() => {console.log('Loading')}}>
              <div><h6>06/08/2017</h6></div>
              <div><span>276</span></div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="blue darken-4 recent-score" onClick={() => {console.log('Loading')}}>
              <div><h6>06/08/2017</h6></div>
              <div><span>276</span></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div className="blue darken-4 recent-score" onClick={() => {console.log('Loading')}}>
              <div><h6>06/08/2017</h6></div>
              <div><span>276</span></div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="blue darken-4 recent-score" onClick={() => {console.log('Loading')}}>
              <div><h6>06/08/2017</h6></div>
              <div><span>276</span></div>
            </div>
          </div>

          <div className="col s12 m4">
            <div className="blue darken-4 recent-score" onClick={() => {console.log('Loading')}}>
              <div><h6>06/08/2017</h6></div>
              <div><span>276</span></div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a onClick={() => {console.log('Loading')}}>More Games...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentGames;
