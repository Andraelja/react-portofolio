import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';
import api from '../../../services/api';
import SidebarMenu from '../../../components/SidebarMenu';

const token = Cookies.get('token');

export default function CreateSkill() {
    const navigate = useNavigate();

    const [nama, setNama] = useState('');
    const [persentase, setPersentase] = useState('');

    const storeSkill = async (e) => {
        e.preventDefault();

        api.defaults.headers.common['Authorization'] = token;
        await api.post('/api/skill', {
            nama: nama,
            persentase: persentase,
        })
            .then(() => {
                navigate('/admin/skill')
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
                    <Link to="/admin/skill" className="d-flex justify-content-end">Kembali</Link>
                        <div className="card-header">
                            ADD SKILL
                        </div>
                        <div className="card-body">
                            <form onSubmit={storeSkill}>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Nama Skill</label>
                                    <input type="text" value={nama} onChange={(e) => setNama(e.target.value)} className="form-control" placeholder="Nama Skill" />
                                </div>

                                <div className="form-group mb-3">
                                    <label className="mb-1 fw-bold">Persentase</label>
                                    <input type="number" value={persentase} onChange={(e) => setPersentase(e.target.value)} className="form-control"
                                        placeholder="Persentase" />
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