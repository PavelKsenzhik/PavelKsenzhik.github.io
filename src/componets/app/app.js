import Header from '../header';
import Tasks from '../tasks';

import './min.css'
import './app.css';
import DateManager from '../dateManager';

function App() {
  return (
    <div className="app">
      <div className='side-bar'>
        <DateManager />
      </div>
      <div className='content'>
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
