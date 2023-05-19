import { useEffect, useState, useRef, Fragment } from 'react';
import { getUserService } from '../../apiService/UserService';
import { FaTrash } from 'react-icons/fa';
import { MdPersonAdd } from 'react-icons/md';
import { AiFillSetting } from 'react-icons/ai';
import Alert from '../../components/Alert/Alert';
import '../../assets/css/AdminPage.css';
import { deleteUserService } from '../../apiService/UserService';
import { successToast, errorToast } from '../../components/Toast/Toast';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateUserService, insertUserService } from '../../apiService/UserService';

function AdminPage() {
    const [user, setUser] = useState([]);
    const [show, setShow] = useState(false);
    const idUserRef = useRef();
    const [dialog, setDialog] = useState(false);

    const [id, setID] = useState();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('');
    const [action, setAction] = useState('');

    const fetchAPI = async () => {
        const res = await getUserService();
        setUser(res.dataUser);
    };

    useEffect(() => {
        fetchAPI();
    }, []);

    const setState = (item) => {
        setShow(true);
        setID(item.Id);
        setUsername(item.username);
        setEmail(item.email);
        setPhone(item.phone);
        setPassword(item.password);
        setRole(item.role);
        setAction('update');
    };

    const setNull = () => {
        setUsername('');
        setEmail('');
        setPhone('');
        setPassword('');
        setRole('');
    };

    const validate = () => {
        if (username === '') {
            errorToast('Username cannot be required');
            return false;
        }
        if (password === '') {
            errorToast('Password cannot be required');
            return false;
        }
        if (email === '') {
            errorToast('Email cannot be required');
            return false;
        }
        if (phone === '') {
            errorToast('Phone cannot be required');
            return false;
        }
        if (role === '') {
            errorToast('Role cannot be required');
            return false;
        }
        return true;
    };

    const handleUpdate = async () => {
        if (validate()) {
            const updateInfo = {
                id,
                username,
                password,
                email,
                phone,
                role,
            };
            const res = await updateUserService(updateInfo);
            if (res.result) {
                setNull();
                setShow(false);
                fetchAPI();
                successToast(res.message);
            } else {
                errorToast(res.message);
            }
        }
    };

    const handleInsert = async () => {
        if (validate()) {
            const insertInfo = {
                username,
                password,
                email,
                phone,
                role,
            };
            const res = await insertUserService(insertInfo);
            if (res.result) {
                setNull();
                setShow(false);
                fetchAPI();
                successToast(res.message);
            } else {
                errorToast(res.message);
            }
        }
    };

    const handleDialog = (loading) => {
        setDialog(loading);
    };

    const handleDelete = (id) => {
        handleDialog(true);
        idUserRef.current = id;
    };

    const confirmDelete = async (choose) => {
        if (choose) {
            const res = await deleteUserService(idUserRef.current);
            if (res.result === true) {
                fetchAPI();
                successToast(res.message);
            }
            handleDialog(false);
        } else {
            handleDialog(false);
            console.log('cancel');
        }
    };

    return (
        <Fragment>
            <ToastContainer limit={3} />
            {dialog && <Alert onDialog={confirmDelete} />}
            <div className="text-white px-6 bg-[#1a1a1a;] w-full min-h-[calc(100vh-60px)] lg:ml-[250px] mt-[60px]">
                <div className="flex justify-between items-center border border-[#555555] border-b-[1.4px] border-t-0 border-l-0 border-r-0 ">
                    <p className="setting-content-info-title">Accounts List</p>
                    <MdPersonAdd
                        onClick={() => {
                            setShow(true);
                            setAction('add');
                            setNull();
                        }}
                        className="text-green-500 text-3xl cursor-pointer hover:text-4xl ease-in-out duration-300 mr-3"
                    />
                </div>
                <div className=" mb-10 mt-4" style={show ? { display: 'block' } : { display: 'none' }}>
                    <div className="admin-add-container">
                        <span>Username: </span>
                        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} />
                    </div>
                    <div className="admin-add-container">
                        <span>Password: </span>
                        <input type="text" onChange={(e) => setPassword(e.target.value)} value={password} />
                    </div>
                    <div className="admin-add-container">
                        <span>Email: </span>
                        <input type="text" onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <div className="admin-add-container">
                        <span>Phone: </span>
                        <input type="text" onChange={(e) => setPhone(e.target.value)} value={phone} />
                    </div>
                    <div className="admin-add-container">
                        <span>Role: </span>
                        <input type="text" onChange={(e) => setRole(e.target.value)} value={role} />
                    </div>
                    <div>
                        <button
                            onClick={() => handleUpdate()}
                            style={action === 'update' ? { display: 'inline-block' } : { display: 'none' }}
                            className="bg-blue-600 leading-[32px] text-[18px] px-3  mr-4 hover:bg-blue-700 ease-in-out duration-300"
                        >
                            Update
                        </button>
                        <button
                            onClick={() => handleInsert()}
                            style={action === 'add' ? { display: 'inline-block' } : { display: 'none' }}
                            className="bg-blue-600 leading-[32px] text-[18px] px-3  mr-4 hover:bg-blue-700 ease-in-out duration-300"
                        >
                            Add
                        </button>
                        <button
                            onClick={() => setShow(false)}
                            className="leading-[32px] text-[18px] px-3 border mr-4 ease-in-out duration-300  hover:bg-red-600 hover:border-red-600"
                        >
                            Close
                        </button>
                    </div>
                </div>
                <table className="w-full">
                    <tbody>
                        <tr className="leading-10">
                            <th className="text-left w-[30px]">ID</th>
                            <th className="w-[120px]">Username</th>
                            <th className="w-[140px]">Password</th>
                            <th className="w-[200px]">Email</th>
                            <th className="w-[120px]">Phone</th>
                            <th className="w-[100px]">Role</th>
                            <th className="">Action</th>
                        </tr>
                        {user.map((item) => {
                            return (
                                <tr key={item.Id} className="leading-10 text-[#96989c]">
                                    <th className="text-left">{item.Id}</th>
                                    <th>{item.username}</th>
                                    <th>{item.password}</th>
                                    <th>{item.email}</th>
                                    <th>{item.phone}</th>
                                    <th>{item.role}</th>
                                    <th className="relative w-[20px]">
                                        <button
                                            className="absolute top-0 bottom-0 left-0"
                                            onClick={() => setState(item)}
                                        >
                                            <AiFillSetting className="text-blue-500  cursor-pointer hover:text-2xl ease-in-out duration-300" />
                                        </button>
                                        <button
                                            className="absolute top-0 bottom-0 right-0"
                                            onClick={() => handleDelete(item.Id)}
                                        >
                                            <FaTrash className="text-orange-500 cursor-pointer hover:text-2xl ease-in-out duration-300" />
                                        </button>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Fragment>
    );
}

export default AdminPage;
