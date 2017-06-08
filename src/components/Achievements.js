import React from 'react';

const Achievements = (props) => {
  console.log('Achievements Props:', props);
  return (
    <div className="col s12 m6">
      <div className="grey darken-1 z-depth-5 stat-block">
        <div className="row">
          <div className="col s12">
            <h4>Achievements</h4>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div
              className="blue darken-4 z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              {props.badges[0]}
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="blue darken-4 z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              {props.badges[1]}
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="blue darken-4 z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              {props.badges[2]}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div
              className="blue darken-4 z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              {props.badges[3]}
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>

          <div className="col s12 m4">
            <div
              className="grey z-depth-2 achievement"
              onClick={() => {console.log('Loading')}}
            >
              ---
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col s12">
            <a onClick={() => {console.log('Loading')}}>More Badges...</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
