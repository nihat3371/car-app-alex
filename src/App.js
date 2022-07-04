import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const App = () => {
  const [car, setCars] = useState([])

  const getCarData = async () => {
    try {
      const data = await axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
      console.log(data.data);
      setCars(data.data)
    }
    catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    getCarData()
  }, [])

  return (

    <div className="App">
      {car.map(car => {
        return <></>
      })}
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

        <nav aria-label="secondary mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary={car.map(car => {
                  return <p>{car.model_variant}</p>
                })} />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton >
                <ListItemText primary={car.map(car => {
                  return <p>{car.model_variant}</p>
                })} />
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
      </Box>

    </div>
  );
};

export default App;
