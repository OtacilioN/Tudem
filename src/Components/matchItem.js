import React from "react";
import Typography from "@material-ui/core/Typography";

const MatchItem = props => {
  return (
    <div
      style={{ display: "flex", borderTop: "1px solid black", marginTop: 16 }}
    >
      <div
        style={{
          textAlign: "initial",
          display: "flex",
          justifyContent: "space-around",

          padding: 16
        }}
      >
        <img
          src={props.image}
          alt="Foto de perfil"
          style={{ height: 90, width: 90, borderRadius: 8 }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginLeft: 32
          }}
        >
          <Typography>{props.name}</Typography>
          <Typography>{props.whatsapp}</Typography>
        </div>
      </div>
    </div>
  );
};
export default MatchItem;
