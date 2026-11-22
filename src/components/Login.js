
import React, { useState } from "react";

function Login({onLogin}) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();
        setError("");

        try {

            const response = await fetch(
                "http://localhost/auth-api/login.php",
                {
                    method: "POST",
                    credentials: "include",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                }
            );

            const data = await response.json();
            console.log("Success!")

            if (!response.ok) {
                throw new Error(data.message);
            }

            onLogin(data.user);
            console.log(data.user.email)

        } catch (error) {

            setError(error.message);

        }
    };

    return (

        <div className="container mt-5">

            <div className="card p-4 mx-auto"
                 style={{ maxWidth: "400px" }}>

                <h2 className="mb-4">Login</h2>

                <form onSubmit={handleLogin}>

                    <input
                        type="email"
                        className="form-control mb-3"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <input
                        type="password"
                        className="form-control mb-3"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    {error && (
                        <p className="text-danger">{error}</p>
                    )}

                    <button className="btn btn-primary w-100">
                        Login
                    </button>

                </form>

            </div>

        </div>
    );
}

export default Login;
