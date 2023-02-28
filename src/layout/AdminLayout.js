import AdminNavbar from '../components/AdminComponents/AdminNavbar/AdminNavbar';
import Controller from '../components/AdminComponents/Controller/Controller';
function AdminLayout({ children }) {
    return (
        <div className='bg-[#181818] h-[100%] w-[100%] '>
            <AdminNavbar />
            <div className='flex'>
                <Controller />
                {children}
            </div>
        </div>
    );
}

export default AdminLayout;
