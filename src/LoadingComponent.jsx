import jumpGif from "./assets/jump-hello-transparent.gif";

function LoadingComponent() {
  return (
      <img
        src={jumpGif}
        alt="Loading..."
        style={{ width: "5rem", height: "5rem" }}
      />
  );
}

export default LoadingComponent;
