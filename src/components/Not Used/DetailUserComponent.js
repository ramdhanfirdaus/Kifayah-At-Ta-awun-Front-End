import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import AnggotaService from '../../services/AnggotaService'

const DetailUserComponent = () => {
  const [user, setUser] = useState(null)
  const [err, serErr] = useState(null)
  const { nik } = useParams()
  const history = useNavigate();

  useEffect(() => {
    AnggotaService.getUserByNIK(nik).then((res) => {
      console.log(res.data)
      setUser(res.data)
    }).catch((error) => {
      serErr(error)
    });
  }, [nik]);

  let url = 'http://localhost:5000/';

  return (<>
    {(() => {
      if (user !== null) {
        return <>
          <div className="">
            <div className="">
              <h1 className="">Profile</h1>
              <div style={{ width: 300 }}>
                <img className="" src={url + `${user.foto_profile.filePath}`} alt="Extra large avatar"></img>
              </div>
              <div className="">
                <label className="" htmlFor="email"> NIK </label>
                <input readOnly
                  type="text"
                  name="email"
                  value={user.nik}
                />
                <label className="" htmlFor="nama"> Nama </label>
                <input readOnly
                  type="text"
                  name="email"
                  value={user.nama}
                />
                <label className="" htmlFor="jenis_kelamin"> Jenis Kelamin </label>
                <input readOnly
                  type="text"
                  name="email"
                  value={user.jenis_kelamin}
                />
                <div style={{ width: 300 }}>
                  <label className="" htmlFor="ktp"> KTP </label>
                  <img src={url + `${user.foto_ktp.filePath}`} alt="Extra large avatar"></img>
                </div>
                <button
                  className="transition ease-in-out delay-150 mx-72 text-blue-700 hover:-translate-y-1 hover:scale-110 hover:text-white border border-blue-700 hover:bg-blue-800 duration-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 text-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-blue-800"
                  onClick={(e) => history(-1)}>
                  Back
                </button>
              </div>
            </div>
          </div>

          <table className='table is-fullwidth mt-5'>
            <thead>
              <tr>
                <th colSpan="4" className="has-text-centered">Identitas Pengguna</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
              </tr>
              <tr>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
                <td className="has-text-centered">
                  <div className="">
                    {user.nik}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </>
      }
    })()}
  </>
  )
}

export default DetailUserComponent