import { DataTypes, Model } from "sequelize";
import sequelize from "../connection";

class Category extends Model {}

Category.init({
  category_id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  category_name: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Category',
  tableName: 'category',
  timestamps: false
});

export default Category;
