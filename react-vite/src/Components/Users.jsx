
import { useEffect, useState } from "react";

function User() {
    const [user, setUser] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            let res = await fetch("https://dummyjson.com/users");
            let data = await res.json();
            setUser(data.users);
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <>
            <h2 className="text-primary" style={{textAlign:"center"}}>Users Data</h2>

            <table className="table table-bordered table-primary">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User Name</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact Number</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.username}</td>
                            <td>{u.firstName}</td>
                            <td>{u.lastName}</td>
                            <td>{u.email}</td>
                            <td>{u.phone}</td>
                            <td>{u.address.city}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default User;
