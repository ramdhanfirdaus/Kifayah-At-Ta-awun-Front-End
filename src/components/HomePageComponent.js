import React, { useEffect, useState } from 'react'
import WaktuService from '../services/WaktuService'
import AnggotaService from '../services/AnggotaService'

const HomePageComponent = () => {
    const [allTimes, setAllTimes] = useState([])
    const [errTimes, serErrTimes] = useState(null)
    const [allAnggota, setAllAnggota] = useState([])
    const [errAnggota, setAnggota] = useState(null)

    useEffect(() => {
        WaktuService.getWaktu().then((res) => {
            setAllTimes(res.data)
        }).catch((error) => {
            serErrTimes(error)
        });
    }, []);

    useEffect(() => {
        AnggotaService.getAnggota().then((res) => {
            setAllAnggota(res.data)
        }).catch((error) => {
            setAnggota(error)
        });
    }, []);

    const nextMonth = () => {
        console.log("a")
    }

    return (<>
        <section id="hero" className="d-flex align-items-center">
            <div className="container" data-aos="zoom-out" data-aos-delay="100">
                <div className="row">
                    <div className="col-xl-6">
                        <h1>Yayasan At-Ta'awun</h1>
                        <h2>Unit Kifayah
                            {(() => {
                                if (allTimes.length !== 0) {
                                    return <>
                                        <> - </><span onClick={nextMonth} className="">{allTimes[allTimes.length - 1].bulan} {allTimes[allTimes.length - 1].tahun}</span>
                                    </>
                                }
                            })()}
                        </h2>
                    </div>
                </div>
            </div>

        </section>

        <section id="counts" className="counts">
            <div className="container" data-aos="fade-up">
                <div className="row">

                    <div className="col-lg-3 col-md-6">
                    </div>

                    {(() => {
                        if (errAnggota === null) {
                            return <div className="col-lg-3 col-md-6">
                                <div className="count-box">
                                    <i className="bi bi-emoji-smile"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">{allAnggota.length}</span>
                                    <p>Total Anggota</p>
                                </div>
                            </div>
                        }
                    })()}

                    {(() => {
                        if (errTimes === null) {
                            return <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
                                <div className="count-box">
                                    <i className="bi bi-calendar2-week"></i>
                                    <span data-purecounter-start="0" data-purecounter-end="521" data-purecounter-duration="1" className="purecounter">{allTimes.length}</span>
                                    <p>Total Bulan</p>
                                </div>
                            </div>
                        }
                    })()}

                    <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
                    </div>

                </div>

            </div>
        </section>

        <section id="team" className="team section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Pengurus</h2>
                </div>

                <div className="row">

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="100">
                            <div className="member-img">
                                <img src="assets/img/team/team-1.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Walter White</h4>
                                <span>Chief Executive Officer</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="200">
                            <div className="member-img">
                                <img src="assets/img/team/team-2.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Sarah Jhonson</h4>
                                <span>Product Manager</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="300">
                            <div className="member-img">
                                <img src="assets/img/team/team-3.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>William Anderson</h4>
                                <span>CTO</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 d-flex align-items-stretch">
                        <div className="member" data-aos="fade-up" data-aos-delay="400">
                            <div className="member-img">
                                <img src="assets/img/team/team-4.jpg" className="img-fluid" alt="" />
                                <div className="social">
                                    <a href=""><i className="bi bi-twitter"></i></a>
                                    <a href=""><i className="bi bi-facebook"></i></a>
                                    <a href=""><i className="bi bi-instagram"></i></a>
                                    <a href=""><i className="bi bi-linkedin"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4>Amanda Jepson</h4>
                                <span>Accountant</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>Kontak</h2>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">

                    <div className="col-lg-6">

                        <div className="row">
                            <div className="col-md-12">
                                <div className="info-box">
                                    <i className="bx bx-map"></i>
                                    <h3>Alamat</h3>
                                    <p>Jl. Ketilang Raya No.39, Larangan, Kec. Harjamukti, Kota Cirebon, Jawa Barat 45141</p>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="col-lg-6">
                        <div className="row">
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bx bx-envelope"></i>
                                    <h3>Email</h3>
                                    <p>info@example.com</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="info-box">
                                    <i className="bx bx-phone-call"></i>
                                    <h3>No. Telepon</h3>
                                    <p>+1 5589 55488 55</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    </>
    )
}

export default HomePageComponent