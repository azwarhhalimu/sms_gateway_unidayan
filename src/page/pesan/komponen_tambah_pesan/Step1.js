import { Checkbox } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { baseUrl } from "../../../Config";
const Step1 = () => {
  const [check, setCheck] = useState([]);
  const [kontak, setKontak] = useState([]);
  const [kategoriKontak, setKategori_kontak] = useState([]);
  useEffect(() => {
    axios.post(baseUrl + "site/pilih_kontak").then((respon) => {
      setKontak(respon.data.kontak);
      setKategori_kontak(respon.data.kategori_kontak);
    });
  }, []);

  useEffect(() => {
    console.log(check);
    window.localStorage.setItem("pilih_kontak", JSON.stringify(check));
  }, [check]);
  const set_grup = (data) => {
    window.localStorage.removeItem("pilih_kontak");
    window.localStorege.setItem(
      "pilih_kontak",
      JSON.parse({
        type: "GRUP_KONTAK",
        grup: "aja",
      })
    );
  };
  return (
    <>
      <div>
        <h3>Pilih Kontak</h3>
        <div className="card">
          <div className="card-header">
            <h4>Pilih Kontak</h4>
          </div>
          <div className="card-body">
            <div>
              Grup Kirim :
              <div>
                {kategoriKontak.map((list, index) => (
                  <button
                    onClick={() => {
                      set_grup(list.id_kategori_kontak);
                    }}
                    style={{
                      marginLeft: "5px",
                    }}
                    className="btn btn-sm btn-danger"
                  >
                    {list.nama_kategori_kontak}
                  </button>
                ))}
              </div>
            </div>
            <br />
            <table className="table">
              <tr style={{ fontWeight: "bold" }}>
                <td></td>
                <td>No</td>
                <td>Nim</td>
                <td>Nama</td>
                <td>Nomor Handphone</td>
              </tr>
              {kontak.map((list, index) => (
                <tr>
                  <td>
                    <Checkbox
                      value={list.id_kontak}
                      onChange={(event) => {
                        if (event.target.checked) {
                          setCheck([...check, list.id_kontak]);
                        } else {
                          setCheck((prevState) => prevState.filter((prev) => prev !== list.id_kontak));
                        }
                      }}
                    />
                  </td>
                  <td>{index + 1}</td>
                  <td>{list.nim}</td>
                  <td>{list.nama}</td>
                  <td>{list.no_handphone}</td>
                </tr>
              ))}
            </table>
          </div>
        </div>
      </div>
      <br />
    </>
  );
};

export default Step1;
