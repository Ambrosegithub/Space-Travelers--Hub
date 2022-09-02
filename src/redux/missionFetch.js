// define constant
const uRL = 'https://api.spacexdata.com/v3/missions';
const LOAD_MISSION = 'missions/load';
const JOIN_MISSION = 'missions/join';
const LEAVE_MISSION = 'missions/leave';

// ACTION CREATOR
const missionLoading = (payload) => ({
  type: LOAD_MISSION,
  payload,
});

export const joinMission = (id) => ({
  type: JOIN_MISSION,
  id,
});

export const leaveMission = (id) => ({
  type: LEAVE_MISSION,
  id,
});

// GET API

export const fetchMissions = async (dispatch) => {
  const response = await fetch(uRL);
  const missions = await response.json();

  dispatch(
    missionLoading(
      missions.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      })),
    ),
  );
};

// SET DEFAULT STATE
const initialState = [];

// create a reducer

export const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_MISSION:
      return action.payload;
    case JOIN_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          reserved: true,
        };
      });
    case LEAVE_MISSION:
      return state.map((mission) => {
        if (mission.id !== action.id) {
          return mission;
        }
        return {
          ...mission,
          reserved: false,
        };
      });
    default: return state;
  }
};

export default missionReducer;
