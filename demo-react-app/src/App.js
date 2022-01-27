import logo from './logo.svg';
import './App.css';
import Box from './component/Box';
import { Container } from '@material-ui/core';

function App() {
  return (
    <Container>

      <Box amount={1}/>
      <Box amount={10}/>
      <Box amount={100}/>
    </Container>
  );
}

export default App;
