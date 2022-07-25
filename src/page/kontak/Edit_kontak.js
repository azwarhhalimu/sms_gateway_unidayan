import { Box } from "@mui/system";
import { List, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../Config";
import qs from "querystring";
import { useNavigate, useParams } from "react-router-dom";
import { data } from "jquery";
const Edit_kontak = () => {
  const navigasi = useNavigate();
  let { id } = useParams();
  document.title = "Tambah Kontak";
  const [kategoriKontak, setKategoriKontak] = useState([]);
  const [nama, setNama] = useState("");
  const [nomorInduk, setNomorInduk] = useState("");
  const [nomorHandphone, setNomorHanphone] = useState();
  const [pKategori_kontak, setPKtagori_kontak] = useState();
  useEffect(() => {
    _getKategori_kontak();
    _getKontak();
  }, []);
  const _getKategori_kontak = () => {
    axios.post(baseUrl + "site/kategori_kontak").then((respon) => {
      setKategoriKontak(respon.data.data);
    });
  };

  const _getKontak = () => {
    axios
      .post(
        baseUrl + "site/get_kontak",
        qs.stringify({
          id_kontak: id,
        })
      )
      .then((respon) => {
        const dataku = respon.data;

        setNama(dataku.nama);
        setNomorInduk(dataku.nomor_induk);
        setNomorHanphone(dataku.nomor_handphone);
        setPKtagori_kontak(dataku.kategori_kontak);
      });
  };

  const _kirim_data = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("id_kontak", id);
    formData.append("nama", nama);
    formData.append("nomor_induk", nomorInduk);
    formData.append("nomor_handphone", nomorHandphone);
    formData.append("id_kategori_kontak", pKategori_kontak);

    axios
      .post(baseUrl + "site/edit_kontak", formData, {
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
            <h3>Edit Kontak</h3>
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
                    value={nama}
                    onChange={(event) => {
                      setNama(event.target.value);
                    }}
                    required="true"
                    style={{ width: "98%" }}
                    id="outlined-name2"
                    label="Nama Lengkap"
                  />
                </div>
                <div>
                  <TextField
                    onChange={(event) => {
                      setNomorInduk(event.target.value);
                    }}
                    value={nomorInduk}
                    required="true"
                    style={{ width: "98%" }}
                    id="outlined-namex"
                    label="Nomor Induk"
                  />
                </div>
                <div>
                  <TextField
                    onChange={(event) => {
                      setNomorHanphone(event.target.value);
                    }}
                    value={nomorHandphone}
                    required="true"
                    style={{ width: "98%" }}
                    id="outlined-name3"
                    label="Nomor Handphone"
                  />
                </div>
                <div>
                  <select
                    required
                    value={pKategori_kontak}
                    onChange={(event) => {
                      setPKtagori_kontak(event.target.value);
                    }}
                    style={{ width: "98%", borderRadius: "5px", padding: "16px", border: "1px solid #c4c4c4" }}
                  >
                    <option value={""}> -- Pilih Kategori Kontak -- </option>
                    {kategoriKontak.map((list, index) => (
                      <option {...(pKategori_kontak == list.id_kategori_kontak ? "selected" : "")} key={list.id_kategori_kontak} value={list.id_kategori_kontak}>
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

export default Edit_kontak;
