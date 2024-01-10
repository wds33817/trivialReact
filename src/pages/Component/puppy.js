import Bowl from './bowl';

export default function Puppy(props) {
  return (
    <div>
      {props.name} has <Bowl bowlShape='square' bowlStatus='full' />
    </div>
  );
}
