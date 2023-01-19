import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Footer from '../../../src/component/Footer'
import Masthead from '../../../src/component/Masthead'
import origin from "../../../src/constants"

export const visiMisi = "/about/visi-misi"

export default function Vision() {
    return (<div>
        <Helmet />
        <Masthead buttonLabel="Lihat Visi&Misi" target="#profil" />
        <div className="bg-light">
            <div id="profil" className="site-content mx-auto pt-5 col-lg-8 col-md-8 col-xs-8 col-10 text-center text-dark" >
                <div className="entry-content">
                    <p><strong>Visi Misi Yayasan Berkah Yatim Indonesia</strong></p>
                    <p><strong>Visi</strong></p>
                    <p className="has-text-align-center">Menjadi lembaga filantropi nasional untuk mewujudkan pondok tahfidz yatim dan dhuafa di Indonesia</p>
                    <p><strong>Misi</strong></p>
                    <p>Membangun lembaga yang amanah dan profesional sebagai fasilitator kaum muslimin untuk membentuk generasi qurani menjadi hamba-hamba Allah yang bermanfaat bagi banyak orang</p>
                    <p>Membangun dan membina pondok tahfidz yatim & dhuafa berbasis kemandirian ekonomi di Indonesia</p>
                    <p>Mencetak sejuta penghafal Al-Qur'an</p>
                    <p>Memberdayakan ekonomi masyarakat</p>
                    <br />
                </div>
            </div>

        </div>
        <Footer />
    </div>)
}


function Helmet() {
    const title = "Visi Misi BYI"
    const desc = "Visi Misi Berkah Yatim Indonesia"
    const img = "https://raw.githubusercontent.com/nashihu/production_stuff/master/bsy_images/2020-01-24%2018.19.45.jpeg"
    const { asPath } = useRouter();
    const URL = `${origin()}${asPath}`;
    return (<Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={URL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:image" content={img} />
    </Head>)
}