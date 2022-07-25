import { Box } from "@mui/system";
import { List, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Config";
import { data } from "jquery";
import { useNavigate } from "react-router-dom";
const Tambah_kontak = () => {
  const navigasi = useNavigate();
  document.title = "Tambah Kontak";
  const [kategoriKontak, setKategoriKontak] = useState([]);
  const [nama, setNama] = useState("");
  const [nomorInduk, setNomorInduk] = useState("");
  const [nomorHandphone, setNomorHanphone] = useState();
  const [pKategori_kontak, setPKtagori_kontak] = useState();
  useEffect(() => {
    _getKategori_kontak();
  }, []);
  const _getKategori_kontak = () => {
    axios.post(baseUrl + "site/kategori_kontak").then((respon) => {
      setKategoriKontak(respon.data.data);
    });
  };

  const _kirim_data = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("nomor_induk", nomorInduk);
    formData.append("nomor_handphone", nomorHandphone);
    formData.append("id_kategori_kontak", pKategori_kontak);

    axios
      .post(baseUrl + "site/simpan_kontak", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((respon) => {
        if (respon.data.status == "data_tersimpan") {
          window.alert("Data tersimpan");
          navigasi("/kontak.html");
        }
      });
  };

  return (
    <>
      <div style={{ height: "30px" }} />
      <div className="container">
        <div className="row">
          <button
            onClick={() => {
              navigasi("/kontak.html");
            }}
            style={{ width: "120px", height: "55px" }}
            className="btn btn-danger"
          >
            <i className="fa fa-chevron-left" />
            Kembali
          </button>
          <div className="col-lg-5" style={{ margin: "AUTO", border: "1px solid #DFDFDF", borderRadius: "10px" }}>
            <br />
            <h3>Tambah Kontak</h3>
            <div>
              <Box
                onSubmit={_kirim_data}
                style={{ width: "100%" }}
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "100%" },
                }}
                autoComplete="off"
              >
                <div>
                  <TextField
                    onChange={(event) => {
                      setNama(event.target.value);
                    }}
                    required="true"
                    style={{ width: "98%" }}
                    id="outlined-name"
                    label="Nama Lengkap"
                  />
                </div>
                <div>
                  <TextField
                    onChange={(event) => {
                      setNomorInduk(event.target.value);
                    }}
                    required="true"
                    style={{ width: "98%" }}
                    id="outlined-name"
                    label="Nomor Induk"
                  />
                </div>
                <div>
                  <TextField
                    onChange={(event) => {
                      setNomorHanphone(event.target.value);
                    }}
                    required="true"
                    style={{ width: "98%" }}
                    id="outlined-name"
                    label="Nomor Handphone"
                  />
                </div>
                <div>
                  <select
                    required
                    onChange={(event) => {
                      setPKtagori_kontak(event.target.value);
                    }}
                    style={{ width: "98%", borderRadius: "5px", padding: "16px", border: "1px solid #c4c4c4" }}
                  >
                    <option value={""}> -- Pilih Kategori Kontak -- </option>
                    {kategoriKontak.map((list, index) => (
                      <option key={list.id_kategori_kontak} value={list.id_kategori_kontak}>
                        {list.nama_kategori_kontak}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="btn btn-danger " type="submit">
                  Simpan Data
                </button>
              </Box>

              <br />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tambah_kontak;
