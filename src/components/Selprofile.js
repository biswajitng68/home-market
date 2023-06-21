
import React, { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
export default function Selprofile(){

    const [items, setItems] = useState([
        { id: 'item1', isOn: true },
        { id: 'item2', isOn: false },
        { id: 'item3', isOn: false },
      ]);
    return(
        <>
        <section className="home">

        <div>
            
       
           
            {items.map((item) => (
          <ToggleSwitch key={item.id} id={item.id} isOn={item.isOn} />
        ))}
         
            </div>
        </section>
       
        </>
    )
}
