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

// white icons
import icon01w from './../icons/01w.png';
import icon02w from './../icons/02w.png';
import icon03w from './../icons/03w.png';
import icon04w from './../icons/04w.png';
import icon05w from './../icons/05w.png';
import icon06w from './../icons/06w.png';
import icon07w from './../icons/07w.png';
import icon08w from './../icons/08w.png';
import icon09w from './../icons/09w.png';
import icon10w from './../icons/10w.png';
import icon11w from './../icons/11w.png';
import icon12w from './../icons/12w.png';

const Achievements = ({ badges }) => {
  const {
    f01Badge,
    f02Badge,
    f03Badge,
    f04Badge,
    f05Badge,
    f06Badge,
    f07Badge,
    f08Badge,
    f09Badge,
    f10Badge,
    f11Badge,
    f12Badge,
  } = badges || {};

  return (
    <div className="col s12 m6">
      <div className="grey darken-1 z-depth-5 stat-block" style={{ minHeight: 42 }}>
        <div className="row">
          <div className="col s12">
            <h4>Achievements</h4>
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f01Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f01Badge ? icon01f : icon01w}
              onClick={() => {if (f01Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f02Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f02Badge ? icon02f : icon02w}
              onClick={() => {if (f02Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f03Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f03Badge ? icon03f : icon03w}
              onClick={() => {if (f03Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f04Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f04Badge ? icon04f : icon04w}
              onClick={() => {if (f04Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f05Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f05Badge ? icon05f : icon05w}
              onClick={() => {if (f05Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f06Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f06Badge ? icon06f : icon06w}
              onClick={() => {if (f06Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f07Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f07Badge ? icon07f : icon07w}
              onClick={() => {if (f07Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f08Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f08Badge ? icon08f : icon08w}
              onClick={() => {if (f08Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f09Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f09Badge ? icon09f : icon09w}
              onClick={() => {if (f09Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f10Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f10Badge ? icon10f : icon10w}
              onClick={() => {if (f10Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f11Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f11Badge ? icon11f : icon11w}
              onClick={() => {if (f11Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (f12Badge ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={f12Badge ? icon12f : icon12w}
              onClick={() => {if (f12Badge) {alert('Achievement Unlocked!')}}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
