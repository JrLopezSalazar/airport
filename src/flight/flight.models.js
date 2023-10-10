import { DataTypes } from "sequelize";
import sequelize from "../config/database/database.js";

const Flight = sequelize.define("flight", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  origin_id: {
    integer,
    not,
  },
  destination_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

  plane_id: {
    type: DataTypes.INTEGER,
  },

  departure_time: {
    type:DataTypes.T
  },

  status: {
    type: DataTypes.BOOLEAN,
    type: DataTypes.ENUM("Pending", "In Progress", "done", "Cancelled", "delayed"),
    allowNull: false,
    defaultValue: "Pending"
  },
});
