import React, { useState } from 'react'
import AnggotaService from '../services/AnggotaService'
import { useNavigate } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CreateAnggotaComponent = () => {
    const [profile, setProfile] = useState('')
    const [nik, setNik] = useState('')
    const [nama, setNama] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('Male')
    const [pekerjaan, setPekerjaan] = useState('A')
    const [golonganDarah, setGolonganDarah] = useState('')
    const [tempatLahir, setTempatLahir] = useState('')
    const [tanggalLahir, setTanggalLahir] = useState('')
    const [alamat, setAlamat] = useState('')
    const [ktp, setKtp] = useState('')
    const [multipleProgress, setMultipleProgress] = useState(0)
    const [isLoading, setIsLoading] = useState(false)
    const history = useNavigate();

    const mulitpleFileOptions = {
        onUploadProgress: (progressEvent) => {
            const { loaded, total } = progressEvent;
            const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
            setMultipleProgress(percentage);
        }
    }

    const save = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        console.log(profile)
        console.log(nik)
        console.log(nama)
        console.log(jenisKelamin)
        console.log(ktp)

        const formData = new FormData();
        formData.append('files', profile);
        formData.append('nik', nik)
        formData.append('nama', nama)
        formData.append('jenis_kelamin', jenisKelamin)
        formData.append('files', ktp);
        console.log(formData)

        // try {
        //     await AnggotaService.createUser(formData, mulitpleFileOptions)
        //     history('/users')
        // } catch (e) {
        //     alert(e)
        // }
    }
    return (<>
        <section id="create" className="d-flex align-items-center">
            <div class="mx-auto">
                {(() => {
                    if (!isLoading) {
                        return <form class="well form-horizontal" action=" " method="post" id="contact_form">
                            <fieldset>

                                <legend><center><h2><b>Pendaftaran Anggota</b></h2></center></legend><br />

                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="form-group mt-2">
                                            <label className="control-label">NIK</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setNik(e.target.value)} className="form-control" type="number"
                                                        placeholder="Masukkan NIK" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label className="control-label">Nama</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setNama(e.target.value)} className="form-control" type="text"
                                                        placeholder="Masukkan Nama" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label class="control-label">Jenis Kelamin</label>
                                            <div class="selectContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-list"></i></span>
                                                    <select class="form-select" onChange={(e) => setJenisKelamin(e.target.value)}>
                                                        <option value='Male' label='Male'></option>
                                                        <option value='Female' label='Female'></option>
                                                        <option value='Other' label='Other'></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label class="control-label">Pekerjaan</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span>
                                                    <input onChange={(e) => setPekerjaan(e.target.value)} className="form-control" type="text"
                                                        placeholder="Masukkan Pekerjaan" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label class="control-label" >Golongan Darah</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <select class="form-select" onChange={(e) => setGolonganDarah(e.target.value)}>
                                                        <option value='A' label='A'></option>
                                                        <option value='B' label='B'></option>
                                                        <option value='AB' label='AB'></option>
                                                        <option value='O' label='O'></option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                    <div className="col-lg-6">
                                        <div class="form-group mt-2">
                                            <label class="control-label">Tempat Lahir</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setTempatLahir(e.target.value)} className="form-control" type="text"
                                                        placeholder="Masukkan Tempat Lahir" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label class="control-label">Tanggal Lahir</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setTempatLahir(e.target.value)} className="form-control" type="date"
                                                        placeholder="Masukkan Tanggal Lahir" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label class="control-label">Alamat</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setAlamat(e.target.value)} className="form-control" type="text"
                                                        placeholder="Masukkan Alamat" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label class="control-label" >Foto KTP</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setKtp(e.target.files[0])} className="form-control" type="file" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="form-group mt-2">
                                            <label className="control-label">Foto Profile</label>
                                            <div class="inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                                    <input onChange={(e) => setProfile(e.target.files[0])} className="form-control" type="file" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-success mt-3" >SUBMIT</button>

                            </fieldset>
                        </form>
                    } else {
                        return <div className="columns is-mobile is-multiline is-centered m-6">
                            <div style={{ width: 200, height: 200 }}>
                                <CircularProgressbar
                                    value={multipleProgress}
                                    text={`${multipleProgress}%`}
                                    styles={buildStyles({
                                        rotation: 0.25,
                                        strokeLinecap: 'butt',
                                        textSize: '16px',
                                        pathTransitionDuration: 0.5,
                                        pathColor: `rgba(255, 136, 136, ${multipleProgress / 100})`,
                                        textColor: '#f88',
                                        trailColor: '#d6d6d6',
                                        backgroundColor: '#3e98c7',
                                    })}
                                />
                                <div class="progress-bar1" data-percent="60" data-duration="1000" data-color="#ccc,yellow"></div>
                            </div>
                        </div>
                    }
                })()}
            </div>
        </section>
    </>
    )
}

export default CreateAnggotaComponent