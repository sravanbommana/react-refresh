import './App.css';
import ClickCounter from './components/ClickCounter';
import Counter from './components/Counter';
import HoverCounter from './components/HoverCounter';

function App() {
  return (
    <div className="App">
      <Counter render={(count, incrementCount) => (
        <ClickCounter count={count} incrementCount={incrementCount} />
      )} />
      <div>
        <Counter render={(count, incrementCount) => (
           <HoverCounter count={count} incrementCount={incrementCount} />
        )} />
      </div>
    </div>
  );
}

export default App;
