import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Step1 from "./komponen_tambah_pesan/Step1";
import Step2 from "./komponen_tambah_pesan/Step2";
import Step3 from "./komponen_tambah_pesan/Step3";
const Tambah_pesan = () => {
  const navigasi = useNavigate();
  document.title = "Tambah Pesan";
  const _simpan = (e) => {
    e.preventDefault();
    alert();
  };

  const [st, setSt] = useState(0);
  const steps = ["Pilih Kontak", "Buat Pesan", "Konfimasi Dan Kirim Pesan", "Selesai"];

  const aja = () => {
    let stp;
    if (st == 0) {
      stp = <Step1 />;
    } else if (st == 1) {
      stp = <Step2 fungsi={next} />;
    } else if (st == 2) {
      stp = <Step3 />;
    }
    return stp;
  };

  useEffect(() => {});

  const next = () => {
    setSt(2);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <br />
            <button
              onClick={() => {
                navigasi("/pesan.html");
              }}
              className="btn btn-danger"
            >
              <i className="fa fa-chevron-left" /> Kembali
            </button>
            <br />
            <Box sx={{ width: "100%" }}>
              <Stepper activeStep={st} alternativeLabel>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
            </Box>
            <br />
            <br />
          </div>
          <div
            className="col-lg-8"
            style={{
              margin: "auto",
            }}
          >
            <div style={{ textAlgin: "center" }}>{aja()}</div>
            <div className="row">
              <div className="col-lg-6">
                <button
                  className={"btn btn-warning" + (st == 0 ? " disabled" : "")}
                  onClick={() => {
                    setSt(st - 1);
                  }}
                >
                  Sebelumnya
                </button>
              </div>
              <div className="col-lg-6" style={{ textAlign: "right" }}>
                <button
                  className={"btn btn-primary " + (st == 2 ? " disabled" : "")}
                  onClick={() => {
                    setSt(st + 1);
                  }}
                >
                  {st == 2 ? "Selesai" : "Lanjut"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tambah_pesan;
