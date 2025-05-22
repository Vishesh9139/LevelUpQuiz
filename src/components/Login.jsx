import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firebase'; 

const Login = () => {
    const [otpVisible, setOtpVisible] = useState(false);

    const handleGenerateOtp = () => {
        setOtpVisible(true);
    
    };

    const handleOtpInput = (e, index) => {
        const inputs = document.querySelectorAll('.otp-input');
        if (e.target.value.length === 1 && index < inputs.length - 1) {
            inputs[index + 1].focus();
        }
    };

    return (
        <div className="container-fluid p-0">
            <h1 className="mb-2">Level Up Quiz</h1>
            <div className="main-container d-flex justify-content-center align-items-center" style={{ height: '90vh', backgroundColor: '#fff' }}>
                <div className="content-wrapper d-flex" style={{ width: '800px', height: '500px', margin: '0 auto', padding: '20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(255, 0, 0, 0.2)', backgroundColor: '#fff' }}>
                    <div className="form-content flex-1 pr-4">
                        <p>Welcome back!<br />Please login/Signup to your account.</p>
                        <form>
                            <div className="form-group email-group">
                                <label htmlFor="email" style={{ color: '#D82828' }}>Email Address</label>
                                <input type="email" className="form-control" id="email" placeholder="Email Address" style={{ color: '#D82828', border: 'none', borderBottom: '2px solid #D82828', outline: 'none', boxShadow: 'none' }} />
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-custom" style={{ backgroundColor: '#D82828', borderColor: '#D82828', color: 'white' }} onClick={handleGenerateOtp}>Generate OTP</button>
                            </div>
                            {otpVisible && (
                                <div className="form-group otp-group">
                                    <label htmlFor="otp">Enter OTP</label>
                                    <div id="otp-inputs">
                                        {[...Array(6)].map((_, i) => (
                                            <input key={i} type="text" className="otp-input" maxLength="1" style={{ width: '40px', textAlign: 'center', marginRight: '5px', border: '1px solid #ccc', borderRadius: '5px', display: 'inline-block' }} onInput={(e) => handleOtpInput(e, i)} />
                                        ))}
                                    </div>
                                </div>
                            )}
                            <div className="form-check mb-2">
                                <input type="checkbox" className="form-check-input" id="rememberMe" />
                                <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
                            </div>
                            <div className="d-flex justify-content-between">
                                <Link to="#" className="text-muted">Forgot Password?</Link>
                            </div>
                            <div className="mt-3">
                                <button type="button" className="btn btn-custom mr-2" style={{ backgroundColor: '#D82828', borderColor: '#D82828', color: 'white' }}>Login</button>
                                <button type="button" className="btn btn-outline-custom" style={{ borderColor: '#D82828', color: '#D82828' }}>Signup</button>
                            </div>
                        </form>
                        <div className="social-login mt-4">
                            <p>Or login with</p>
                            <div className="d-flex justify-content-between">
                                <Link to="#" className="text-danger">Google</Link>
                            </div>
                        </div>
                    </div>
                    <div className="image-content ml-4" style={{ maxWidth: '300px' }}>
                        <img src="extra.png" alt="Illustration" className="img-fluid" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
