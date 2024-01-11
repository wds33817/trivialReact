import {
  Card,
  CardHeader,
  CardBody,
  Divider,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';
import { chakra } from '@chakra-ui/react';
import { motion, isValidMotionProp } from 'framer-motion';
import { useAtom } from 'jotai';
import { keyframes } from '@chakra-ui/system';
import { todoAtom } from '../lib/atom';

export default function List() {
  const [todos, setTodos] = useAtom(todoAtom);

  console.log(todos);
  return (
    <Card>
      <CardHeader>
        <Heading size='md'>Todo List</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<Divider />} spacing='4'>
          {todos.map((todo) => (
            <Text key={Math.random()} pt='2' fontSize='sm'>
              {todo}
            </Text>
          ))}
        </Stack>
      </CardBody>
    </Card>
  );
}
