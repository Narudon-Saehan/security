import './App.css';
import {BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import LoingScreen from './screen/LoingScreen';
import RegisterScreen from './screen/RegisterScreen';
import HomeScreen from './screen/HomeScreen';
import ResetPasswordScreen from './screen/ResetPasswordScreen';
import ForgotPasswordScreen from './screen/ForgotPasswordScreen';
import TestSendMail from './screen/TestSendMail';
import RegisterSucceedScreen from './screen/RegisterSucceedScreen';

import {AuthProvider} from './auth/Auth';
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Link to="/">Loing</Link>
        &ensp;&ensp;&ensp;
        <Link to="/register">Register</Link>
        &ensp;&ensp;&ensp;
        <Link to="/home">Home</Link>
        &ensp;&ensp;&ensp;
        <Link to="/resetPass">Reset Password</Link>
        &ensp;&ensp;&ensp;
        <Link to="/forgotPass">Forgot Password</Link>
        &ensp;&ensp;&ensp;
        <Link to="/RegisterSucceedScreen">RegisterSucceedScreen</Link>
        &ensp;&ensp;&ensp;
        <Link to="/TestSendMail">TestSendMail</Link>
        <Routes>
          <Route path='/' element={<LoingScreen/>}/>
          <Route path='/register' element={<RegisterScreen/>}/>
          <Route path='/home' element={<HomeScreen/>}/>
          <Route path='/resetPass' element={<ResetPasswordScreen/>}/>
          <Route path='/forgotPass' element={<ForgotPasswordScreen/>}/>
          <Route path='/RegisterSucceedScreen/:token' element={<RegisterSucceedScreen/>}/>
          <Route path='/TestSendMail' element={<TestSendMail/>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>

  );
}

export default App;
