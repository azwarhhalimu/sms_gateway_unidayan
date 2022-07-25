import Spacer from "../../Widget";
import { baseUrl } from "../../Config";

import { TextField, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
import Swal from "sweetalert2";
import { useEffect } from "react";
const Edit_kategori_kontak = () => {
  let { id } = useParams();
  document.title = "EDIT Kategori Kontak";
  const [loading, setLoading] = useState(false);

  const [nama_kategori_kontak, setNama_kategori_kontak] = useState();
  const navigate = useNavigate(-1);

  const _simpan_kontak = (e) => {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData();
    formData.append("id_kategori_kontak", id);
    formData.append("nama_kategori_kontak", nama_kategori_kontak);
    axios
      .post(baseUrl + "site/update_kategori_kontak", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((respon) => {
        if (respon.data.status == "data_update") {
          setLoading(false);
          Swal.fire("Sukses!", "Data terupdate!", "success").then((result) => {
            navigate("/kategori-kontak.html");
          });
        }
      });
  };
  useEffect(() => {
    _getData();
  }, []);

  const _getData = () => {
    const formData = new FormData();
    formData.append("id_kategori_kontak", id);
    axios
      .post(baseUrl + "site/get_kategori_kontak", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((respon) => {
        setNama_kategori_kontak(respon.data.nama_kategori_kontak);
      });
  };
  return (
    <>
      <br />
      <br />
      <div className="container">
        <div className="row">
          <div style={{ margin: "auto", border: "1px solid #EAEAEA", borderRadius: "5px" }} className="col-lg-5">
            <br />
            <Button
              onClick={() => {
                navigate(-1);
              }}
              color="error"
              variant="contained"
            >
              <i className="fa fa-chevron-left" /> {"  "}Kembali
            </Button>
            <h3>Edit Kategori Kontak</h3>
            <div style={{ height: "30px" }} />
            <div>
              <form onSubmit={_simpan_kontak}>
                <TextField
                  onChange={(e) => {
                    setNama_kategori_kontak(e.target.value);
                  }}
                  value={nama_kategori_kontak}
                  required="true"
                  style={{ width: "100%" }}
                  id="outlined-basic"
                  label="Nama Kategori Kontak"
                  placeholder="Ex : Dosen, Mahasiswa"
                  variant="outlined"
                />
                <br />
                <br />
                <Button color="primary" variant="contained" type="submit">
                  Simpan
                </Button>
                <br />
                <br />
              </form>
              <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10000 }} open={loading}>
                <div>
                  <CircularProgress color="inherit" />
                </div>
                <div style={{ textAlign: "center" }}>Sedang menyimpan</div>
              </Backdrop>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Edit_kategori_kontak;
