
import store from "./carView/reducer";
import { Provider } from "react-redux";
import './App.css';
import { Route, Routes} from 'react-router-dom';


import LoginPage from "./carView/loginPage";

import NewTask from "./carView/newTask";
import CardView from "./carView/card";




function App() {
 
  return (
    <Provider store={store}>
  <div>
  <Routes>
        
          <Route path="/" element={<LoginPage/>}/>
          <Route path="newTask" element={<NewTask/>}/>
          <Route path="cards" element={<CardView/>}/>
          <Route path="cancel" element={<CardView/>}/>

     
        </Routes>
  </div>
  </Provider>
  );
}

export default App;
