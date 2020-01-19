import React from "react";
import Typography from "@material-ui/core/Typography";
import "../Screens/FindStudents.css";

const UserMissing = props => {
  return (
    <div
      style={{
        margin: 8,
        borderRadius: 16,
        padding: 16,
        display: "flex",
        backgroundColor: "darkgrey",
        marginTop: 32
      }}
    >
      <Typography color="error">
        Preencha todas as informações na aba de Perfil primeiro para começar a
        usar o Tudem!
      </Typography>
    </div>
  );
};

export default UserMissing;
