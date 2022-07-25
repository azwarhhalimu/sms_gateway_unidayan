import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Ubah_menu } from "../../Widget";

import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";

const Pesan = () => {
  const navigasi = useNavigate();
  document.title = "Pesan";
  useEffect(() => {
    Ubah_menu("pesan");
  }, []);
  const _tambah_pesan_baru = () => {
    navigasi("/pesan/tambah-pesan.html");
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "firstName",
      headerName: "First name",
      width: 150,
      editable: true,
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 150,
      editable: true,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      // valueGetter: (params) => `${params.row.firstName || ""} ${params.row.lastName || ""}`,
    },
  ];

  return (
    <>
      <br />
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <button
              onClick={() => {
                _tambah_pesan_baru();
              }}
              className="btn btn-danger float-end"
            >
              Tambah Pesan
            </button>
            <h4>Data Pengiriman Pesan</h4>
            <br />
            <div style={{ width: "100%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pesan;
