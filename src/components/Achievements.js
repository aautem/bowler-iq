import React from 'react';

// full color icons
import icon01f from './../icons/01f.png';
import icon02f from './../icons/02f.png';
import icon03f from './../icons/03f.png';
import icon04f from './../icons/04f.png';
import icon05f from './../icons/05f.png';
import icon06f from './../icons/06f.png';
import icon07f from './../icons/07f.png';
import icon08f from './../icons/08f.png';
import icon09f from './../icons/09f.png';
import icon10f from './../icons/10f.png';
import icon11f from './../icons/11f.png';
import icon12f from './../icons/12f.png';
import icon13f from './../icons/13f.png';
import icon14f from './../icons/14f.png';
import icon15f from './../icons/15f.png';
import icon16f from './../icons/16f.png';

// white icons
// import icon01w from './../icons/01w.png';
// import icon02w from './../icons/02w.png';
// import icon03w from './../icons/03w.png';
// import icon04w from './../icons/04w.png';
// import icon05w from './../icons/05w.png';
// import icon06w from './../icons/06w.png';
// import icon07w from './../icons/07w.png';
// import icon08w from './../icons/08w.png';
// import icon09w from './../icons/09w.png';
// import icon10w from './../icons/10w.png';
// import icon11w from './../icons/11w.png';
// import icon12w from './../icons/12w.png';
// import icon13w from './../icons/13w.png';
// import icon14w from './../icons/14w.png';
// import icon15w from './../icons/15w.png';
// import icon16w from './../icons/16w.png';

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
          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon01f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon02f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon03f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon04f}
              onClick={() => {console.log('Loading')}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon05f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon06f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon07f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon08f}
              onClick={() => {console.log('Loading')}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon09f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon10f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon11f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon12f}
              onClick={() => {console.log('Loading')}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon13f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon14f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon15f}
              onClick={() => {console.log('Loading')}}
            />
          </div>

          <div className="col s6 m3">
            <img
              className="responsive-img achievement"
              alt="bowl"
              src={icon16f}
              onClick={() => {console.log('Loading')}}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievements;
