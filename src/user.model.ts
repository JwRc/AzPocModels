import { Sequelize, DataTypes, Model, Optional } from 'sequelize';

interface UserAttributes {
  id: number;
  partner: number;
  uuid: string;
  external_id?: string;
  type: string;
  name?: string;
  cpfcnpj?: string;
  cuit_cuil?: string;
  document?: string;
  birthday?: string;
  email: string;
  phone?: string;
  status: string;
  organization?: number;
  locale?: string;
  address?: string;
  deleted_at?: Date;
  created_at: Date;
  updated_at: Date;
}

// Para criar um usuário novo sem o id (auto_increment) e campos opcionais
interface UserCreationAttributes extends Optional<UserAttributes, 'id' | 'external_id' | 'name' | 'cpfcnpj' | 'cuit_cuil' | 'document' | 'birthday' | 'phone' | 'organization' | 'locale' | 'address' | 'deleted_at'> {}

export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public partner!: number;
  public uuid!: string;
  public external_id?: string;
  public type!: string;
  public name?: string;
  public cpfcnpj?: string;
  public cuit_cuil?: string;
  public document?: string;
  public birthday?: string;
  public email!: string;
  public phone?: string;
  public status!: string;
  public organization?: number;
  public locale?: string;
  public address?: string;
  public deleted_at?: Date;
  public created_at!: Date;
  public updated_at!: Date;
}

export function initUserModels(sequelize: Sequelize) {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
      },
      partner: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      uuid: {
        type: DataTypes.STRING(36),
        allowNull: false,
        unique: true,
      },
      external_id: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      type: {
        type: DataTypes.CHAR(8),
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
      cpfcnpj: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      cuit_cuil: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      document: {
        type: DataTypes.STRING(30),
        allowNull: true,
      },
      birthday: {
        type: DataTypes.STRING(18),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      status: {
        type: DataTypes.STRING(36),
        allowNull: false,
        defaultValue: 'unverified',
      },
      organization: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      locale: {
        type: DataTypes.STRING(10),
        allowNull: true,
        defaultValue: 'en',
      },
      address: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      deleted_at: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
    },
    {
      sequelize,
      tableName: 'users',
      timestamps: false, // Como você tem created_at e updated_at manualmente
      indexes: [
        { fields: ['partner'] },
        { fields: ['type'] },
        { fields: ['cpfcnpj'] },
        { fields: ['email'] },
        { fields: ['organization'] },
      ],
    },
  );

  return { User };
}