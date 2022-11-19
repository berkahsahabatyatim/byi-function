import React from "react";
import logo from "../lagacy/assets/img/logobyi.png"
// import { Link } from "react-router-dom"
import { HashLink as Link } from 'react-router-hash-link';
import { profile } from "../about/Profile"
import { visiMisi } from "../about/Vision"
import { pengurus } from "../about/Pengurus"
import { legalitas } from "../about/Legalitas"
import { program } from "../program/Program"

function Header() {
    const root = "/"

    const album = "/album.html#album"
    
    const donasi = "/donasi.html#donate"
    const kegiatan = "/kegiatan-byi.html#activity"
    const contact = "#contact"

    const article1 = "/artikel/manfaat-sedekah.html#main-content"
    const article2 = "/artikel/wakaf.html#main-content"
    const article3 = "/artikel/zakat.html#main-content"
    const article4 = "/artikel/penerima-zakat.html#main-content"
    const article5 = "/artikel/qurban.html#main-content"
    return (<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
            <Link className="navbar-brand js-scroll-trigger" to={root}>
                <img className="navbar-brand js-scroll-trigger" src={logo} width="50" height="53" alt="logo" />
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" to={root}>Home</Link></li>
                    <li className="dropdown mr-3">
                        <div className="nav-item">
                            <div className="nav-link js-scroll-trigger">Tentang Kami</div>
                            <div className="dropdown-content bg-dark">
                                <Link to={profile + "#profil"}> Profil Yayasan BYI </Link>
                                <Link to={visiMisi + "#profil"}>Visi Misi</Link>
                                <Link to={pengurus + "#legal"}>Kepengurusan</Link>
                                <Link to={legalitas + "#legal"}>Legalitas</Link>
                            </div>
                        </div>
                    </li>
                    {/* TODO dokumentasi */}
                    <li className="nav-item"><div className="nav-link js-scroll-trigger" href={album}>Dokumentasi</div></li>
                    <li className="dropdown mr-3">
                        <div className="nav-item">
                            <div className="nav-link js-scroll-trigger" href={root}>Program Kerja</div>
                            <div className="dropdown-content bg-dark">
                                <Link to={program("pondok")}>Pendidikan dan Pembinaan Pondok Tahfidz Yatim & Dhuafa</Link>
                                <Link to={program("pondok")}>Pembangunan dan Pembinaan Kampung Tauhid</Link>
                                <Link to={program("beasiswa")}>Beasiswa Pendidikan Formal untuk Yatim & Dhuafa</Link>
                                <Link to={program("lahan")}>Pembebasan Lahan untuk Pondok Tahfidz Yatim & Dhuafa</Link>
                                <Link to={program("masjid")}>Pembangunan Masjid</Link>
                                <Link to={program("pondok")}>Pembangunan Pondok Tahfidz Yatim & Dhuafa</Link>
                                <Link to={program("ekonomi")}>Pemberdayaan Ekonomi Masyarakat</Link>
                                <Link to={program("santripreneur")}>Kafalah Du\'at</Link>
                                <Link to={program("bantuan-bencana")}>Bantuan Kemanusiaan</Link>
                                <Link to={program("santripreneur")}>Pembinaan Pemuda Berdaya</Link>
                                <Link to={program("santripreneur")}>Pengelolaan Wakaf Produktif</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={donasi}>Donasi</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={kegiatan}>Kegiatan</a></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={contact}>Hubungi Kami</a></li>
                    <li className="dropdown">
                        <div className="nav-item">
                            <a className="nav-link js-scroll-trigger" href={root}>Artikel</a>
                            <div className="dropdown-content bg-dark">
                                <a href={article1}>Manfaat Sedekah</a>
                                <a href={article2}>Keutamaan, Rukun & Syarat Wakaf</a>
                                <a href={article3}>Syarat Wajib Zakat & Cara Menunaikannya</a>
                                <a href={article4}>8 Golongan yang Berhak Menerima Zakat</a>
                                <a href={article5}>13 Tips Memilih Hewan untuk Kurban</a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header