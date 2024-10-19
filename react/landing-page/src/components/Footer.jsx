import React from 'react';
import './Footer.css';

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


// import React from 'react';
// import { Container, Row, Col, Table, Badge } from 'react-bootstrap';
// import { FaBolt, FaCrown } from 'react-icons/fa';
// import './Footer.css';

// const Footer = () => {
//     return (
//         <Container fluid className="footer-container py-5 bg-dark text-white">
//             <Row className="justify-content-center mb-4">
//                 <Col md={8} className="text-center">
//                     <h1 className="mb-0">Explore Your Favorite Plan</h1>
//                 </Col>
//             </Row>
//             <Row className="justify-content-center">
//                 <Col>
//                     <Table bordered hover variant="dark" className="plans-table rounded">
//                         <thead>
//                             <tr>
//                                 <th>Subscription Level</th>
//                                 <th className="text-center">
//                                     <Badge pill bg="success" className="plan-badge">
//                                         Basic
//                                     </Badge>
//                                 </th>
//                                 <th className="text-center">
//                                     <Badge pill bg="primary" className="plan-badge">
//                                         Advanced <FaBolt />
//                                     </Badge>
//                                 </th>
//                                 <th className="text-center">
//                                     <Badge pill bg="warning" text="dark" className="plan-badge">
//                                         Premium <FaCrown />
//                                     </Badge>
//                                 </th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             <tr>
//                                 <td>Number of Users</td>
//                                 <td>1</td>
//                                 <td>Up to 5</td>
//                                 <td>Unlimited</td>
//                             </tr>
//                             <tr>
//                                 <td>Customer Support</td>
//                                 <td>Online</td>
//                                 <td>Priority</td>
//                                 <td>Premium</td>
//                             </tr>
//                             <tr>
//                                 <td>Monthly Requests</td>
//                                 <td>1000</td>
//                                 <td>5000</td>
//                                 <td>Unlimited</td>
//                             </tr>
//                             <tr>
//                                 <td>Data Packages</td>
//                                 <td>1 GB</td>
//                                 <td>5 GB</td>
//                                 <td>10 GB</td>
//                             </tr>
//                             <tr>
//                                 <td>Flexible Cancellation</td>
//                                 <td>Available</td>
//                                 <td>Available</td>
//                                 <td>Available</td>
//                             </tr>
//                             <tr>
//                                 <td>Monthly Cost</td>
//                                 <td className="price">$9.99</td>
//                                 <td className="price">$19.99</td>
//                                 <td className="price">$39.99</td>
//                             </tr>
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>
//         </Container>
//     );
// };

// export default Footer;
