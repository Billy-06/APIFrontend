import './App.css';
import Navbar from './components/Navbar';
import 'react-app-polyfill/stable';

import User from './components/User';
import Home from "./components/Home";
import Login from './components/Login';
import SignUp from './components/Signup';
import Project from "./components/Project";
import Article from "./components/Article";
import UserList from "./components/UserList";
import ProjectList from "./components/ProjectList";
import ArticleList from "./components/ArticleList";
import { UserProvider } from './components/UserContext';

// Import the browser router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  // const user
  // if (localStorage.getItem("user_token") == "") {

  // }
  
  return (
    <UserProvider value={{ user: { username: "anonymous", token: null } }} >
      <div className="App">
        <Router>
          <Navbar />
          <div className="container">
            <h1>React Django API</h1>
            <hr className="mb-3" />
            <div className="d-flex justify-content-center">
              <div className="col-md-8 pt-4">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/projects" element={<ProjectList />} />
                  <Route path="/projects/:id" element={<Project />} />

                  <Route path="/users/" element={<UserList />} />
                  <Route path="/users/:id" element={<User />} />

                  <Route path="/articles" element={<ArticleList />} />
                  <Route path="/articles/:id" element={<Article />} />

                </Routes>
              </div>
            </div>
          </div>
        </Router>
      </div>
    </UserProvider>
  );
}

export default App;
