import './App.css';
import ThemeContext from './context/ThemeContext'
import Home from './pages/home'

function App() {
  return (
    <ThemeContext>
      <Home />
    </ThemeContext>
  );
}

export default App;
