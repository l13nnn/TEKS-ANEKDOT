import {useState} from "react";

function Header() {
    return (
        <>
        <div className="header">
                <nav className="navbar">
                    <div class="logo">📖 Teks Anekdot</div>
                    <div class="search">
                        <input type="search" placeholder="Cari cerita..."/>
                        <button type="submit">🔍</button>
                    </div>
                        <div class="nav-links">
                            <a href="#">Beranda</a>
                            <a href="#">Cerita Terbaru</a>
                            <a href="#">Kategori</a>
                            <a href="#">Berbagi Cerita</a>
                        </div>
                        <div class="menu-toggle">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                </nav>
        </div>
        <section class="hero">
            <h1>Kumpulan Teks Anekdot</h1>
            <p>Berbagi pengalaman pribadi yang menghibur</p>
        </section>
        </>
    )
}

export default Header;