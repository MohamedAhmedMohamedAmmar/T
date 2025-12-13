import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class Department extends Model {}

Department.init({
  dept_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  dept_name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Department',
  tableName: 'department',
  timestamps: false
});

export default Department;
