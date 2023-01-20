import React from "react";
import Link from 'next/link';
import { profile } from "../../pages/about/profile"
import { visiMisi } from "../../pages/about/visi-misi"
import { donasi } from "../../pages/donasi"
import { pengurus } from "../../pages/about/pengurus"
import { program } from "../../pages/program/[id]"
import { article } from "../../pages/article/[id]"
import { dokum } from "../../pages/dokumentasi"
import { kegiatan } from "../../pages/kegiatan"
import { legalitas } from "../../pages/about/legal"
import { programInduk } from "../../pages/about/program"

function Header() {
    const root = "/"
    const contact = "/#contact"

    const article1 = article(1) + "#main-content"
    const article2 = article(2) + "#main-content"
    const article3 = article(3) + "#main-content"
    const article4 = article(4) + "#main-content"
    const article5 = article(5) + "#main-content"
    const logo = "/assets/img/logobyi.png"
    return (<nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
        <div className="container">
            <Link className="navbar-brand js-scroll-trigger" href={root}>
                <img className="navbar-brand js-scroll-trigger" src={logo} width="50" height="53" alt="logo" />
            </Link>
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto my-2 my-lg-0">
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={root}>Home</Link></li>
                    <li className="dropdown mr-3">
                        <div className="nav-item">
                            <div className="nav-link js-scroll-trigger">Tentang Kami</div>
                            <div className="dropdown-content bg-dark">
                                <Link href={profile + "#profil"}> Profil Yayasan BYI </Link>
                                <Link href={visiMisi + "#profil"}>Visi Misi</Link>
                                <Link href={pengurus + "#legal"}>Kepengurusan</Link>
                                <Link href={legalitas + "#legal"}>Legalitas</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={`${dokum}#album`}>Dokumentasi</Link></li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={programInduk + "#program"}>Program Kerja</Link></li>
                    <li hidden className="dropdown mr-3">
                        <div className="nav-item">
                            <div className="nav-link js-scroll-trigger" href={root}>Program Kerja</div>
                            <div className="dropdown-content bg-dark">
                                <a href={program("pondok")}>Pendidikan dan Pembinaan Pondok Tahfidz Yatim & Dhuafa</a>
                                <a href={program("pondok")}>Pembangunan dan Pembinaan Kampung Tauhid</a>
                                <a href={program("beasiswa")}>Beasiswa Pendidikan Formal untuk Yatim & Dhuafa</a>
                                <a href={program("lahan")}>Pembebasan Lahan untuk Pondok Tahfidz Yatim & Dhuafa</a>
                                <a href={program("masjid")}>Pembangunan Masjid</a>
                                <a href={program("pondok")}>Pembangunan Pondok Tahfidz Yatim & Dhuafa</a>
                                <a href={program("ekonomi")}>Pemberdayaan Ekonomi Masyarakat</a>
                                <a href={program("santripreneur")}>Kafalah Du\'at</a>
                                <a href={program("bantuan-bencana")}>Bantuan Kemanusiaan</a>
                                <a href={program("santripreneur")}>Pembinaan Pemuda Berdaya</a>
                                <a href={program("santripreneur")}>Pengelolaan Wakaf Produktif</a>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><Link className="nav-link js-scroll-trigger" href={donasi + "#donate"}>Donasi</Link></li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={`${kegiatan}#activity`}>Kegiatan</a></li>
                    <li className="dropdown">
                        <div className="nav-item">
                            <a className="nav-link js-scroll-trigger" href={root}>Artikel</a>
                            <div className="dropdown-content bg-dark">
                                <Link href={article1}>Manfaat Sedekah</Link>
                                <Link href={article2}>Keutamaan, Rukun & Syarat Wakaf</Link>
                                <Link href={article3}>Syarat Wajib Zakat & Cara Menunaikannya</Link>
                                <Link href={article4}>8 Golongan yang Berhak Menerima Zakat</Link>
                                <Link href={article5}>13 Tips Memilih Hewan untuk Kurban</Link>
                            </div>
                        </div>
                    </li>
                    <li className="nav-item"><a className="nav-link js-scroll-trigger" href={contact}>Hubungi Kami</a></li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Header