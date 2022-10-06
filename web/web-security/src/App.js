import './App.css';
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';
import HomeScreen from './screen/HomeScreen';
import ResetPasswordScreen from './screen/ResetPasswordScreen';
import ForgotPasswordScreen from './screen/ForgotPasswordScreen';
import ForgotPasswordSucceedScreen from './screen/ForgotPasswordSucceedScreen';
import TestSendMail from './screen/TestSendMail';
import RegisterSucceedScreen from './screen/RegisterSucceedScreen';

import LoadingScreen from './screen/LoadingScreen';
import ErrorScreen from './screen/ErrorScreen';
import {AuthProvider} from './auth/Auth';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Link to="/">Login</Link>
        &ensp;&ensp;&ensp;
        <Link to="/register">Register</Link>
        &ensp;&ensp;&ensp;
        <Link to="/home">Home</Link>
        &ensp;&ensp;&ensp;
        <Link to="/resetPass/1">Reset Password</Link>
        &ensp;&ensp;&ensp;
        <Link to="/forgotPass">Forgot Password</Link>
        &ensp;&ensp;&ensp;
        <Link to="/RegisterSucceedScreen">RegisterSucceedScreen</Link>
        &ensp;&ensp;&ensp;
        <Link to="/TestSendMail">TestSendMail</Link>
        &ensp;&ensp;&ensp;
        <Link to="/loading">loading</Link>
        &ensp;&ensp;&ensp;
        <Link to="/error">error</Link>
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/forgotPass' element={<ForgotPasswordScreen/>}/>
          <Route path='/ForgotPassScreen/:token' element={<ForgotPasswordSucceedScreen/>}/>
          <Route path='/resetPass/:token' element={<ResetPasswordScreen/>}/>
          <Route path='/RegisterSucceedScreen/:token' element={<RegisterSucceedScreen/>}/>

          <Route path='/TestSendMail' element={<TestSendMail/>}/>
          <Route path='/loading' element={<LoadingScreen/>}/>
          <Route path='/error' element={<ErrorScreen/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
