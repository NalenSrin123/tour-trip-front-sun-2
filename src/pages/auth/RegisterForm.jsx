import React, { useState } from 'react'
import {Mail, Search, User, Lock, ArrowBigRight} from "lucide-react";

export const RegisterForm = () => {
  
  const [name, setname] = useState("");
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [error, seterror] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault();
      if(!name) {
        seterror("Name is required");
        return;
      }  
      if(!email){
        seterror("Email is required");
        return;
      } 
      if(!password){
        seterror("Password is required");
        return;
      } 
      console.log({
        name, email, password
      });

      seterror("");

  }

  return (
    <div className='min-h-screen w-full bg-gray-50 flex justify-center items-center'>
        <div className='w-full bg-white border rounded-2xl border-gray-200  max-w-md shadow-sm p-8'>
          <div className='flex flex-col  items-center mb-8  '>
              <div className='w-14 h-14 bg-blue-600 rounded-2xl mb-5 shadow-sm flex justify-center items-center'>
                <Search className="w-7 h-7 text-white" strokeWidth={2.5}  />
              </div>
              <h1 className='text-2xl font-bold text-gray-900 tracking-tight'>TravelAdmin</h1>
              <p className='text-sm text-gray-500 mt-1'>Management System</p>
          </div>
          <h1 className='text-xl font-bold text-gray-900'>Create Acount</h1>
          <p className='text-sm text-gray-500 mt-1 mb-6'>Enter your information for create account.</p>

          <form action=""  onSubmit={handleSubmit} className="space-y-5">
            {/* Name */}
            <div>
              <label htmlFor="name" className='block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2'>
                Username
              </label>
              <div className='relative'>
                <User className='absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400'/>
                <input type="text" name='name' id='name' className='w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition' 
                placeholder='name' onChange={(e) => setname(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}
            </div>
            {/* Email */}
            <div>
              <label htmlFor="email" className='block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2'>
                Email Address
              </label>
              <div className='relative'>
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="email" name='email' id='email' className='w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition' 
                  placeholder='saray@gmail.com'
                  onChange={(e) => setemail(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}
            </div>
            {/* Password */}
            <div>
              <label htmlFor="password" className='block text-xs font-semibold tracking-wide text-gray-700 uppercase mb-2'>
                Password
              </label>
              <div className='relative'>
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input type="password" name='password' id='password' className='w-full pl-10 pr-3 py-2.5 rounded-lg border border-gray-300 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition' 
                  placeholder='••••••••'
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
              {error && (
                <p className="text-sm text-red-500">
                  {error}
                </p>
              )}
            </div>
            <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800 text-white font-semibold text-sm py-3 rounded-lg transition shadow-sm"
           
          >
            Register
            <ArrowBigRight className="w-4 h-4"/>
          </button>
          </form>
          <p className="text-xs text-gray-400 mt-6">
            © 2024 TravelAdmin. All rights reserved.
        </p>
        </div>
        
        
    </div>
  )
}
