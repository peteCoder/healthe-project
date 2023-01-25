import React, { useState } from 'react'
import {Link } from 'react-router-dom'
import { useAuthContext } from '../context/UserContext';

const Login = () => {

  const {register, error, loginWithGoogle} = useAuthContext();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignIn = async (e) => {
    e.preventDefault()
    await register(email, password)
  }

  const loginInWithGoogle = async (e) => {
    e.preventDefault()
    await loginWithGoogle()


  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
            <div className="flex justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-20 h-20 text-blue-600" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path
                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            </div>
            <h3 className="text-2xl font-bold text-center">Join us</h3>
            <form action="">
                <div className="mt-4">
                    
                    <div className="mt-4">
                        <label className="block" htmlFor="email">Email</label>
                                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password" className="block">Password</label>
                                <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                    </div>
                    {error && (
                      <span className="text-xs text-red-400">{error?.errorMessage}</span>
                    )}
                    
                    <div className="flex">
                        <button onClick={handleSignIn} className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">Create
                            Account</button>
                    </div>
                    <div className="flex">
                        <button onClick={loginInWithGoogle} className="w-full px-6 py-2 mt-4 text-white bg-red-600 rounded-lg hover:bg-blue-900">Google</button>
                    </div>
                    
                    <div className="mt-6 text-grey-dark">
                        Already have an account?
                        <Link className="text-blue-600 hover:underline" to="/login">
                            Log in
                        </Link>
                        
                    </div>
                </div>
            </form>
        </div>
    </div>

  )
}

export default Login