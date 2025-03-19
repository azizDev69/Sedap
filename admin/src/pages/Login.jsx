import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/authSlice';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  console.log(formData);

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSumbmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');





    try {
      const response = await axios.post('https://abdulaziz-test.onrender.com/api/auth/login', formData)
      console.log(response)

      if (response.status !== 200) {
        throw Error('Account not found')
      }

      console.log(response)
      dispatch(login(response.data))
      toast.success('Login successully')
      navigate('/')
    } catch (error) {
      console.error('Login xato bich!', error);
      setMessage('Nmadir notogri bich!')
      toast.error('Login failed', error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className='flex gap-3'>
      <img className='h-screen max-w-[70%] rounded-r-4xl' src="https://t4.ftcdn.net/jpg/10/02/26/95/360_F_1002269509_CxzaEMTWOJqMcI8bcKO1KOEEuviJrZWA.jpg" alt="" />
      <div className='flex max-w-[30%] mx-auto h-screen flex-col items-center justify-center p-2 flex-1 gap-3'>
        <h2 className='font-bold text-[20px] text-start'>Get started now</h2>
        <form onSubmit={handleSumbmit} className='flex flex-col w-full'>
          <p className='font-medium text-[text-16px] pb-3'>Email</p>
          <input
            className="input validator w-full outline outline-primary border-nonecdd"
            type="email"
            required placeholder="Email"
            name='email'
            onChange={handleChange}
            value={formData.email}
          />
          <p className='font-medium text-[text-16px] pt-5 pb-3'>Password</p>
          <input type="password"
            className="input validator w-full outline outline-primary border-none"
            required placeholder="Password"
            minLength="8"
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
            title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
            onChange={handleChange}
            name='password'
            value={formData.password}
          />
          <button className='btn btn-primary w-full mt-8' type='sumbmit' disabled={loading}>{loading ? 'Kutib tur...' : 'Log in'}</button>
        </form>
        {message && <p className='text-center pt-[10px]'>{message}</p>}
      </div>
    </div>
  )
}

export default Login