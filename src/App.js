import jul from './jul.jpeg';
import './App.css';
import {SimpleButton, SelectButton, Dropdown} from './components/Buttons.js';
import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Slider from '@mui/material/Slider';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Input from '@mui/material/Input';
import LoadingButton from '@mui/lab/LoadingButton';
import SendIcon from '@mui/icons-material/Send';


const options = [
  'Modèle 1',
  'Modèle 2'
]

function App() {

    const [model, setModel] = React.useState('');
  
    const handleChange = (event) => {
      setModel(event.target.value);
    };

    const [value, setValue] = React.useState(5);

    const handleSliderChange = (event, newValue) => {
      setValue(newValue);
    };

    const handleInputChange = (event) => {
      setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
      if (value < 0) {
        setValue(0);
      } else if (value > 10) {
        setValue(10);
      }
    };

    const [loading, setLoading] = React.useState(false);
    function handleClick() {
      setLoading(true);
      console.log('test');
      setLoading(false);
      console.log('test1')
    }

    const [name, setName] = React.useState('');
    const handleTextChange = (event) => {
      setName(event.target.value);
    };

  return (
    <div className="App">
      <div className="App-sidebar">
        <h1>JuLator</h1>
        <p class='sidebar-labels'>Choisissez un modèle :</p>
        <div className='select-model'>
          <div className='select-component'>
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Modèle</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={model}
                  label="Modèle"
                  onChange={handleChange}
                >
                  <MenuItem value={"Transformer"}>Transformer</MenuItem>
                  <MenuItem value={"BiLSTM"}>BiLSTM</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>
      </div>
      <div className="App-content">
        {model === 'BiLSTM' &&
          <div className='form'>
            <h1>BiLSTM</h1>
            <p>Veuillez remplir les champs ci-dessous pour générer du texte :</p>
            <div className="inputs">
              <div className='inputs-box'>
                <Box component="form" sx={{ marginRight:'2em' }}>
                  <TextField onChange={handleTextChange} id="outlined-basic" label="Début du texte, ex: a marseille" variant="outlined" sx={{ width:320 }} />
                </Box>
                <Box component="form" sx={{ width: 320}}>
                  <Typography id="input-slider" gutterBottom>
                    Nombre de mots à générer :
                  </Typography>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item xs>
                      <Slider value={typeof value === 'number' ? value : 0} min={1} max={10} onChange={handleSliderChange} aria-labelledby="input-slider"/>
                    </Grid>
                    <Grid item>
                      <Input value={value} size="small" onChange={handleInputChange} onBlur={handleBlur} inputProps={{ step: 1, min: 1, max: 10, type: 'number', 'aria-labelledby': 'input-slider', }}/>
                    </Grid>
                  </Grid>
                </Box>   
              </div>          
            </div>
            <div className='submit'>
              <div className='submit-box'>
                <LoadingButton className='loading-button' sx={{ color:'white', backgroundColor:'red', ':hover':{backgroundColor:'green'} }} fullWidth={true} onClick={handleClick} loading={loading} loadingPosition="end" variant="contained">
                  GÉNÉRER
                </LoadingButton>
              </div>
            </div>
            <div>
              <p>{name}</p>
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
