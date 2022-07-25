import { useEffect } from "react";
import { Ubah_menu } from "../Widget";
// import { Client } from "whatsapp-web.js";

const Beranda = () => {
  document.title = "Beranda";
  useEffect(() => {
    Ubah_menu("beranda");
  }, []);
  return <>Ini adalah beranda</>;
};

export default Beranda;
