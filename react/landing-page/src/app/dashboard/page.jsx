"use client";

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../appwrite';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [newDataLabel, setNewDataLabel] = useState('');
  const [newDataValue, setNewDataValue] = useState('');
  const [updateLabel, setUpdateLabel] = useState('');
  const [updateValue, setUpdateValue] = useState('');
  const [currentlyEditingId, setCurrentlyEditingId] = useState(null);
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

    const fetchData = async () => {
      const response = await axios.get('http://localhost:5000/data');
      setData(response.data);
    };
    fetchData();
  }, []);

  const handleAddData = async () => {
    if (newDataLabel && newDataValue) {
      const response = await axios.post('http://localhost:5000/data', { label: newDataLabel, value: Number(newDataValue) });
      setData([...data, response.data]);
      setNewDataLabel('');
      setNewDataValue('');
    }
  };

  const handleEditClick = (id, currentLabel, currentValue) => {
    setCurrentlyEditingId(id);
    setUpdateLabel(currentLabel);
    setUpdateValue(currentValue);
  };

  const handleUpdateData = async (id) => {
    const response = await axios.put(`http://localhost:5000/data/${id}`, { label: updateLabel, value: Number(updateValue) });
    setData(data.map(item => item.id === id ? response.data : item));
    setCurrentlyEditingId(null);
    setUpdateLabel('');
    setUpdateValue('');
  };

  const handleDeleteData = async (id) => {
    await axios.delete(`http://localhost:5000/data/${id}`);
    setData(data.filter(item => item.id !== id));
  };

  const chartData = {
    labels: data.map(item => item.label),
    datasets: [
      {
        label: 'Values',
        data: data.map(item => item.value),
        backgroundColor: 'rgba(144, 238, 144, 0.8)',  // Light green color
      },
    ],
  };

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

      <div>
        <input
          type="text"
          placeholder="Label"
          value={newDataLabel}
          onChange={(e) => setNewDataLabel(e.target.value)}
          style={{ ...styles.input, ...(newDataLabel && styles.inputFocus) }}
        />
        <input
          type="number"
          placeholder="Value"
          value={newDataValue}
          onChange={(e) => setNewDataValue(e.target.value)}
          style={{ ...styles.input, ...(newDataValue && styles.inputFocus) }}
        />
        <button onClick={handleAddData} style={styles.button}>Add Data</button>
      </div>

      <ul style={styles.dataList}>
        {data.map(item => (
          <li key={item.id} style={styles.dataItem}>
            {item.label}: {item.value}
            {currentlyEditingId === item.id ? (
              <div>
                <input
                  type="text"
                  placeholder="New Label"
                  value={updateLabel}
                  onChange={(e) => setUpdateLabel(e.target.value)}
                  style={{ ...styles.input, ...(updateLabel && styles.inputFocus) }}
                />
                <input
                  type="number"
                  placeholder="New Value"
                  value={updateValue}
                  onChange={(e) => setUpdateValue(e.target.value)}
                  style={{ ...styles.input, ...(updateValue && styles.inputFocus) }}
                />
                <button onClick={() => handleUpdateData(item.id)} style={styles.button}>Save</button>
                <button onClick={() => setCurrentlyEditingId(null)} style={styles.button}>Cancel</button>
              </div>
            ) : (
              <button onClick={() => handleEditClick(item.id, item.label, item.value)} style={styles.button}>Update</button>
            )}
            <button onClick={() => handleDeleteData(item.id)} style={styles.button}>Delete</button>
          </li>
        ))}
      </ul>

      <div style={styles.chartContainer}>
        <Bar data={chartData} options={{ responsive: true, plugins: { legend: { position: 'top' } } }} />
      </div>

      <button onClick={async () => {
        await account.deleteSession('current');
        router.push('/login');
      }} style={styles.logoutButton}>Log Out</button>
    </div>
  );
};

const styles = {
  dashboard: { display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', margin: '100px' },
  title: { color: 'white', fontSize: '24px', marginBottom: '10px' },
  accountInfo: { textAlign: 'center', marginBottom: '20px' },
  button: { backgroundColor: '#3498db', color: 'white', padding: '10px', margin: '5px', cursor: 'pointer', border: 'none', borderRadius: '5px' },
  logoutButton: { backgroundColor: '#e94e77', color: 'white', padding: '10px', border: 'none', borderRadius: '5px', cursor: 'pointer' },
  dataList: { listStyle: 'none', padding: 0 },
  dataItem: { textAlign: 'center', marginBottom: '10px' },
  loading: { textAlign: 'center', fontSize: '18px', color: 'white' },
  chartContainer: { width: '80%', margin: '20px 0' },
  input: {
    padding: '10px',
    margin: '5px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    outline: 'none',
    transition: 'all 0.3s ease',
    background: 'linear-gradient(135deg, #e0f7fa, #b2ebf2)',
    boxShadow: 'inset 0 0 5px rgba(0,0,0,0.1)',
  },
  inputFocus: {
    background: 'linear-gradient(135deg, #b2ebf2, #4dd0e1)',
    boxShadow: '0 0 5px rgba(0,0,0,0.2)',
  }
};

export default Dashboard;
