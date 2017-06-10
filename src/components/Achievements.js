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
          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f01 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f01 ? icon01f : icon01w}
              onClick={() => {if (props.badges.f01) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f02 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f02 ? icon02f : icon02w}
              onClick={() => {if (props.badges.f02) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f03 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f03 ? icon03f : icon03w}
              onClick={() => {if (props.badges.f03) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f04 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f04 ? icon04f : icon04w}
              onClick={() => {if (props.badges.f04) {alert('Achievement Unlocked!')}}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f05 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f05 ? icon05f : icon05w}
              onClick={() => {if (props.badges.f05) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f06 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f06 ? icon06f : icon06w}
              onClick={() => {if (props.badges.f06) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f07 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f07 ? icon07f : icon07w}
              onClick={() => {if (props.badges.f07) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f08 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f08 ? icon08f : icon08w}
              onClick={() => {if (props.badges.f08) {alert('Achievement Unlocked!')}}}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f09 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f09 ? icon09f : icon09w}
              onClick={() => {if (props.badges.f09) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f10 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f10 ? icon10f : icon10w}
              onClick={() => {if (props.badges.f10) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f11 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f11 ? icon11f : icon11w}
              onClick={() => {if (props.badges.f11) {alert('Achievement Unlocked!')}}}
            />
          </div>

          <div className="col s6 m3 center-align">
            <img
              className={'responsive-img ' + (props.badges.f12 ? 'achievement' : 'achievement-placeholder')}
              alt="bowl"
              src={props.badges.f12 ? icon12f : icon12w}
              onClick={() => {if (props.badges.f12) {alert('Achievement Unlocked!')}}}
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Achievements;
