import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Hello = ({title}) => {
const [nuevoEstado, setNuevoEstado] = useState("")
  
return (
        <div>
            <h1> Hello {title} { nuevoEstado}</h1>
            <Button onClick={()=>setNuevoEstado("(from changed state)!")}>Click Me</Button>
        </div>
    );
};

export default Hello;