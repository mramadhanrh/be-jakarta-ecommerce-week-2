import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Profile = sequelize.define("Profile", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  location: DataTypes.STRING,
  image: DataTypes.STRING,
});

export default Profile;
