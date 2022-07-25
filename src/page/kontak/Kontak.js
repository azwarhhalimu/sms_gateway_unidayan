import { useEffect, useState } from "react";
import { Breadcumb, Ubah_menu } from "../../Widget";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { baseUrl } from "../../Config";
import { useNavigate } from "react-router-dom";
import qs from "querystring";
const Kontak = () => {
  const [reload, setReload] = useState(0);
  const navigasi = useNavigate();
  document.title = "Kontak";

  const [data, setData] = useState([]);
  Breadcumb(
    JSON.stringify({
      label: ["Dashboard", "Kontak"],
      link: ["/", "#"],
    })
  );
  useEffect(() => {
    Ubah_menu("kontak");
    _get_data();
  }, [reload]);

  const _get_data = () => {
    axios.post(baseUrl + "site/data_kontak").then((respon) => {
      setData(respon.data.data);
    });
  };

  const _hapus_kontak = (id) => {
    const k = window.confirm("Apakah anda ingin hapus data ini?");
    if (k) {
      axios
        .post(
          baseUrl + "site/hapus_kontak",
          qs.stringify({
            id_kontak: id,
          })
        )
        .then((respon) => {
          if (respon.data.status == "data_terhapus") {
            alert("Data terhapus");
            setReload(reload + 1);
          }
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-9" style={{ margin: "auto" }}>
            <br />
            <button
              onClick={() => {
                navigasi("/kontak/tambah-kontak.html");
              }}
              className="btn btn-primary float-end"
            >
              Tambah Kontak
            </button>
            <h4>Data Kontak</h4>
            <div style={{ height: "20px" }} />
            <div style={{ width: "100%" }}>
              <div style={{ borderRadius: "5px", border: "1px solid #DFDFDF" }}>
                <table className="table">
                  <thead>
                    <tr style={{ fontWeight: "bold" }}>
                      <td></td>
                      <td>No</td>
                      <td>Nama Kontak</td>
                      <td>Nomor Induk</td>
                      <td>Nomor Handphone</td>
                      <td>Status</td>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((list, index) => (
                      <tr>
                        <td>
                          <button
                            onClick={() => {
                              navigasi("/" + list.id_kontak + "/kontak/edit-kontak.html");
                            }}
                            className="btn btn-success"
                          >
                            <i className="fa fa-pencil" /> Edit
                          </button>{" "}
                          <button
                            onClick={() => {
                              _hapus_kontak(list.id_kontak);
                            }}
                            className="btn btn-danger"
                          >
                            <i className="fa fa-trash" /> Hapus
                          </button>
                        </td>
                        <td>{index + 1}</td>
                        <td>{list.nama}</td>
                        <td>{list.nomor_induk}</td>
                        <td>{list.nomor_handphone}</td>
                        <td>{list.kategori_kontak}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kontak;
