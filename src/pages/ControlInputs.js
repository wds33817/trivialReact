import React, { useState } from 'react';
import { Container, Heading } from '@chakra-ui/layout';
import TextField from './Component/TextField';
import List from './Component/List';
import { Input } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { keyframes } from '@chakra-ui/system';
export default function ControlInputs() {
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <form>
        <input value={value} onChange={handleChange} type='text' />
        <p>You just typed: {value}</p>
      </form>
      <Container maxW='5xl' pt='10'>
        <Heading color='blue.500'>Dongsheng's Todo Lists</Heading>
        <TextField />
        <List />
      </Container>
    </>
  );
}
