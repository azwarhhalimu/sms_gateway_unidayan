import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseUrl } from "../../Config";
import { Ubah_menu, Breadcumb } from "../../Widget";
import "./style.css";
import Swal from "sweetalert2";
import qs from "querystring";
import { Helmet } from "react-helmet";
const Kategori_kontak = () => {
  const [data, setData] = useState([]);
  const navigasi = useNavigate();
  const [reload, setReload] = useState(0);
  document.title = "Kategori Kontak";
  Breadcumb(
    JSON.stringify({
      label: ["Dashboard", "Kategori Kontak"],
      link: ["/", "#"],
    })
  );
  useEffect(() => {
    Ubah_menu("kategori_kontak");
    _init();
  }, [reload]);

  const _init = () => {
    axios.post(baseUrl + "site/kategori_kontak").then((respon) => {
      setData(respon.data.data);
    });
  };
  const tambah_data = () => {
    navigasi("/kategori-kontak/tambah-kategori-kontak.html");
  };

  const _hapus = (id) => {
    Swal.fire({
      title: "Ingin hapus data ini?",
      text: "Data yang sudah di hapus tidak dapat dikembalikan lagi!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Ya Hapus itu!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .post(
            baseUrl + "site/hapus_kategori_kontak",
            qs.stringify({
              id_kategori_kontak: id,
            })
          )
          .then((respon) => {
            if (respon.data.status == "data_terhapus") {
              Swal.fire("Terhapus!", "Data yberhasil di hapus.", "success").then((result) => {
                setReload(reload + 1);
              });
            }
          });
      }
    });
  };

  return (
    <>
      <Helmet>
        <link rel="stylesheet" type="text/css" href="/DataTables/datatables.min.css" />
        <script type="text/javascript" src="/DataTables/datatables.min.js"></script>
      </Helmet>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <br />
            <h3>Data Kategori Kontak</h3>
            <button
              style={{ marginTop: "-40px" }}
              onClick={() => {
                tambah_data();
              }}
              className="btn btn-primary float-end"
            >
              <i className="fa fa-plus" /> Tambah
            </button>

            <br />
            <table id="table" className="table">
              <thead
                style={{
                  background: "#0099FB",
                  color: "#FFF",
                }}
              >
                <tr>
                  <td>No</td>
                  <td>Id Kategor Kontak</td>
                  <td>Nama Kategori Kontak</td>
                  <td></td>
                </tr>
              </thead>
              <tbody>
                {data.map((list, index) => (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{list.id_kategori_kontak}</td>
                    <td>{list.nama_kategori_kontak}</td>
                    <td style={{ textAlign: "right" }}>
                      <button
                        onClick={() => {
                          _hapus(list.id_kategori_kontak);
                        }}
                        className="btn btn-danger"
                      >
                        <i className="fa fa-trash" /> Hapus
                      </button>{" "}
                      <button
                        onClick={() => {
                          navigasi("/kategori-kontak/" + list.id_kategori_kontak + "/edit-kategori-kontak.html");
                        }}
                        className="btn btn-success"
                      >
                        <i className="fa fa-pencil" /> Ubah
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kategori_kontak;
