import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { ListItem } from "./components/ListItem";

function App() {
  const [toDo, setToDo] = useState();
  const [title, setTitle] = useState();
  const [tag, setTag] = useState();
  const fetchToDo = async () => {
    try {
      const data = await axios.get("http://localhost:9999/posts");
      console.log(data);
      setToDo(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const addList = async () => {
    try {
      await axios.post("http://localhost:9999/post/create", {
        tag: tag,
        owner: title,
      });
    } catch (error) {
      console.log(error);
    } finally {
      fetchToDo();
    }
  };

  const deleteToDo = async (id) => {
    try {
      await axios.delete(`http://localhost:9999/post/${id}`);
    } catch (error) {
      console.log(error);
    } finally {
      fetchToDo();
    }
  };
  const saveToDo = async (id, newValue) => {
    try {
      await axios.patch(`http://localhost:9999/post/${id}`, newValue);
    } catch (error) {
      console.log(error);
    } finally {
      fetchToDo();
    }
  };
  useEffect(() => {
    fetchToDo();
  }, []);

  return (
    <div>
      title:{" "}
      <input
        type="text"
        onChange={(event) => {
          setTitle(event.target.value);
        }}
      />
      tag:{" "}
      <input
        type="text"
        onChange={(event) => {
          setTag(event.target.value);
        }}
      />
      <button onClick={addList}>add task</button>
      {toDo?.map((el, ind) => {
        return (
          <ListItem
            el={el}
            ind={ind}
            deleteToDo={deleteToDo}
            saveToDo={saveToDo}
          />
        );
      })}
    </div>
  );
}

export default App;
