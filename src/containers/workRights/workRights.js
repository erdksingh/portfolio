import React from 'react';
import './workRights.css';
import { workRights } from '../../constants';

export default function WorkRights() {
   if(workRights.display){
    return (
      <div className="workrights-section" id="workrights">
          <h1 className="workrights-heading">{workRights.title}</h1>
          <div className="workrights-card-container">
            {workRights.subtitle}
          </div>
      </div>
    );
  }
  return null;
}
