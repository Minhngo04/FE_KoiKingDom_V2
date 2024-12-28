import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { GrCheckbox } from 'react-icons/gr';
import { FaGoogle } from 'react-icons/fa6';
import koifish_auth from '../assets/images/koi-fish-auth.png';
import koifishicon_auth from '../assets/images/koi-icon-auth.png';
import '../assets/scss/Auth/RegisterPage.scss';
import { toast } from 'react-toastify';
import { users } from '../data/mockAPI';

const RegisterPage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      );
  };

  const validatePhone = (phone) => {
    return String(phone)
      .toLowerCase()
      .match(/(?:\+84|0084|0)[235789][0-9]{1,2}[0-9]{7}(?:[^\d]+|$)/g);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleRegister();
    }
  };
  const handleRegister = async () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !phone) {
      toast.error('Please fill in all fields.');
      return;
    }
    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      toast.error('This email is already registered.');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    if (!password) {
      toast.error('Password cannot be empty.');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('Passwords do not match.');
      return;
    }

    if (!validatePhone(phone)) {
      toast.error('The phone number you entered is not a valid Vietnamese phone number. ');
      return;
    }
    toast.success('Registration successful!');
    navigate('/login-page');
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
                  <input
                    type="text"
                    id="lastName"
                    className="input-field input-field-name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event)}
                  />
                </div>

                <div className="input-wrapper">
                  <label htmlFor="firstName" className="input-label">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="input-field input-field-name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event)}
                  />
                </div>
              </div>

              <div className="input-wrapper">
                <label htmlFor="email" className="input-label">
                  Email
                </label>
                <input
                  type="text"
                  id="email"
                  className="input-field input-field-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(event) => handleKeyDown(event)}
                />
              </div>

              <div className="form-row">
                <div className="input-wrapper">
                  <label htmlFor="phone" className="input-label">
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="input-field"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    onKeyDown={(event) => handleKeyDown(event)}
                  />
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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

              <div className="input-wrapper">
                <label htmlFor="confirmPassword" className="input-label">
                  Confirm Password
                </label>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  id="confirmPassword"
                  className="input-field input-field-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  onKeyDown={(event) => handleKeyDown(event)}
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
              <button className="default-register-button" onClick={() => handleRegister()}>
                Sign up
              </button>
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
