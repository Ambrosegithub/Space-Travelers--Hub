/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import { fetchMissions } from '../redux/missionFetch';

const Missions = () => {
    // get missions data from the store
    const dispatch = useDispatch();
    const missions = useSelector((state) => state.missions);
  
    useEffect(() => {
      if (!missions.length) {
        dispatch(fetchMissions);
      }
    },[]);

  return (
    <Container className="container-fluid">
    <Table className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
        <thead>
          <tr>
            <th>Mission</th>
            <th>description</th>
            <th>Status</th>
            <th>{" "}</th>
          </tr>
        </thead>
        <tbody >
          {missions.map(({
            id, name, description
          }) => (
            <tr className='wrapper' key={id}>
            <td>
              <h3>{name}</h3>
            </td>
            <td>
              <p>{description}</p>
            </td>
            
            <td>
            <button className="primary" type='button'>Not a member</button>
            <button className="primary" type='button'>active member</button>
            </td>
           
             <td>
            <button className="primary" onClick={() => handleJoinMission(id)}>Join Mission</button>
            <button className="primary" onClick={() => handleLeaveMission(id)}>Leave Mission</button>
            </td>
          
          </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default Missions;
