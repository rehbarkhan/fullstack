import {Routes,Route} from 'react-router-dom';

import HomePage from './Page/HomePage';
import DropDown from './Page/DropDown';
function App() {
  return (
    <>
    <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route exact path='/dropdown' element={<DropDown />} />
    </Routes>
    </>
  );
}

export default App;
