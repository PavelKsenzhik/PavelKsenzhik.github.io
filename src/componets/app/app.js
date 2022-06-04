import {
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import useAnim from '../../hooks/use-anim';


import Header from '../header';
import Sidebar from '../sidebar';
import Tasks from '../tasks';
import Bin from '../bin';

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
          <Routes>
            <Route path="/" element={<Navigate to="/tasks"/>} />
            <Route path="/tasks" element={<Tasks />}/>
            <Route path="/bin" element={<Bin />}/>
            
          </Routes>
        </div>

      </div>



  );
}

export default App;
