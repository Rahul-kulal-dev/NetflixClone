import React, { useState, useEffect } from 'react'
import Header from './Header'
import axios from 'axios'
import { API_END_POINTS } from '../utils/constants';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUsers } from '../redux/userSlice';



function Login() {
    const [isLogin, setIsLogin] = useState(true);
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const isLoading = useSelector((state) => state.app.isLoading);
    const user = useSelector((state) => state.app.user);

    useEffect(() => {
        if (user) {
            navigate("/browse");
        }
    }, [user, navigate]);

    const loginHandler = () => {
        setIsLogin(!isLogin);
    }

    const getInputData = async (e) => {
        e.preventDefault();
        dispatch(setLoading(true));
        if (isLogin) {
            const user = { email, password };
           

            try {
                const res = await axios.post(`${API_END_POINTS}/login`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });

                if (res.data.success) {
                    toast.success(res.data.message);
                }
                dispatch(setUsers(res.data.user));
                localStorage.setItem('user', JSON.stringify(res.data.user));
                navigate("/browse");
            } catch (error) {
                toast.error(error.response.data.message);
                console.log(error)
            } finally {
                dispatch(setLoading(false));
            }
        } else {
            const user = { fullname: userName, email, password };
            try {
                const res = await axios.post(`${API_END_POINTS}/register`, user, {
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    withCredentials: true
                });
                console.log("******************", res.data.message);
                if (res.data.success) {
                    toast.success(res.data.message);
                }
                setIsLogin(true);

            } catch (error) {
                toast.error(error.response.data.message)
                console.log()
            } finally {
                dispatch(setLoading(false));
            }
        }

        setUserName("");
        setEmail("");
        setPassword("");
    }



    return (
        <div className='relative w-full h-screen'>
            <Header />
            <div className='z-10  top-0 left-0 '>
                <img className='w-[100vw] h-screen object-cover' src="bg.webp" alt="" />
            </div>

            
            <form
                onSubmit={getInputData}
                className='z-30 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[40%] xl:w-[25%]  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md bg-black bg-opacity-90 text-white p-6 sm:p-8 md:p-10'
            >
                <div className='flex flex-col gap-6 xl:gap-10'>
                    <h1 className='text-2xl sm:text-3xl text-center font-bold'>
                        {isLogin ? "SignIn" : "SignUp"}
                    </h1>

                    {!isLogin && (
                        <input
                            value={userName}
                            onChange={(e) => setUserName(e.target.value)}
                            className={`outline-none ${userName.length !== 0 ? "bg-white text-black" : "bg-zinc-900"
                                } px-4 py-3 rounded font-semibold`}
                            id='fullname'
                            type='text'
                            name='fullname'
                            placeholder='User Name:'
                        />
                    )}

                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`outline-none ${email.length !== 0 ? "bg-white text-black" : "bg-zinc-900"
                            } px-4 py-3 rounded font-semibold`}
                        id='email'
                        type='email'
                        placeholder='Email:'
                    />

                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={`outline-none ${password.length !== 0 ? "bg-white text-black" : "bg-zinc-900"
                            } px-4 py-3 rounded font-semibold`}
                        name='password'
                        type='password'
                        placeholder='Password:'
                    />

                    <button className='px-4 py-3 bg-red-500 font-semibold rounded-md flex justify-center items-center'>
                        {isLoading ? (
                            <span className='h-6 w-6 block border-[3px] border-l-transparent animate-spin border-white rounded-full'></span>
                        ) : isLogin ? (
                            "SignIn"
                        ) : (
                            "SignUp"
                        )}
                    </button>

                    <p className='text-sm sm:text-base text-center'>
                        {isLogin ? "New to Netflix?" : "Already have an account?"}
                        <span
                            onClick={loginHandler}
                            className='text-blue-500 ml-1 cursor-pointer underline'
                        >
                            {isLogin ? "SignUp" : "SignIn"}
                        </span>
                    </p>
                </div>
            </form>

        </div>
    )
}

export default Login