import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button
          startIcon={<SaveIcon />}
          endIcon={<SaveIcon />}
          onClick={() => alert("Hello")}
          size="large"
          variant="contained"
          color="secondary">
          Hello World
        </Button>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
