import React, { useEffect, useState } from 'react'
import AnggotaService from '../../services/AnggotaService'
import { useNavigate } from 'react-router-dom'

const UserListComponent = () => {
  const [users, setUsers] = useState([])
  const [err, serErr] = useState(null)
  const history = useNavigate();

  useEffect(() => {
    AnggotaService.getAllUser().then((res) => {
      setUsers(res.data)
    }).catch((error) => {
      serErr(error)
    });
  }, []);

  return (<>
    {(() => {
      if (err === null) {
        if (users.length === 1 && users[0] === null) {
          return <div className="divLoader">
            <svg className="svgLoader" viewBox="0 0 100 100" width="10em" height="10em">
              <path ng-attr-d="{{config.pathCmd}}" ng-attr-fill="{{config.color}}" stroke="none" d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#51CACC" transform="rotate(179.719 50 51)"><animateTransform attributeName="transform" type="rotate" calcMode="linear" values="0 50 51;360 50 51" keyTimes="0;1" dur="1s" begin="0s" repeatCount="indefinite"></animateTransform></path>
            </svg>
          </div>
        } else {
          return <div className="columns mt-5 is-centered">
            <div className="column is-four-fifths">
              <button class="button is-success" onClick={() => history('add-user')}>Add User</button>
              <table className='table is-striped is-fullwidth is-bordered mt-5'>
                <thead>
                  <tr>
                    <th className="has-text-centered">No</th>
                    <th className="has-text-centered">NIK</th>
                    <th className="has-text-centered">Nama</th>
                    <th className="has-text-centered">Jenis Kelamin</th>
                    <th className="has-text-centered">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    if (users.length === 0) {
                      return <></>
                    } else {
                      return <>
                        {users.map((user, i) =>
                          <tr key={i}>
                            <td className="has-text-centered">
                              <div>
                                {i + 1}
                              </div>
                            </td>
                            <td className="has-text-centered">
                              <div className="">
                                {user.nik}
                              </div>
                            </td>
                            <td className="has-text-centered">
                              <div className="">
                                {user.nama}
                              </div>
                            </td>
                            <td className="has-text-centered">
                              <div className="">
                                {user.jenis_kelamin}
                              </div>
                            </td>
                            <td className="">
                              <div class="buttons is-centered">
                                <button class="button is-info is-small" onClick={() => history('detail/' + user.nik)}>Detail</button>
                              </div>
                            </td>
                          </tr>
                        )}
                      </>
                    }
                  })()}
                </tbody>
              </table>
            </div>
          </div>
        }
      }
    })()}
  </>
  )
}

export default UserListComponent