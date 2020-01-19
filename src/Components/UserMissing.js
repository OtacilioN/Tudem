import React from "react";
import Typography from "@material-ui/core/Typography";
import "../Screens/FindStudents.css";
import WarningIcon from "@material-ui/icons/Warning";
const UserMissing = props => {
  return (
    <div
      style={{
        margin: 8,
        borderRadius: 16,
        padding: 16,
        display: "flex",
        backgroundColor: "darkgrey",
        marginTop: 32,
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <Typography color="error">
        Preencha todas as informações na aba de Perfil primeiro para começar a
        usar o Tudem!
      </Typography>
      <WarningIcon style={{ marginTop: 16 }} fontSize="large" color="error" />
    </div>
  );
};

export default UserMissing;
