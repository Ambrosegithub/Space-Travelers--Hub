import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import Missions from '../Components/Missions';
import store from '../redux/configureStore';

describe('Test of Profile Components', () => {
  it('Profile Components Renders correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Missions />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
