import Head from "next/head"
import { useRouter } from "next/router"
import React from "react"
import Footer from "../../src/component/Footer"
import Header from "../../src/component/Header"
import Masthead from "../../src/component/Masthead"
import origin from "../../src/constants"

export const donasi = "/donasi"
export default function Donasi() {
    return (<div>
        <Helmet />
        <Header />
        <Masthead bg="donasi" buttonLabel="Lihat Profil" target="#donate" />
        <section class="page-section bg-light" id="donate">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-10 text-center">
                        <div class="text-dark mt-4 mb-4">
                            Rancangan dan Perencanaan Yayasan Berkah Yatim Indonesia
                        </div>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/KRswZr858kw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        <div class="text-dark mb-3">
                            Salurkan bantuan Anda dalam mendukung program-program yayasan melalui portal donasi berikut
                        </div>
                        <a href="../Donasi/home.html">
                            <div class="btn btn-primary mb-3">Web Donasi</div>
                        </a>
                        <div class="text-dark">
                            atau langsung melalui Rekening (a.n Yayasan Berkah Yatim Indonesia)
                        </div>
                        <div class="text-dark mb-3">
                            yang telah kami sediakan :
                        </div>
                        <div class="col-lg-12 mb-3 js-copy-bsm-btn">
                            <div class="btn btn-primary">Rekening Mandiri Syari'ah (BSM)</div>
                        </div>
                        <div class="col-lg-12 mb-3 js-copy-mandiri-btn">
                            <div class="btn btn-primary">Rekening Mandiri</div>
                        </div>
                        <div class="col-lg-12 mb-3 js-copy-bni-btn">
                            <div class="btn btn-primary">Rekening BNI</div>
                        </div>
                        <div class="text-dark mb-2">
                            Konfirmasi donasi melalui kontak:
                        </div>
                        <div class="col-lg-12 mb-2">
                            <a class="btn btn-primary" href="tel:+6281912002001">Telepon</a>
                        </div>
                        <div class="col-lg-12 mb-2">
                            <a class="btn btn-primary " href="https://wa.me/6281912002001">Whatsapp</a>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>)
}


function Helmet() {
    const title = "Donasi"
    const desc = "Informasi Donasi untuk anak-anak yatim di BYI"
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