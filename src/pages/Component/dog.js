import Puppy from './puppy';
import React, { useState } from 'react';
import '../../style/dogStyle.css';

export default function Dog() {
  const [restaurant, setRestaurant] = useState('Lemon');

  const [allGoals, updateAllGoals] = useState([]);
  const [idCounter, setIdCounter] = useState(0);
  function addGoal(goal) {
    const newGoal = { ...goal, id: idCounter };
    setIdCounter(idCounter + 1);
    updateAllGoals([...allGoals, newGoal]);
  }

  const deleteGoal = (id) => {
    const updatedGoals = allGoals.filter((goal) => goal.id !== id);
    updateAllGoals(updatedGoals);
  };

  //console.log(restaurant);
  function updateRestaurantName() {
    setRestaurant('Little Lemons');
  }
  return (
    <div>
      <Puppy name='Max' bowlShape='square' bowlStatus='full' />
      <h1>{restaurant}</h1>
      <button onClick={updateRestaurantName}>Update Name</button>
      <GoalForm onAdd={addGoal} />
      <ListOfGoals allGoals={allGoals} onDelete={deleteGoal} />
    </div>
  );
}

function GoalForm(props) {
  const [formData, setFormData] = useState({ id: '', goal: '', by: '' });
  function changeHandler(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }
  function submitHandler(e) {
    e.preventDefault();
    props.onAdd(formData);
    setFormData({ id: '', goal: '', by: '' });
  }
  return (
    <>
      <h1>My Little Lemon Goals</h1>
      <form onSubmit={submitHandler} className='goalForm'>
        <input
          type='text'
          name='goal'
          placeholder='Goal'
          value={formData.goal}
          onChange={changeHandler}
        />
        <input
          type='text'
          name='by'
          placeholder='By...'
          value={formData.by}
          onChange={changeHandler}
        />
        <button>Submit Goal</button>
      </form>
    </>
  );
}

function ListOfGoals(props) {
  const handleDelete = (id) => (e) => {
    e.stopPropagation();
    console.log(id);
    props.onDelete(id);
  };
  return (
    <ul>
      {props.allGoals.map((g) => (
        <li key={g.id} onClick={handleDelete(g.id)}>
          <span>
            My goal is to {g.goal}, by {g.by}
          </span>
        </li>
      ))}
    </ul>
  );
}
