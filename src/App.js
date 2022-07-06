import axios from "axios";
import React, { useEffect, useState } from "react";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';


const App = () => {

  const [cars, setCars] = useState([])
  const getCarData = async () => {
    try {
      const data = await axios.get("https://react-challenge-api.azurewebsites.net/vehicles")
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


      <List>
        {cars.map((car) => {
          console.log(car)
          return (
            <ListItem disablePadding key={car.vin}>
              <ListItemButton >
                <ListItemText primary={car.model_variant} />
              </ListItemButton>
            </ListItem>
          )
        })}
      </List>
      <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }} >

        <nav aria-label="secondary mailbox folders">

        </nav>
      </Box>

    </div>
  );
};

export default App;
