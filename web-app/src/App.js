import './App.css';
import Welcome from './components/Welcome';
import WelcomeClass from './components/WelcomeClass';
import Notification from './components/Notification';
import WelcomeDefault from './components/WelcomeDefault';
import LoginForm from './components/LoginForm';
import ListAndKeys from './components/ListAndKeys';
import Hooks from './components/Hooks';
import HookWithDepen from './components/HookWithDepen';
import Counter from './components/Counter';
import ShoppingCart from './components/ShoppingCart';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import Settings from './components/Settings';
import UserList from './components/UserList';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import DeletePost from './components/DeletePost';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";

// const name='Supriya';
// const num1=10, num2=20;
// const logged = true;
// const headingStyle ={
//   color: 'red',
//   fontSize: '50px',
//   backgroundColor: 'black'
// }
// const gadgets =['Mobile', 'Laptop', 'Tablet','Smartwatch'];
function App() {
  return (
   
    <div className="App">
<Router>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/user/supriya">User Supriya</Link></li>
            <li><Link to="/user/naani">User Naani</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li><Link to="/userList">UserList</Link></li>
            <li><Link to="/postList">PostList</Link></li>
            <li><Link to="/createPost">CreatePost</Link></li>
            <li><Link to="/deletePost">DeletePost</Link></li>
            <li><Link to="/updatePost">UpdatePost</Link></li>
          </ul>
        </nav>

        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/userList" element={<UserList />} />
        <Route path="/postList" element={<PostList />} />
        <Route path="/createPost" element={<CreatePost />} />
        <Route path="/deletePost" element={<DeletePost />} />
        <Route path="/updatePost" element={<UpdatePost />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="setting" element={<Settings />} />
        </Route>
        <Route path="/user/:userName" element={<User />} />
       
      </Routes>
      </Router>
 
      {/* <h1>Main Page: </h1>
      <ShoppingCart/>
      <Counter/>
      <Hooks/>
      <HookWithDepen text={"Update"}/>
      <ListAndKeys/>
      <LoginForm/>
      <Welcome loggedIn={false} />
      <Notification hasUnreadMsgs={false}/>
      <WelcomeDefault name={'Supriya'}/>
      <h1 style={headingStyle}>Hello {name}, from React App</h1>
      <p>Welcome to  first code test.</p>
      <p>Sum of {num1} and {num2} is {num1+num2}.</p>
      <button onClick={()=>alert('Button Clicked!')}>Click Me Button</button>
      <h3>{logged? "Logged in":"Sign out"}</h3>
      <WelcomeClass/>

      <ul>
        {
          gadgets.map((gadget, index)=>(
            <li key={index}>{gadget}</li>
          ))
 
        }
      </ul> */}
    </div>
  );
}
 
export default App;