import { DataTypes, Sequelize, Model } from 'sequelize';

export class User extends Model {
  id!: number;
  uuid!: string;
  name!: string;
  email!: string;
  // ... outros campos
}

export function initUserModel(sequelize: Sequelize) {
  User.init(
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      uuid: { type: DataTypes.STRING(36), allowNull: false, unique: true },
      partner: { type: DataTypes.INTEGER, allowNull: false },
      external_id: { type: DataTypes.STRING(255) },
      type: { type: DataTypes.STRING(8), allowNull: false },
      name: { type: DataTypes.STRING(255) },
      cpfcnpj: { type: DataTypes.STRING(30) },
      cuit_cuil: { type: DataTypes.STRING(50) },
      document: { type: DataTypes.STRING(30) },
      birthday: { type: DataTypes.STRING(18) },
      email: { type: DataTypes.STRING(100), allowNull: false },
      phone: { type: DataTypes.STRING(100) },
      status: { type: DataTypes.STRING(36), allowNull: false, defaultValue: 'unverified' },
      organization: { type: DataTypes.INTEGER },
      locale: { type: DataTypes.STRING(10), defaultValue: 'en' },
      address: { type: DataTypes.TEXT },
      deleted_at: { type: DataTypes.DATE },
      created_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
      updated_at: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    },
    {
      tableName: 'users',
      sequelize,
      timestamps: false, // porque você já tem created_at e updated_at
    }
  );
  return User;
}