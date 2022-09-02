import { Provider } from 'react-redux';
import renderer from 'react-test-renderer';
import MyProfile from '../Components/Profile/MyProfile';
import store from '../redux/configureStore';

describe('Test of Profile Components', () => {
  it('Renders MyProfile component correctly', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <MyProfile />
        </Provider>,
      );
    expect(tree).toMatchSnapshot();
  });
});
