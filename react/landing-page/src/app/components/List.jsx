'use client';

import React from 'react';
import { FaApple, FaGooglePlay, FaStar, FaCheck, FaUser, FaRocket } from 'react-icons/fa'; // Added a rocket icon

const PaymentPlans = () => {
  return (
    <div className="payment-page">
      <section className="plans">
        <h2>Find Your Perfect Plan</h2>
        <table className="plan-table">
          <thead>
            <tr>
              <th>Plan Type</th>
              <th>Explorer</th>
              <th>Adventurer</th>
              <th>Voyager</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Max Users</td>
              <td>3</td>
              <td>10</td>
              <td>Unlimited</td>
            </tr>
            <tr>
              <td>Support Level</td>
              <td>Standard</td>
              <td>Priority</td>
              <td>24/7 Concierge</td>
            </tr>
            <tr>
              <td>Data Storage</td>
              <td>2 GB</td>
              <td>10 GB</td>
              <td>50 GB</td>
            </tr>
            <tr>
              <td>AI-Driven Insights</td>
              <td>Limited</td>
              <td>Advanced</td>
              <td>Full Access</td>
            </tr>
          </tbody>
        </table>
      </section>

      <style jsx>{`
        .payment-page {
          background-color: #0d0d0d;
          color: green;
          padding: 3rem;
        }

        .plans {
          text-align: center;
          margin-bottom: 4rem;
        }

        .plan-table {
          width: 90%;
          max-width: 900px;
          margin: 0 auto;
          border-collapse: collapse;
        }

        .plan-table th, .plan-table td {
          padding: 1.2rem;
          border: none;
          font-size: 1.1rem;
        }

        .plan-table th {
          color: green;
          background-color: #333;
          font-weight: bold;
          border-bottom: 3px solid #555;
        }

        .plan-table td {
          background-color: #222;
          color: #ccc;
          text-align: center;
          border-bottom: 1px solid #444;
        }

        .plan-table tr:nth-child(even) {
          background-color: #2a2a2a;
        }

        .plan-table th .icon {
          margin-right: 8px;
          font-size: 1.4rem;
        }

        .plan-table th:hover {
          color: pink; 
          transition: transform 0.3s ease;
        }

        .download-link {
          margin: 0 12px;
          display: inline-flex;
          align-items: center;
          color: #fff;
          text-decoration: none;
          font-size: 1.3rem;
          padding: 12px 20px;
          border: 2px solid #ffd700;
          border-radius: 8px;
          transition: background-color 0.3s ease, transform 0.3s ease;
        }

        .download-link:hover {
          background-color: #ffd700;
          color: #000;
          transform: translateY(-3px);
        }

        .download-link .icon {
          margin-right: 10px;
          font-size: 1.8rem;
        }

        .app-section h3 {
          font-size: 2.5rem;
          color: #ffd700;
        }

        .app-section p {
          font-size: 1.4rem;
          color: #ccc;
          margin-bottom: 2rem;
        }

        .app-preview {
          margin-top: 2.5rem;
        }
      `}</style>
    </div>
  );
};

export default PaymentPlans;
