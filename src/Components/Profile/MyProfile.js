import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';
import RocketProfile from './Rockets/Rocket';

const MyProfile = () => {
  const myMissionProfile = useSelector((state) => [
    {
      MissionTitle: 'Missons',
      data: state.missions.filter((mission) => mission.reserved),
    },
  ]);
  return (
    <div>
      {/* <h1>My Profile</h1> */}
      {myMissionProfile.map(({ id, MissionTitle, data }) => (
        <Container key={id}>
          <Row>
            <Col sm={5}>{MissionTitle}</Col>
            <Col sm={5}>
              {!data.length ? (
                <p>No Missions</p>
              ) : (
                data.map((item) => <p key={item.id}>{item.name}</p>)
              )}
            </Col>
          </Row>
          {/* <Row key={id}>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row> */}
          <Row>
            <div className="profile-rockets col-5 border">
              {/* <h2 className="profile-title">My Rockets</h2> */}
              <RocketProfile />
            </div>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default MyProfile;
