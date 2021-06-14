import React from 'react';
import {Provider} from 'react-redux';

// Redux
import store from './src/config/store';

//Navigtions
import Navigation from './src/navigations';

function App() {
  return (
    <>
      <Provider store={store}>
        <Navigation />
      </Provider>
    </>
  );
}

export default App;
