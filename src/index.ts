import { Sequelize } from 'sequelize';
import { User } from './user.model';

export { User };

export function initModels(sequelize: Sequelize) {
  const models = {
    User,
  };

  return models;
}