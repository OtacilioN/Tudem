import React from "react";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { setUser } from "../Service/Firestore";
import { requestPermission } from "../Service/PushNotification";
import "./Profile.css";
import axios from "axios";

const Profile = props => {
  const storageData = JSON.parse(localStorage.getItem("userData")) || {};
  const defaultImage = "https://avatars2.githubusercontent.com/u/54108471?v=4";

  const [gitHubUser, setGitHubUser] = React.useState(
    storageData.gitHubUser || ""
  );
  const [name, setName] = React.useState(storageData.name || "");
  const [whatsapp, setWhatsapp] = React.useState(storageData.whatsapp || "");
  const [bio, setBio] = React.useState(storageData.bio || "");
  const [image, setImage] = React.useState(storageData.image || defaultImage);

  const handleGitHubUserChange = event => {
    setGitHubUser(event.target.value);
  };

  const handleNameChange = event => {
    setName(event.target.value);
  };

  const handleWhatsappChange = event => {
    setWhatsapp(event.target.value);
  };

  const handleBioChange = event => {
    setBio(event.target.value);
  };

  const updateGitHub = () => {
    axios
      .get("https://api.github.com/users/" + gitHubUser)
      .then(function(response) {
        // handle success
        const { data } = response;
        const { name, bio, avatar_url, followers, public_repos } = data;
        name && setName(name);
        bio && setBio(bio);
        avatar_url && setImage(avatar_url);
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      })
      .finally(function() {
        // always executed
      });
  };

  const saveChanges = () => {
    const userData = { gitHubUser, name, whatsapp, bio, image };
    setUser(userData);
    localStorage.setItem("userData", JSON.stringify(userData));
    requestPermission();
    props.onSave();
  };

  return (
    <div className="Profile-container">
      <Typography>Perfil do Estudante</Typography>
      <div className="Profile-info">
        <div className="Profile-picture-wrapper">
          <img
            src={image}
            alt="Foto de perfil"
            style={{ height: 140, width: 140 }}
          />
        </div>
        <form className="Profile-flex-full" noValidate autoComplete="off">
          <div className="Profile-form-wrapper">
            <TextField
              className="Profile-flex-full"
              id="github-username"
              value={gitHubUser}
              onChange={handleGitHubUserChange}
              label="Usuario do GitHub"
            />
            <TextField
              value={name}
              onChange={handleNameChange}
              className="Profile-flex-full"
              id="name"
              label="Nome"
            />
            <TextField
              value={whatsapp}
              onChange={handleWhatsappChange}
              className="Profile-flex-full"
              id="whatsapp"
              label="Whatsapp"
            />
          </div>
        </form>
      </div>
      <div className="Profile-info">
        <TextField
          multiline
          rowsMax="4"
          onChange={handleBioChange}
          value={bio}
          className="Profile-flex-full"
          id="bio"
          label="bio"
        ></TextField>
      </div>
      <div
        style={{
          display: "flex",
          flex: 1,
          alignItems: "flex-end",
          justifyContent: "space-around"
        }}
      >
        <Button onClick={updateGitHub}>Buscar GitHub</Button>
        <Button onClick={saveChanges} color="primary">
          Salvar
        </Button>
      </div>
    </div>
  );
};

export default Profile;
