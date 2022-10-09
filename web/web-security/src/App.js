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
import LogScreen from './screen/LogScreen';
import DontClick from './screen/DontClick';

import LoadingScreen from './screen/LoadingScreen';
import ErrorScreen from './screen/ErrorScreen';
import {AuthProvider} from './auth/Auth';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
      {/* <label style={{color:"blue"}} onClick={()=>window.location = "/"}>Login</label>
        &ensp;&ensp;&ensp;
        <Link to="/register">Register</Link>
        &ensp;&ensp;&ensp;
        <a href="/home">Home</a>
        &ensp;&ensp;&ensp;
        <Link to="/resetPass">Reset Password</Link>
        &ensp;&ensp;&ensp;
        <Link to="/forgotPass">Forgot Password</Link>
        &ensp;&ensp;&ensp;
        <Link to="/RegisterSucceedScreen/1">RegisterSucceedScreen</Link>
        &ensp;&ensp;&ensp;
        <Link to="/ForgotPassScreen/1">ForgotPasswordSucceedScreen</Link>
        &ensp;&ensp;&ensp;
        <label style={{color:"blue"}} onClick={()=>window.location = "/Log/"+new Date(new Date().getTime() - (new Date().getTimezoneOffset()*60*1000)).toISOString().split('T')[0]+"/null/all/all/1"}>Log</label>
        &ensp;&ensp;&ensp;
        <Link to="/loading">loading</Link>
        &ensp;&ensp;&ensp;
        <Link to="/error">error</Link> */}
        <Routes>
          <Route path='/' element={<LoginScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/forgotPass' element={<ForgotPasswordScreen/>}/>
          <Route path='/ForgotPassScreen/:token' element={<ForgotPasswordSucceedScreen/>}/>
          <Route path='/resetPass' element={<ResetPasswordScreen/>}/>
          <Route path='/RegisterSucceedScreen/:token' element={<RegisterSucceedScreen/>}/>
          <Route path='/Log/:date/:email/:statusEmail/:statusLogin/:page' element={<LogScreen/>}/>
          <Route path='/dontClick' element={<DontClick/>}/>


          <Route path='/TestSendMail' element={<TestSendMail/>}/>
          <Route path='/loading' element={<LoadingScreen/>}/>
          <Route path='/error' element={<ErrorScreen/>}/>
          <Route path='*' element={<ErrorScreen/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
