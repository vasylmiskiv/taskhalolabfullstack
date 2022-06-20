import loader from "../../assets/loader.gif";

type Props = {
  error: string;
};

export const Loader: React.FC<Props> = ({ error }) => {
  return (
    <>
      {error ? (
        <h1
          style={{
            marginTop: "250px",
            textAlign: "center",
          }}
        >
          {error}
        </h1>
      ) : (
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
      )}
    </>
  );
};
