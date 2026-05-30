import {useState} from 'react';

export default function Login(){
    const [email,setEmail] =useState('');
    const [password,setPassword]= useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();

        const loginData={email,password};
        console.log("Dữ liệu gửi lên API là: ",loginData); 
    }
    return (
<div className="flex justify-center items-center h-[calc(100vh-70px)]">
    <form onSubmit={handleSubmit}
    className='bg-white p-8 rounded-lg shadow-md w-96'>
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Đăng nhập</h2>
        <div>
            <label className="block text-gray-700 font-medium mb-2">Email:</label>
            <input type="email" 
            className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500"
            placeholder='Nhập email...'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
            />

        </div>
        <div>
            <label className='block text-gray-700 font-medium mb-2'>Mật khẩu:</label>
            <input type="password" placeholder='Nhập mật khẩu...'
            className='w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-500'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            required
            />
        </div>
        <button type='submit' className='w-full bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700 transition'>Đăng nhập</button>
    </form>
</div>
    );
}