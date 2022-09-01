/* eslint-disable */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { fetchMissions, joinMission, leaveMission } from '../redux/missionFetch';

const Missions = () => {
    // get missions data from the store
    const dispatch = useDispatch();
    const missions = useSelector((state) => state.missions);
  
    useEffect(() => {
      if (!missions.length) {
        dispatch(fetchMissions);
      }
    },[]);
const handleJoinMission = (id) => dispatch(joinMission(id));
const handleLeaveMission = (id) => dispatch(leaveMission(id));
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
            id, name, description, reserved
          }) => (
            <tr className='wrapper' key={id}>
            <td>
              <h3>{name}</h3>
            </td>
            <td>
              <p>{description}</p>
            </td>
            <td className="badge-cont">
                {reserved && <span className="act-badge">Active Member</span>}
                {!reserved && <span className="badge" style={{ color: "green" }}>NOT A MEMBER</span>}
              </td>
              <td className="button-cont">
                {reserved && (
                <Button 
                  className="leave-btn"
                  size="sm" 
                  variant="outline-danger"
                  onClick={() => handleLeaveMission(id)}>
                  Leave Mission
                </Button>
                )}
                {!reserved && (
                <Button 
                  className="join-btn"
                  size="sm" 
                  variant="outline-secondary"
                  onClick={() => handleJoinMission(id)}>
                  Join Mission
                </Button>
                )}
              </td>
          </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  )
};

export default Missions;
