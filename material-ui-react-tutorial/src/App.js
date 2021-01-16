import logo from './logo.svg';
import './App.css';
import { Button, ButtonGroup, Checkbox, FormControlLabel, makeStyles, TextField } from '@material-ui/core';
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete';
import { useState } from 'react';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #333, #999)',
    border: 0,
    marginBottom: 15,
    borderRadius: 15,
    color: 'white',
    padding: '5px 30px'
  }
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Test Styled Button</Button>;
}

function CheckboxExample() {
  const [checked, setChecked] = useState(true);

  return (
    <div>
      <FormControlLabel
        label="Testing Checkbox"
        control={<Checkbox
        checked={checked}
        onChange={(e)=>setChecked(e.target.checked)}
        color="primary"
        // disabled
        icon={<SaveIcon />}
        checkedIcon={<DeleteIcon />}
        inputProps={{
          'aria-label': 'secondary checkbox'
        }} />}
      />
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Material UI React Tutorial</h1>
        <ButtonStyled />
        <TextField
          variant="outlined"
          color="secondary"
          label="The time"
          type="email"
          placeholder="test@test.com"
        />
        <CheckboxExample />
        <ButtonGroup>
          <Button
            startIcon={<SaveIcon />}
            onClick={() => alert("Hello")}
            size="large"
            variant="contained"
            color="primary">
            Save
          </Button>
          <Button
            endIcon={<DeleteIcon />}
            onClick={() => alert("Hello")}
            size="large"
            variant="contained"
            color="secondary">
            Discard
          </Button>

        </ButtonGroup>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
