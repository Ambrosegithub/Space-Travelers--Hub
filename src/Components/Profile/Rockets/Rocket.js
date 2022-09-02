import React from 'react';
import { useSelector } from 'react-redux';
import './rocketProfile.css';

function RocketProfile() {
  const rockets = useSelector((state) => state.rockets);
  const myRockets = rockets.filter((rocket) => rocket.reserved);

  return (

    <table className="zebra">
      <thead>
        <tr>
          <th className="table-title">Rockets</th>
        </tr>
      </thead>
      <tbody>
        {myRockets.length < 1 && (
        <tr>
          <td className="table-title">No missions available ..</td>
        </tr>
        )}
        {myRockets.map((items) => (
          <div key={items.rocketName}>
            <tr>
              <td className="table-title">{items.rocketName}</td>
            </tr>
          </div>
        ))}
      </tbody>
    </table>
  );
}

export default RocketProfile;
