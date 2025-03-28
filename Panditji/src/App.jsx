
import UserRouting from './components/Users/UserRouting';
import AdminDashboard from './components/Admin/Admindashboard';
import { Route, Router, Routes } from 'react-router-dom';


function App() {

  return (
    // <div>
    //   <UserRouting/>
    //   {/* <AdminDashboard/> */}
    // </div>

      <Routes>
        <Route path='/admin' element={<AdminDashboard/>} />
      </Routes>
  );
}

export default App;