import React, { useEffect, useState } from 'react'
import Select from 'react-select';
import PembayaranService from '../services/PembayaranService';
import { MDBDataTable } from 'mdbreact';

const PembayaranComponent = () => {
    const [laporan, setLaporan] = useState([])
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const month = [
        { value: 'Januari', label: 'Januari' },
        { value: 'Februari', label: 'Februari' },
        { value: 'Maret', label: 'Maret' },
        { value: 'April', label: 'April' },
        { value: 'Mei', label: 'Mei' },
        { value: 'Juni', label: 'Juni' },
        { value: 'Juli', label: 'Juli' },
        { value: 'Agustus', label: 'Agustus' },
        { value: 'September', label: 'September' },
        { value: 'Oktober', label: 'Oktober' },
        { value: 'November', label: 'November' },
        { value: 'Desember', label: 'Desember' },
    ];
    const [err, serErr] = useState(null)
    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            columns: [
                {
                    label: 'Bulan',
                    field: 'bulan',
                    sort: 'asc',
                },
                {
                    label: 'Tahun',
                    field: 'tahun',
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
                }
            ],
            rows: laporan
        })
    }, [laporan]);

    async function getAllLaporan() {
        if (selectedMonth !== '' && selectedYear !== '') {
            await PembayaranService.getPembayaranByBulanTahun(selectedMonth.value, selectedYear)
                .then((res) => {
                    setLaporan(res.data)
                }).catch((error) => {
                    serErr(error)
                });
        } else {
            setLaporan([])
        }
    }

    return (<>
        <section id="pembayaran" className="d-flex align-items-center">
            <div className="mx-auto">

                <div className="form-group">
                    <label className="" htmlFor="tahun"> Tahun :  </label>
                    <input
                        type="text"
                        className="form-control"
                        id="formGroupExampleInput"
                        onChange={(e) => setSelectedYear(e.target.value)}
                    />
                    <label className="" htmlFor="bulan"> Bulan :  </label>
                    <Select
                        defaultValue={selectedMonth}
                        onChange={setSelectedMonth}
                        options={month}
                        className="w-1/2"
                    />
                </div>
                    <div className="mt-3">
                        <button onClick={getAllLaporan}
                            className="lihat-laporan">
                            Lihat Laporan
                        </button>
                    </div>
                <h1 className="font-bold text-3xl m-5 text-center">Laporan Pembayaran</h1>
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

export default PembayaranComponent