import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, loadUser } from './actions/user';
import AdminPanel from './components/Admin/AdminPanel';
import Timeline from './components/Admin/Timeline';
import Project from './components/Admin/Project';





function App() {

  const dispatch = useDispatch();

  const {isAuthenticated}= useSelector(state=> state.login);
  const {loading, user} = useSelector(state=> state.user);
  useEffect(()=>{
    
    dispatch(getUser());
    dispatch(loadUser());
  },[dispatch]);



  return (
    <Router>
      {

        loading ? (<div class="loading-container">
        <div class="cube">
            <div class="face front"></div>
            <div class="face back"></div>
            <div class="face right"></div>
            <div class="face left"></div>
            <div class="face top"></div>
            <div class="face bottom"></div>
        </div>
    </div>):

        loading ? <div>Loading...</div>:

          ( 
            <>
              <Header/>
                <Routes>
                  <Route path='/' element={<Home timelines={user.timeline} skills={user.skills}/>}></Route>
                  <Route path='/about' element={<About about={user.about}/>}></Route>
                  <Route path='/projects' element={<Projects projects={user.projects}/>}></Route>
                  <Route path='/contact' element={<Contact/>}></Route>
                  <Route path='/account' element={ isAuthenticated? <AdminPanel/>:<Login/>}></Route>
                  <Route path='/admin/timeline/add' element={ isAuthenticated? <Timeline/>:<Login/>}></Route>
                  <Route path='/admin/project' element={ isAuthenticated? <Project/>:<Login/>}></Route>
                </Routes>
              <Footer/>
            </>
          )
       }
    </Router>
  );
}

export default App;
