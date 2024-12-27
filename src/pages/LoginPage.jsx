import { useState } from 'react';
import '../assets/scss/Auth/LoginPage.scss';
import koifish_auth from '../assets/images/koi-fish-auth.png';
import koifishicon_auth from '../assets/images/koi-icon-auth.png';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa6';
import { GrCheckbox } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

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
                <input type="text" id="email" className="input-field input-field-email" />
              </div>

              <div className="input-wrapper">
                <label htmlFor="password" className="input-label">
                  Password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  className="input-field input-field-password"
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
              <div className="default-login-button">Sign in</div>
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
