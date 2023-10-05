import './App.css';
import { Homepage } from "./pages/Homepage";
import { Header } from "./component/Header";
import { Route, Routes, useNavigate } from "react-router";
import { Exercise } from "./pages/Exercise";
import { Food } from "./pages/Food";
import { Goal } from "./pages/Goal";
import { Dashboard } from "./pages/Dashboard";
import { NavigationLeft } from "./component/NavigationLeft";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getGoals } from "./utils/goals.utils";
import { getFoods } from "./utils/food.utils";
import { getExercises } from "./utils/exercise.utils";
import NavbarHeader from "./component/NavbarHeader";

import dumbell from "./assets/dumbell.png"
import { Signup } from "./pages/SignUp";
import { Login } from "./pages/Login";
import RequiredAuth from "./component/RequiredAuth";
import User from "./pages/User";
import { getUser } from "./services/auth.service";
import { UserProfile } from "./pages/UserProfile";


import toast, { Toaster } from 'react-hot-toast';


function App() {

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loggedInUser = useSelector(state => state.userState.login)
  const user = useSelector(state => state.userState.user)

  const [headerCompleted, setHeaderCompleted] = useState(false);

  const handleHeaderComplete = () => {
    setHeaderCompleted(true);
  };


  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      getUser(token, dispatch)
    }
  }, [])

  useEffect(() => {
    if (Object.keys(user).length > 0) {
      getGoals(dispatch, user._id)
      getFoods(dispatch, user._id)
      getExercises(dispatch, user._id)
    }
  }, [user])


  return (
    <>
      {/* <Header onHeaderComplete={handleHeaderComplete} /> */}
      {/* <Header onHeaderComplete={handleHeaderComplete} /> */}

      {/* <NavbarHeader /> */}

      <Toaster
        position="top-right"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      {
        /* headerCompleted && ( */
        <section className="homeContainer">
          <RequiredAuth>
            <div className="nav-parent">
              <img src={dumbell} alt="pushup" />
              <div className="line"></div>
              <NavigationLeft />
            </div>
          </RequiredAuth>
          <div className="routesContainer">
            <Routes>
              <Route path="/" element={<RequiredAuth><Dashboard /></RequiredAuth>} />
              <Route path="/exercise" element={<RequiredAuth><Exercise /></RequiredAuth>} />
              <Route path="/food" element={<RequiredAuth><Food /></RequiredAuth>} />
              <Route path="/goal" element={<RequiredAuth><Goal /></RequiredAuth>} />
              <Route path="/user" element={<User />} />

              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </div>
          <RequiredAuth>
            <div className="profileContainer" >
              <UserProfile />
            </div>
          </RequiredAuth>
        </section>
        /* ) */
      }
    </>
  );
}

export default App;
