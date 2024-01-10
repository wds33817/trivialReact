import { useReducer } from 'react';

const reducer = (state, action) => {
  if (action.type === 'buy_ingredients') return { money: state.money - 10 };
  if (action.type === 'sell_a_meal') return { money: state.money + 30 };
  if (action.type === 'celebrity_meal') return { money: state.money + 5000 };
};

export default function Restaurant() {
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log('State:', state); // 打印状态
  console.log('Dispatch:', dispatch); // 打印分发函数
  return (
    <div className='App'>
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'buy_ingredients' })}>
          Shopping for veggies
        </button>
        <button onClick={() => dispatch({ type: 'sell_a_meal' })}>
          Serve a client
        </button>
        <button onClick={() => dispatch({ type: 'celebrity_meal' })}>
          serve a celebrity
        </button>
      </div>
    </div>
  );
}
