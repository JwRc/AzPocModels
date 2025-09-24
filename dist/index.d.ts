import { Sequelize } from 'sequelize';
import { User } from './user.model';
export { User };
export declare function initModels(sequelize: Sequelize): {
    User: typeof User;
};
