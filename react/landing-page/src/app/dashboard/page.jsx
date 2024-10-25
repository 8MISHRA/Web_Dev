'use client'; 

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../appwrite';

const Dashboard = () => {
  const [user, setUser] = useState(null); 
  const router = useRouter();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await account.get(); 
        setUser(user);
      } catch (error) {
        console.log('No active session, redirecting to login.');
        router.push('/login'); 
      }
    };

    fetchUser();
  }, []);

  if (!user) {
    return <div style={styles.loading}>Loading...</div>;
  }

  return (
    <div style={styles.dashboard}>
      <h1 style={styles.title}>Welcome to your Dashboard {user.name}!</h1>
      <div style={styles.accountInfo}>
        <h2>Your Account Info:</h2>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>User ID:</strong> {user.$id}</p>
      </div>
      <button onClick={async () => {
        await account.deleteSession('current'); 
        router.push('/login');
      }} style={styles.logoutButton}>Log Out</button>
    </div>
  );
};

const styles = {
  dashboard: {
    padding: '20px',
    borderRadius: '8px',
    transition: 'background-color 0.3s',
    margin: '100px',
  },
  title: {
    color: 'white', // Changed from '#white' to 'white'
    fontSize: '24px',
    marginBottom: '10px',
  },
  description: {
    color: 'white',
    fontSize: '16px',
    marginBottom: '20px',
  },
  accountInfo: {
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
    marginBottom: '20px',
    color: 'white', // Ensures text inside this div is white
  },
  logoutButton: {
    backgroundColor: '#e94e77',
    color: 'white', // Ensures button text is white
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    cursor: 'pointer',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  loading: {
    textAlign: 'center',
    fontSize: '18px',
    color: 'white', // Changed loading text color to white
  }
};

export default Dashboard;
