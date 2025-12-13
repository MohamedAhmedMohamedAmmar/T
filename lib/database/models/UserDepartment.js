import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class UserDepartment extends Model {}

UserDepartment.init({
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  dept_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  }
}, {
  sequelize,
  modelName: 'UserDepartment',
  tableName: 'user_department',
  timestamps: false
});

export default UserDepartment;
