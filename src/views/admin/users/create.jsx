//import useState dan useEffect
import { useState } from 'react';

//import SidebarMenu

//import useNavigate
import { useNavigate } from 'react-router-dom';

//import js cookie
import Cookies from 'js-cookie';

//import api
import api from '../../../services/api';
import SidebarMenu from '../../../components/SidebarMenu';

//get token from cookies
const token = Cookies.get('token');

export default function UsersCreate() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState([]);

    const storeUser = async (e) => {
        e.preventDefault();

        api.defaults.headers.common['Authorization'] = token;
        await api.post('/api/user', {
            name: name,
            username: username,
            password: password,
        })
            .then(() => {

                navigate('/admin/user')
            })
            .catch(error => {
                setValidation(error.response.data);
            })
    }

    return (
        <div className="container mt-5 mb-5">
            <div className="row">
                <div className="col-md-3">
                    <SidebarMenu />
                </div>
                <div className="col-md-9">
                    <div className="card border-0 rounded shadow-sm">
                        <div className="card-header">
                            ADD USER
                        </div>
                        <div className="card-body">
                            {
                                validation.errors && (
                                    <div className="alert alert-danger mt-2 pb-0">
                                        {
                                            validation.errors.map((error, index) => (
                                                <p key={index}>{error.path} : {error.msg}</p>
                                            ))
                                        }
                                    </div>
                                )
                            }
                            <form onSubmit={storeUser}>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder="Full Name" />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Username</label>
                                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control"
                                        placeholder="Email Address" />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Password</label>
                                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control"
                                        placeholder="Password" />
                                </div>

                                <button type="submit" className="btn btn-sm btn-primary">SAVE</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}