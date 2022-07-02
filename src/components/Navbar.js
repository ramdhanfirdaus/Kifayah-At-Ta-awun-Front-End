import React from 'react'

const Navbar = () => {
    return (
        <header id="header" class="fixed-top d-flex align-items-center">
            <div class="container d-flex align-items-center">
                <h1 class="logo me-auto"><a class="nav-link scrollto" href="./">At-Ta'awun</a></h1>
                <nav id="navbar" class="navbar order-last order-lg-0">
                    <ul>
                        <li><a class="nav-link scrollto" href="/">Home</a></li>
                        {/* <li><a class="nav-link scrollto" href="/about">About</a></li> */}
                        <li><a class="nav-link scrollto" href="/pembayaran">Data Pembayaran</a></li>
                        <li class="dropdown"><a class="nav-link scrollto" href="/daftar-anggota"><span>Anggota</span> <i class="bi bi-chevron-down"></i></a>
                            <ul>
                                <li><a class="nav-link scrollto" href="/tambah-anggota">Tambah Anggota</a></li>
                                <li><a class="nav-link scrollto" href="/daftar-anggota">Data Anggota</a></li>
                            </ul>
                        </li>
                        {/* <li><a class="nav-link scrollto" href="/contact">Contact</a></li> */}
                    </ul>
                    <i class="bi bi-list mobile-nav-toggle"></i>
                </nav>
            </div>
        </header>
    )
}

export default Navbar