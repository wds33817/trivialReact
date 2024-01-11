import { todoAtom } from '../lib/atom';
import { useSetAtom } from 'jotai';
import { HStack } from '@chakra-ui/layout';
import { Input } from '@chakra-ui/input';
import { Button } from '@chakra-ui/button';
import { useRef } from 'react';
export { keyframes } from '@chakra-ui/system';

export default function TextField() {
  const setTodos = useSetAtom(todoAtom); // todos  只写不读，故而删去
  const inputRef = useRef();
  console.log('Text field rerendered');
  function handleAdd() {
    setTodos((todos) => [...todos, inputRef.current.value]);
    inputRef.current.value = '';
  }

  return (
    <HStack my='10'>
      <Button onClick={handleAdd}>Add</Button>
      <Input
        ref={inputRef}
        type='text'
        placeholder='Do the dishes'
        variant='ghost'
      />
    </HStack>
  );
}
