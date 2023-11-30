import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  "mysql://root:root@localhost:3306/jakarta-week-2"
);

export default sequelize;
