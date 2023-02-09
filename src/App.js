import logo from './logo.svg';
import TodoList from './TodoList';
import ZenQuote from './ZenQuote';
import GitHubUserInfo from './GitHubUserInfo';
import './App.css';

function App() {
  return (
    <div className='page-container'>
      <ZenQuote/>
      
      <div className='GitHubUserInfo-users'>
      <GitHubUserInfo username="WarrenS23" />
      <GitHubUserInfo username="DTN-public" />
      </div>
      <TodoList/>
    </div>
  );
}

export default App;
