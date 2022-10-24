import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [list, setList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="App">
      <p>ToDo list</p>
      <input 
      placeholder="New Task"
      id='textbox'
      type={"text"}
      value={inputValue}
      onChange={(e) => {
        setInputValue(e.target.value);
      }}
      ></input>
      <button
      id='add'
        onClick={() => {
          setList([...list, inputValue]);
        }
      }
      >add</button>
      <div>
        {list.map((toDo, index) => {
          return  <ListItem 
            index={index} 
            toDo={toDo}
            setList={setList}
            list={list}
            key={'listItem - ' +index}
          />
        })}
      </div>
    </div>
  );
}

const ListItem = ({ index, toDo, setList, list }) => {
  const [checked, setChecked] = useState(false);
  return (
          <p key={index} id='file' style={{
            color: checked ? 'lime' : 'white'
          }}>
            <input type={'checkbox'} className='check' value={checked} onClick={(e) => {
              setChecked(e.target.checked);
            }}/>
            {toDo}
            <button id='delete'
              onClick={() => {
                  setList(list.filter((_, ind) => ind !== index));
              }}
            >
              <img src='./delete.png'></img>
            </button>
            </p>
  )
} 

export default App;
