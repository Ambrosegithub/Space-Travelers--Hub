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
      {myMissionProfile.map(({ id, MissionTitle, data }) => (
        <Container key={id}>
          <Row className=" col-3">
            <Col className="fw-bold" sm={5}>
              {MissionTitle}
            </Col>
            <div className="col-5">
              <Col sm={5}>
                {!data.length ? (
                  <p>No Missions</p>
                ) : (
                  // eslint-disable-next-line jsx-a11y/label-has-associated-control
                  data.map((item) => <label key={item.id}>{item.name}</label>)
                )}
              </Col>
            </div>
          </Row>
          <Row>
            <div className="profile-rockets col-5 ">
              <RocketProfile />
            </div>
          </Row>
        </Container>
      ))}
    </div>
  );
};

export default MyProfile;
