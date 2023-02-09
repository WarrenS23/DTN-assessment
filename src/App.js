import logo from './logo.svg';
import TodoList from './TodoList';
import ZenQuote from './ZenQuote';
import GitHubUserInfo from './GitHubUserInfo';
import './App.css';

function App() {
  return (
    <div >
      <ZenQuote/>
      <GitHubUserInfo username="WarrenS23" />
      <GitHubUserInfo username="DTN-public" />
      <TodoList/>
    </div>
  );
}

export default App;
