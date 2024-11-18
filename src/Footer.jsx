import React from 'react';

function Footer() {
    return (
        <>
        <div className="footer">
            <div className="footer-content">
                    <div className="footer-section">
                        <h3>Tentang Kami</h3>
                        <p>Website ini dibuat untuk berbagi cerita lucu dan pengalaman menarik dari kehidupan sehari-hari yang dapat menghibur semua orang.</p>
                    </div>
                    <div className="footer-section">
                        <h3>Kategori Populer</h3>
                        <ul>
                          <li>Cerita Kantor</li>
                          <li>Cerita Keluarga</li>
                        </ul>
                    </div>
                    <div className="footer-section">
                        <h3>Kontak</h3>
                        <ul>
                          <li>Email: irenedjaya288@gmail.com</li>
                          <li>WhatsApp: 0857-7232-0060</li>
                          <li>Instagram: liennn.n_</li>
                        </ul>
                    </div>
            </div>
                    <div className="footer-bottom">
                        <p>&copy; 2024 Kumpulan Teks Anekdot. All rights reserved.</p>
                    </div>
        </div>
        </>
    )
}

export default Footer;