import React, { useState } from 'react'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const CreateUserComponent = () => {
    const [profile, setProfile] = useState('')
    const [nik, setNik] = useState('')
    const [nama, setNama] = useState('')
    const [jenisKelamin, setJenisKelamin] = useState('Male')
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

        try {
            await UserService.createUser(formData, mulitpleFileOptions)
            history('/users')
        } catch (e) {
            alert(e)
        }
    }

    return (<div className="container box mt-5 column is-four-fifths">
        <h1 className="title has-text-centered mt-5">
            Add User
        </h1>
        {(() => {
            if (!isLoading) {
                return <form action="" className="m-5">
                    <div className="field">
                        <label className="label">Foto Profile</label>
                        <div className="control">
                            <input onChange={(e) => setProfile(e.target.files[0])} className="input" type="file"
                                placeholder="Enter your NIK" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">NIK</label>
                        <div className="control">
                            <input onChange={(e) => setNik(e.target.value)} className="input" type="number"
                                placeholder="Enter your NIK" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Name</label>
                        <div className="control">
                            <input onChange={(e) => setNama(e.target.value)} className="input" type="text"
                                placeholder="Enter your name" />
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">
                            Jenis Kelamin
                        </label>
                        <div className="control">
                            <div className="select">
                                <select onChange={(e) => setJenisKelamin(e.target.value)}>
                                    <option value='Male' label='Male'></option>
                                    <option value='Female' label='Female'></option>
                                    <option value='Other' label='Other'></option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="field">
                        <label className="label">Foto KTP</label>
                        <div className="control">
                            <input onChange={(e) => setKtp(e.target.files[0])} className="input" type="file"
                                placeholder="Enter your NIK" />
                        </div>
                    </div>

                    <div className="field is-grouped">
                        <div className="control">
                            <button className="button is-success" onClick={(e) => save(e)}>
                                Add
                            </button>
                        </div>
                        <div className="control">
                            <button className="button is-link is-light" onClick={() => history('/users')}>
                                Cancel
                            </button>
                        </div>
                    </div>
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
    </div >
    )
}

export default CreateUserComponent