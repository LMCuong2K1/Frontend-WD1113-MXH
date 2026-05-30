import {Link} from 'react-router-dom';
export default function Navbar(){
    return (<nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">MXH Dev</Link>

        <div className="flex gap-4">
            <Link to="/" className="hover:text-blue-500 font-medium">Trang chủ</Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Đăng nhập</Link>
            <Link to="/register" className="hover:text-blue-500 font-medium">Đăng ký</Link>
        </div>
    
    </nav>);
}