import { Table, Column, Model, DataType } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  declare id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  declare partner: number;

  @Column({ type: DataType.STRING(36), allowNull: false, unique: true })
  declare uuid: string;

  @Column({ type: DataType.STRING(255), allowNull: true })
  declare external_id: string | null;

  @Column({ type: DataType.CHAR(8), allowNull: false })
  declare type: string;

  @Column({ type: DataType.STRING(255), allowNull: true })
  declare name: string | null;

  @Column({ type: DataType.STRING(30), allowNull: true })
  declare cpfcnpj: string | null;

  @Column({ type: DataType.STRING(50), allowNull: true })
  declare cuit_cuil: string | null;

  @Column({ type: DataType.STRING(30), allowNull: true })
  declare document: string | null;

  @Column({ type: DataType.STRING(18), allowNull: true })
  declare birthday: string | null;

  @Column({ type: DataType.STRING(100), allowNull: false })
  declare email: string;

  @Column({ type: DataType.STRING(100), allowNull: true })
  declare phone: string | null;

  @Column({ type: DataType.STRING(36), allowNull: false, defaultValue: 'unverified' })
  declare status: string;

  @Column({ type: DataType.INTEGER, allowNull: true })
  declare organization: number | null;

  @Column({ type: DataType.STRING(10), allowNull: true, defaultValue: 'en' })
  declare locale: string | null;

  @Column({ type: DataType.TEXT, allowNull: true })
  declare address: string | null;

  @Column({ type: DataType.DATE, allowNull: true })
  declare deleted_at: Date | null;

  @Column({ type: DataType.DATE, allowNull: false })
  declare created_at: Date;

  @Column({ type: DataType.DATE, allowNull: false })
  declare updated_at: Date;
}