import React, {useState, useEffect} from 'react';
import axios from "axios";

function CustomAxios(){
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {

        const response = await axios.get(
            'http://localhost:8080/api/articles'
        );
        setUsers(response.data);
        console.log(response)
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (

        <ul>
            {users.map(user => (
                <li key={user.id}>
                    {user.title}
                </li>
            ))}
        </ul>

    );
}

export default CustomAxios;