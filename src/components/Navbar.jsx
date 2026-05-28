import {Link} from 'react-router-dom';
export default function Navbar(){
    return (<nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-blue-600">MXH Dev</Link>

        <div classname="flex gap-4">
            <Link to="/" className="hover:tẽt-blue-500 font-medium">Trang chủ</Link>
            <Link to="/login" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Đăng nhập</Link>

        </div>
    
    </nav>);
}