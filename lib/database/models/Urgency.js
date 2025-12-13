import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class Urgency extends Model {}

Urgency.init({
  urgency_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  urgency_name: {
    type: DataTypes.STRING(100),
    allowNull: false,
    defaultValue: 'Low'
  },
  duration: {
    type: DataTypes.INTEGER
  }
}, {
  sequelize,
  modelName: 'Urgency',
  tableName: 'urgency',
  timestamps: false
});

export default Urgency;
