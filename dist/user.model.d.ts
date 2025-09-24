import { Model, Sequelize } from 'sequelize';
export declare class User extends Model {
    id: number;
    name: string;
    email: string;
}
export declare function initUserModel(sequelize: Sequelize): typeof User;
