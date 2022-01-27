import { Button, Container, Typography } from '@material-ui/core';
import React,{useState} from 'react';

const Box = ({amount}) => {

  const [select, setselect] = useState(false);
  const onSelect = () =>{
    setselect(!select)
  }

  return (
    <Container >
        <Button className='increaseBTN'  variant="contained"
         color = {select?"primary":"secondary"}
         onClick={onSelect}> 
          ${amount}
         </Button>
    </Container>
  )
};

export default Box;
