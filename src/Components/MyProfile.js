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
    <div className="content-div">
      <h1>My Missions</h1>
      {myMissionProfile.map(({ id, MissionTitle, data }) => (
        <Container key={id} className="d-grid">
          <Row className="missionprofile">
            <Col sm={6} className="title">{MissionTitle}</Col>
            <Col sm={6} className="no-mission">
              {!data.length ? (
                <p className="para">No Missions</p>
              ) : (
                data.map((item) => <p key={item.id} className="para1">{item.name}</p>)
              )}
            </Col>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default MyProfile;
