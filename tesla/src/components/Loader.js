import React from "react";
import Lottie from "lottie-react";
import LogoLoader from "../assets/kZPQSDJipH.json";

function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Lottie
        animationData={LogoLoader}
        height={200}
        width={100}
        loop={true}
        style={{ maxHeight: 100, maxWidth: 100 }}
      />
    </div>
  );
}

export default Loader;
