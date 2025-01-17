import { DataTypes, Model } from "sequelize";
import sequelize from "../config/database";

class AMC extends Model {
  public id!: number;
  public sort_key!: string;
  public item!: string;
  public file!: string;
  public summary_field!: string;
  public lru_pn_name!: string;
  public vendor!: string;
  public aircraft!: string;
  public ipc_ata!: string;
  public from!: string;
  public section!: string;
  public user_id!: number;
}

AMC.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    sort_key: {
      type: DataTypes.STRING(255),
    },
    item: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    file: {
      type: DataTypes.STRING(2048),
    },
    summary_field: {
      type: DataTypes.STRING(255),
    },
    lru_pn_name: {
      type: DataTypes.STRING(255),
    },
    vendor: {
      type: DataTypes.STRING(255),
    },
    aircraft: {
      type: DataTypes.STRING(255),
    },
    ipc_ata: {
      type: DataTypes.STRING(255),
    },
    from: {
      type: DataTypes.STRING(255),
    },
    section: {
      type: DataTypes.STRING(255),
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    modelName: "AMC",
    paranoid: true,
  }
);

export default AMC;
