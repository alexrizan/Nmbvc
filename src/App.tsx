import React from 'react';
import {Container} from '@mui/material';
import TwoControls from './features/TwoControls';
import TwoAutoCompletes from './features/AutoComplete';

function App() {
  return (
    <Container>
      <TwoControls />
      <TwoAutoCompletes />
    </Container>
  );
}

export default App;
