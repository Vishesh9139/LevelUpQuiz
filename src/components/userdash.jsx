import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './firebase'; 

const UserDash = () => {
    return (
        <div className="body">
            <div className="header">
                <div className="logo">
                    <h1>Level Up Quiz</h1>
                </div>
                <div className="nav-links">
                    {}
                </div>
                <div className="profile">
                    {}
                    <div className="name">Nikunj</div>
                </div>
            </div>
            <div className="main-container d-flex">
                <div className="sidebar">
                    <h4>Dashboard</h4>
                    <button className="btn btn-primary btn-block mb-3" style={{ backgroundColor: '#D82828' }}>Start Your Quiz</button>
                    <div className="mb-3">
                        <label>Email</label>
                        <p>nikunjbparmar608@gmail.com</p>
                    </div>
                    <div className="mb-3">
                        <label>Phone No.</label>
                        <p>+91-1234567890</p>
                    </div>
                    <div className="mb-3">
                        <label>Quiz Through Code</label>
                        <input type="text" className="form-control" placeholder="Enter code" />
                    </div>
                </div>
                <div className="content flex-grow-1">
                    <div className="profile-section d-flex align-items-center justify-content-end mb-4">
                        <img src="profile-photo.png" alt="Profile Photo" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                        <div className="name">Nikunj Parmar</div>
                    </div>
                    <div className="table-container">
                        <h4>Exams Given</h4>
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th>Exam</th>
                                    <th>Date</th>
                                    <th>Score</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Core Java</td>
                                    <td>2023-05-01</td>
                                    <td>85</td>
                                </tr>
                                <tr>
                                    <td>Python</td>
                                    <td>2023-06-15</td>
                                    <td>90</td>
                                </tr>
                                <tr>
                                    <td>React JS</td>
                                    <td>2023-07-20</td>
                                    <td>88</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDash;
