import { TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react";
const Step2 = (props) => {
  const [judul, setJudul] = useState();
  const [pesan, setPesan] = useState();
  const _simpan = (e) => {
    e.preventDefault();
    window.localStorage.setItem(
      "pesan",
      JSON.stringify({
        judul: judul,
        pesan: pesan,
      })
    );
    props.fungsi();
  };
  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Buat Pesan</h3>
        </div>
        <div className="body" style={{ padding: "20px" }}>
          <form onSubmit={_simpan}>
            <TextField
              onChange={(e) => {
                setJudul(e.target.value);
              }}
              fullWidth
              id="filled-basic"
              label="Judul Pesan"
              variant="filled"
            />
            <div style={{ fontSize: "13px" }}>Masukkan judul pesan</div>
            <br />
            <TextField
              fullWidth
              onChange={(e) => {
                setPesan(e.target.value);
              }}
              id="filled-basic"
              label="Isi Pesan"
              variant="filled"
            />
            <div style={{ fontSize: "13px" }}>Isikan Pesan Anda</div>
            <div style={{ textAlign: "right" }}>
              <button type="submit" className="btn btn-danger">
                Simpan
              </button>
            </div>
          </form>
        </div>
      </div>
      <br />
    </>
  );
};

export default Step2;
