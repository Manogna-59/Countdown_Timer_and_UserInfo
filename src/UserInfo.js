import React, { useState, useEffect } from 'react';
import './styles.css'; 
const UserInfo = () => {
    const [users, setUsers] = useState([]); 
    const [searchTerm, setSearchTerm] = useState(() => localStorage.getItem('searchTerm') || ''); 
    const [sortedUsers, setSortedUsers] = useState([]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setSortedUsers(data);
            })
            .catch(error => console.error('Error fetching users:', error));
    };

    const handleSearchTermChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);
        localStorage.setItem('searchTerm', term);
    };

    useEffect(() => {
        const filteredUsers = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setSortedUsers(filteredUsers);
    }, [searchTerm, users]);

    const handleSortByName = () => {
        const sorted = [...sortedUsers].sort((a, b) =>
            a.name.localeCompare(b.name)
        );
        setSortedUsers(sorted);
    };

    return (
        <div style={{ textAlign: 'center', fontFamily: 'Arial, sans-serif', color: '#333' }}>
            <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>User Information</h2>
            <input
                type="text"
                placeholder="Search by name"
                value={searchTerm}
                onChange={handleSearchTermChange}
                style={{ padding: '8px', marginRight: '10px', borderRadius: '5px', border: '1px solid #ccc' }}
            />
            <button onClick={handleSortByName} style={{ padding: '8px 16px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sort by Name</button>
            <ul style={{ listStyleType: 'none', padding: '0', marginTop: '20px' }}>
                {sortedUsers.map(user => (
                    <li key={user.id} style={{ backgroundColor: '#f0f0f0', padding: '10px', marginBottom: '10px', borderRadius: '5px' }}>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <br />
                        <strong>Phone:</strong> {user.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserInfo;
