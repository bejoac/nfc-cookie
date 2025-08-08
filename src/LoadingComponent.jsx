import jumpGif from "./assets/im-free-cute.gif";

function LoadingComponent() {
  return (
      <img
        src={jumpGif}
        alt="Loading..."
        style={{ width: "8rem", height: "8rem" }}
      />
  );
}

export default LoadingComponent;
