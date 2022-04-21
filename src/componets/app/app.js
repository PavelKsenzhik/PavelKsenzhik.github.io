import useAnim from '../../hooks/use-anim';

import Header from '../header';
import Sidebar from '../sidebar';
import Tasks from '../tasks';

import './min.css'
import './app.css';

function App() {
  useAnim()
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
