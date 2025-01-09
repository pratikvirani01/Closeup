import React from 'react'
import {NavigationContainer} from '@react-navigation/native';
import Stacknavigation from './src/navigation/route';

const App = () => {
  return (
      <NavigationContainer>
        <Stacknavigation/>
      </NavigationContainer>
  );
};

export default App;