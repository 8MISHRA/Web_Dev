// Footer.jsx
import React from 'react';
import './Footer.css'; // Add this if you have any specific CSS for the footer

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="header">
                <h1>Explore your favorite plan</h1>
            </div>
            <table className="plans-table">
                <thead>
                    <tr>
                        <th>Subscription Level</th>
                        <th className="plan-header">
                            <div className="basic">Basic</div>
                        </th>
                        <th className="plan-header">
                            <div className="advanced">Advanced <i className="fas fa-bolt"></i></div>
                        </th>
                        <th className="plan-header">
                            <div className="premium">Premium <i className="fas fa-crown"></i></div>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Number of Users</td>
                        <td>1</td>
                        <td>Up to 5</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Customer Support</td>
                        <td>Online</td>
                        <td>Priority</td>
                        <td>Premium</td>
                    </tr>
                    <tr>
                        <td>Monthly Requests</td>
                        <td>1000</td>
                        <td>5000</td>
                        <td>Unlimited</td>
                    </tr>
                    <tr>
                        <td>Data Packages</td>
                        <td>1 GB</td>
                        <td>5 GB</td>
                        <td>10 GB</td>
                    </tr>
                    <tr>
                        <td>Flexible Cancellation</td>
                        <td>Available</td>
                        <td>Available</td>
                        <td>Available</td>
                    </tr>
                    <tr>
                        <td>Monthly Cost</td>
                        <td className="price">$9.99</td>
                        <td className="price">$19.99</td>
                        <td className="price">$39.99</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Footer;
