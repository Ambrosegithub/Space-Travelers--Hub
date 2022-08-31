import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const myMissionProfile = useSelector((state) => [
    {
      MissionTitle: 'My mission',
      data: state.missions.filter((mission) => mission.reserved),
    },
  ]);
  return (
    <div>
      <h1>My Profile</h1>
      {myMissionProfile.map(({ id, MissionTitle, data }) => (
        <Container key={id}>
          <Row>
            <Col sm={6}>{MissionTitle}</Col>
            <Col sm={6}>
              {!data.length ? (
                <p>No Missions</p>
              ) : (
                data.map((item) => <p key={item.id}>{item.name}</p>)
              )}
            </Col>
          </Row>
          <Row key={id}>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
            <Col sm>sm=true</Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default MyProfile;
