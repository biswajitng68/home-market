import React, { useState } from 'react';

const ToggleSwitch = ({ id, isOn,value }) => {
 
    // const base_url = "https://room-rover-app-backend-mern.onrender.com";
    
  
  

  const [checked, setChecked] = useState(isOn);
  console.log(value);
  const handleChange = () => {
    setChecked(!checked);
  };

  /*
  
  */
  return (
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={handleChange}
    />
    
  );
};



export default ToggleSwitch;