

import jumpGif from "./assets/jump-hello-transparent.gif";

function LoadingComponent() {
  return(
    <p>Checking future <img src={jumpGif} alt="Loading..." style={{width: "48px", height: "48px"}}/></p>
  );
}

export default LoadingComponent;