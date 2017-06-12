import React from 'react';

const Loading = (props) => {
  console.log('Loading Props:', props);
  return (
    <div className="section grey lighten-2">

      <div className="container">
        <div className="row center-align loading">
          <h4>Loading</h4>
          <div className="preloader-wrapper big active">
            <div className="spinner-layer spinner-blue-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Loading;
