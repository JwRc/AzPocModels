import { Sequelize } from 'sequelize';
import { initUserModel, User } from './user.model';

export { User };

export function initModels(sequelize: Sequelize) {
  const models = {
    User: initUserModel(sequelize),
  };

  return models;
}