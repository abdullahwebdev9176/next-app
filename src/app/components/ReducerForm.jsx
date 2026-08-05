'use client'

import { useReducer } from "react";

const initialState = {
    email: "",
    password: "",
    loading: false,
    error: "",
    isLoggedIn: false,
};

function reducer(state, action) {

    console.log("Action:", action);

    switch (action.type) {
        case "SET_EMAIL":
            return {
                ...state,
                email: action.payload,
            };

        case "SET_PASSWORD":
            return {
                ...state,
                password: action.payload,
            };

        case "LOGIN_START":
            return {
                ...state,
                loading: true,
                error: "",
            };

        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                isLoggedIn: true,
            };

        case "LOGIN_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload,
            };

        case "LOGOUT":
            return {
                ...state,
                email: "",
                password: "",
                loading: false,
                error: "",
                isLoggedIn: false,
            };

        default:
            return state;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleLogin = () => {
        dispatch({ type: "LOGIN_START" });

        setTimeout(() => {
            if (
                state.email === "admin@gmail.com" &&
                state.password === "123456"
            ) {
                dispatch({ type: "LOGIN_SUCCESS" });
            } else {
                dispatch({
                    type: "LOGIN_FAILED",
                    payload: "Invalid Email or Password",
                });
            }
        }, 2000);
    };

    return (
        <div className="min-h-screen bg-slate-100 flex items-center justify-center px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6">
                    Login Form
                </h1>

                <div className="space-y-5">
                    <div>
                        <label className="block mb-2 font-medium">
                            Email
                        </label>

                        <input
                            type="email"
                            placeholder="Enter Email"
                            value={state.email}
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_EMAIL",
                                    payload: e.target.value,
                                })
                            }
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 font-medium">
                            Password
                        </label>

                        <input
                            type="password"
                            placeholder="Enter Password"
                            value={state.password}
                            onChange={(e) =>
                                dispatch({
                                    type: "SET_PASSWORD",
                                    payload: e.target.value,
                                })
                            }
                            className="w-full border rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Login
                    </button>

                    {state.loading && (
                        <p className="text-blue-600 text-center font-medium">
                            Loading...
                        </p>
                    )}

                    {state.error && (
                        <p className="text-red-600 text-center font-medium">
                            {state.error}
                        </p>
                    )}

                    {state.isLoggedIn && (
                        <div className="bg-green-100 border border-green-300 rounded-lg p-4 text-center">
                            <h2 className="text-green-700 font-bold text-lg">
                                Welcome Abdullah 🎉
                            </h2>

                            <button
                                onClick={() =>
                                    dispatch({ type: "LOGOUT" })
                                }
                                className="mt-4 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
                            >
                                Logout
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}