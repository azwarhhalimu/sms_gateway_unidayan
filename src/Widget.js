const Ubah_menu = (menu) => {
  window.sessionStorage.setItem("akmalo_menu", menu);
};
const Get_menu = () => {
  window.sessionStorage.getItem("akmalo_menu");
};

const Breadcumb = (data) => {
  window.sessionStorage.setItem("breadcumb", data);
};

const GetBreadcumb = () => {
  window.sessionStorage.getItem("breadcumb");
};

const Spacer = (props) => {
  return (
    <>
      <div style={{ height: props }}></div>
    </>
  );
};

export default Spacer;
const Aktif_class_menu = "  bg-gradient-primary";
export { Ubah_menu, Get_menu, Aktif_class_menu, Breadcumb, GetBreadcumb };
