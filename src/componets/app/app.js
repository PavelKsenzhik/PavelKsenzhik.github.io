import Header from '../header';
import Tasks from '../tasks';

import './min.css'
import './app.css';
import Sidebar from '../sidebar';

function App() {
  return (
    <div className="app">
      <div className='side-bar'>
        <Sidebar />
      </div>
      <div className='content'>
        <Header />
        <Tasks />
      </div>
    </div>
  );
}

export default App;
