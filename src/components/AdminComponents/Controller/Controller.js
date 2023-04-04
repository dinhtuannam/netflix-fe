import {FaUserCircle} from 'react-icons/fa'
import {Link} from 'react-router-dom'

function Controller() {
    return ( 
        <div className="bg-controller-dark-gray text-white w-[250px] max-w-[250px] min-w-[250px] h-[100vh] fixed mt-[60px] hidden lg:block">
            <ul className="py-[20px]">
                <li className="py-2 mx-auto w-[184px] cursor-pointer hover:rounded-lg border-2 border-solid border-transparent hover:border-[#323232] hover:bg-[#1a1a1a]">                
                    <Link to="/admin/accounts" className='flex justify-center items-center text-xl'>
                        <FaUserCircle className='mr-2'/>
                        <span>Accounts</span>
                    </Link>
                </li>                
            </ul>
        </div>
     );
}

export default Controller;