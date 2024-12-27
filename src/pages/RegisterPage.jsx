import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { FaGoogle } from 'react-icons/fa6';
import koifish_auth from '../assets/images/koi-fish-auth.png';
import koifishicon_auth from '../assets/images/koi-icon-auth.png';
import '../assets/scss/Auth/RegisterPage.scss';
const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Hàm xử lý khi click vào icon mắt
  const togglePasswordVisibility = (type) => {
    switch (type) {
      case 'password':
        setShowPassword((prevState) => !prevState);
        break;
      case 'confirmPassword':
        setShowConfirmPassword((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const handleNavigation = (type) => {
    switch (type) {
      case 'login':
        navigate('/login-page'); // Điều hướng đến trang BookingPage
        break;

      default:
        console.error('Unknown navigation type');
    }
  };

  return (
    <>
      <div className="register-container">
        <img className="auth-image" src={koifish_auth} />
        <div className="register-form-container">
          <div className="register-form">
            <img className="auth-logo" src={koifishicon_auth} />
            <div className="tittle">Sign up</div>
            <div className="container-registerform">
              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="lastName" className="input-label">
                    Last name
                  </label>
                  <input type="text" id="lastName" className="input-field input-field-name" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="firstName" className="input-label">
                    First name
                  </label>
                  <input type="text" id="firstName" className="input-field input-field-name" />
                </div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input type="text" id="email" className="input-field input-field-email" />
              </div>

              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="phone" className="input-label">
                    Phone
                  </label>
                  <input type="text" id="phone" className="input-field" />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="gender" className="input-label">
                    Gender
                  </label>
                  <select id="gender" className="input-field">
                    <option className="input-label" value="">
                      Select Gender
                    </option>
                    <option className="input-label" value="male">
                      Male
                    </option>
                    <option className="input-label" value="female">
                      Female
                    </option>
                    <option className="input-label" value="other">
                      Other
                    </option>
                  </select>
                </div>
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

              <div className="input-wrapper">
                <label htmlFor="confirmPassword" className="input-label">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className="input-field input-field-password"
                />
                <div className="eye-icon-container" onClick={() => togglePasswordVisibility('confirmPassword')}>
                  {showConfirmPassword ? (
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
                <span className="sign-up-link" onClick={() => handleNavigation('login')}>
                  Sign in
                </span>
              </div>
              <div className="default-register-button">Sign up</div>
              <div className="social-register">
                <div className="social-register-text">
                  <span className="separator left" />
                  <span>Or register with</span>
                  <span className="separator right" />
                </div>
              </div>
              <div className="google-register-button">
                <div className="google-register-icons">
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
export default RegisterPage;
