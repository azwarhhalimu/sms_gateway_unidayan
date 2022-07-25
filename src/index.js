import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import Template from "./base_template/Template";
import Beranda from "./page/Beranda";
import Kontak from "./page/kontak/Kontak";
import Riwayat_pesan from "./page/riwayat_pesan/Riwayat_pesan";
import Pesan from "./page/pesan/Pesan";
import Kategori_kontak from "./page/kategori-kontak/Kategori_kontak";
import Tambah_kategori_kontak from "./page/kategori-kontak/Tambah_kategori_kontak";
import Tambah_pesan from "./page/pesan/Tambah_pesan";
import Profil from "./page/profil/Profil";
import Edit_kategori_kontak from "./page/kategori-kontak/Edit_kategori_kontak";
import Tambah_kontak from "./page/kontak/Tambah_kontak";
import Edit_kontak from "./page/kontak/Edit_kontak";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Template />}>
          <Route path="/" element={<Beranda />} />

          <Route path="/kontak.html" element={<Kontak />} />
          <Route path="/kontak/tambah-kontak.html" element={<Tambah_kontak />} />
          <Route path="/:id/kontak/edit-kontak.html" element={<Edit_kontak />} />

          <Route path="/riwayat-pesan.html" element={<Riwayat_pesan />} />

          <Route path="/pesan.html" element={<Pesan />} />
          <Route path="/pesan/tambah-pesan.html" element={<Tambah_pesan />} />

          <Route path="/profil.html" element={<Profil />} />

          <Route path="/kategori-kontak.html" element={<Kategori_kontak />} />
          <Route path="/kategori-kontak/tambah-kategori-kontak.html" element={<Tambah_kategori_kontak />} />
          <Route path="/kategori-kontak/:id/edit-kategori-kontak.html" element={<Edit_kategori_kontak />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
