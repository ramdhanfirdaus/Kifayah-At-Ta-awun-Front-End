import React, { useEffect, useState } from 'react'
import { MDBDataTable } from 'mdbreact';
import AnggotaService from '../services/AnggotaService';
import PendaftaranService from '../services/PendaftaranService';

const DaftarAnggotaComponent = () => {
    const [data, setData] = useState({})
    const [judul, setJudul] = useState('')
    const [anggota, setAnggota] = useState([])
    const [anggotaData, setDataAnggota] = useState([])
    const [pendaftaran, setPendaftaran] = useState([])
    const [pendaftaranData, setPendaftaranData] = useState([])
    const [err, serErr] = useState(null)

    useEffect(() => {
        const getApi = async () => {
            AnggotaService.getAnggota().then((res) => {
                setAnggota(res.data)
            }).catch((e) => {
                serErr(e)
            })

            PendaftaranService.getPendaftaran().then((res) => {
                setPendaftaran(res.data)
            }).catch((e) => {
                serErr(e)
            })
        }

        getApi()
    }, []);

    useEffect(() => {
        const arrayData = []
        anggota.forEach((element, i) => {
            console.log(element)
            let jsonData = {
                nomor_anggota: element.nomor_anggota,
                nik: element.nik,
                nama: element.nama,
                status: element.status,
                action: <button to='/view' className='btn btn-success btn-sm'>Detail</button>
            }
            arrayData.push(jsonData)
        })
        setDataAnggota(arrayData)
    }, [anggota]);

    useEffect(() => {
        const arrayData = []
        pendaftaran.forEach((element, i) => {
            let jsonData = {
                nomor_anggota: element.nomor_anggota,
                jumlah_anggota: element.jumlah_anggota,
                nama_pemohon: element.nama_pemohon,
                action: <button to='/view' className='btn btn-success btn-sm'>Detail</button>
            }
            arrayData.push(jsonData)
        })
        setJudul("Daftar Pendaftaran")
        setPendaftaranData(arrayData)
        setData({
            columns: [
                {
                    label: 'Nomor Anggota',
                    field: 'nomor_anggota',
                    sort: 'asc',
                },
                {
                    label: 'Nama Pemohon',
                    field: 'nama_pemohon',
                    sort: 'asc',
                },
                {
                    label: 'Jumlah Anggota',
                    field: 'jumlah_anggota',
                    sort: 'asc',
                },
                {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc',
                }
            ],
            rows: arrayData
        })
    }, [pendaftaran]);

    const setDataToPendaftaran = () => {
        setJudul("Daftar Pendaftaran")
        setData({
            columns: [
                {
                    label: 'Nomor Pendaftaran',
                    field: 'nomor_anggota',
                    sort: 'asc',
                },
                {
                    label: 'Nama Pemohon',
                    field: 'nama_pemohon',
                    sort: 'asc',
                },
                {
                    label: 'Jumlah Anggota',
                    field: 'jumlah_anggota',
                    sort: 'asc',
                },
                {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc',
                }
            ],
            rows: pendaftaranData
        })
    }

    const setDataToAnggota = () => {
        setJudul("Daftar Anggota")
        setData({
            columns: [
                {
                    label: 'Nomor Pendaftaran',
                    field: 'nomor_anggota',
                    sort: 'asc',
                },
                {
                    label: 'NIK',
                    field: 'nik',
                    sort: 'asc',
                },
                {
                    label: 'Nama',
                    field: 'nama',
                    sort: 'asc',
                },
                {
                    label: 'Status',
                    field: 'status',
                    sort: 'asc',
                },
                {
                    label: 'Action',
                    field: 'action',
                    sort: 'asc',
                }
            ],
            rows: anggotaData
        })
    }

    return (<>
        <section id="select" className="d-flex align-items-center">
            <div className="mx-auto">
                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        {(() => {
                            if (judul === "Daftar Pendaftaran") {
                                return <li class="page-item">
                                    <button class="page-link selected" onClick={setDataToPendaftaran}>Daftar Pendaftaran</button>
                                </li>
                            } else {
                                return <li class="page-item">
                                    <button class="page-link" onClick={setDataToPendaftaran}>Daftar Pendaftaran</button>
                                </li>
                            }
                        })()}

                        {(() => {
                            if (judul === "Daftar Anggota") {
                                return <li class="page-item">
                                    <button class="page-link selected" onClick={setDataToAnggota}>Daftar Anggota</button>
                                </li>
                            } else {
                                return <li class="page-item">
                                    <button class="page-link" onClick={setDataToAnggota}>Daftar Anggota</button>
                                </li>
                            }
                        })()}
                    </ul>
                </nav>
            </div>
        </section>
        <section id="anggota" className="d-flex align-items-center">
            <div className="mx-auto">
                <h1 className="font-bold text-3xl m-5 text-center">{judul}</h1>
                <div className="flex flex-col gap-4">
                    <MDBDataTable
                        striped
                        bordered
                        small
                        data={data}
                    />
                </div>
            </div>
        </section>
    </>
    )
}

export default DaftarAnggotaComponent