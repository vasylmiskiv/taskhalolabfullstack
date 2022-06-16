import loader from "../../assets/loader.gif";

export const Loader = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img src={loader} alt="loader" />
    </div>
  );
};
