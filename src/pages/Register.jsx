import {useState} from 'react';
import {Link} from 'react-router-dom';
export default function Register(){
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        if(password !== confirmPassword){
            alert('Mật khẩu xác nhận không khớp!');
            return;
        }
        const registerData={email,confirmPassword,name};
        console.log('Dữ liệu đăng ký: ', registerData);
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h2>Đăng ký</h2>
                <div>
                    <label>Tên:</label>
                    <input type="text" placeholder="Nhập tên..."
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" placeholder="Nhập email..."
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label>Mật khẩu:</label>
                    <input type="password" placeholder="Nhập mật khẩu..."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />  

                </div>
                <div>
                    <label>Nhập lại mật khẩu:</label>
                    <input type="password" placeholder="Nhập lại mật khẩu..."
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                </div>
                <button type="submit">Đăng ký</button>
            </form>
            <p>
                Bạn đã có tài khoản? <Link to='/login'>Đăng nhập</Link>
            </p>
        </div>
    );
}