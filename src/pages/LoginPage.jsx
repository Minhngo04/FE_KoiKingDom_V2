import { useState } from 'react';
import '../assets/scss/Auth/LoginPage.scss';
import koifish_auth from '../assets/images/koi-fish-auth.png';
import koifishicon_auth from '../assets/images/koi-icon-auth.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { GrCheckbox } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { users } from '../data/mockAPI';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  // Hàm xử lý khi click vào icon mắt
  const togglePasswordVisibility = (type) => {
    switch (type) {
      case 'password':
        setShowPassword((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleLogin();
    }
  };
  const handleLogin = async () => {
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!password) {
      toast.error('Password cannot be empty.');
      return;
    }
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      toast.success('Login successful!');
      navigate('/');
    } else {
      toast.error('Invalid email or password.');
    }
  };

  const handleNavigation = (type) => {
    switch (type) {
      case 'register':
        navigate('/register-page'); // Điều hướng đến trang BookingPage
        break;

      default:
        console.error('Unknown navigation type');
    }
  };
  return (
    <>
      <div className="login-container">
        <img className="auth-image" src={koifish_auth} />
        <div className="login-form-container">
          <div className="login-form">
            <img className="auth-logo" src={koifishicon_auth} />
            <div className="tittle">Sign in</div>
            <div className="container-loginform">
              <div className="input-wrapper">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="input-field input-field-email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  onKeyDown={(event) => handleKeyDown(event)}
                />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="input-field input-field-password"
                  onChange={(event) => setPassword(event.target.value)}
                  onKeyDown={(event) => handleKeyDown(event)}
                />
                <div className="eye-icon-container" onClick={() => togglePasswordVisibility('password')}>
                  {showPassword ? (
                    <FaEyeSlash size={24} className="eye-icon" />
                  ) : (
                    <FaEye size={24} className="eye-icon" />
                  )}
                </div>
              </div>
            </div>
            <div className="authentication-container">
              <div className="auth-header">
                <GrCheckbox className="separator-line" />
                <div className="remember-me">Remember me</div>
                <div className="forgot-password">Forgot Password</div>
              </div>
              <div className="account-link">
                <span>Don’t have an account?</span>
                <span className="sign-up-link" onClick={() => handleNavigation('register')}>
                  Sign Up
                </span>
              </div>
              <butoon className="default-login-button" onClick={() => handleLogin()}>
                LOGIN
              </butoon>
              <div className="social-login">
                <div className="social-login-text">
                  <span className="separator left" />
                  <span>Or login with</span>
                  <span className="separator right" />
                </div>
              </div>
              <div className="google-login-button">
                <div className="google-login-icons">
                  <FaGoogle size={25} className="icon-google" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
