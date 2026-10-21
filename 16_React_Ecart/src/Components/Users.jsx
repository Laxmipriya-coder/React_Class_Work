import { useEffect, useState } from "react";

function User() {
    const [user, setUser] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            let res = await fetch("https://dummyjson.com/users");

            if (!res.ok) {
                throw new Error("Something Went Wrong");
            }

            let data = await res.json();
            setUser(data.users);
        } catch (err) {
            console.log(err);
            setIsError(true);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            {isLoading ? (
                <h3
                    style={{
                        textAlign: "center",
                        marginTop: "20px"
                    }}
                >
                    Page is loading, please wait...
                </h3>
            ) : isError ? (
                <h3 className="text-center text-danger">
                    Something went wrong. Please try again.
                </h3>
            ) : (
                <>
                    <h2 className="text-primary text-center" >
                        Users Data
                    </h2>

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
            )}
        </>
    );
}

export default User;