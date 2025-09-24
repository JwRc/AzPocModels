import { Table, Column, Model, DataType, PrimaryKey, AutoIncrement, Default } from 'sequelize-typescript';

@Table({ tableName: 'users', timestamps: false })
export class User extends Model<User> {

  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  })
  declare id: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  partner!: number;

  @Column({ type: DataType.STRING(36), allowNull: false, unique: true })
  uuid!: string;

  @Column(DataType.STRING(255))
  external_id?: string;

  @Column({ type: DataType.STRING(8), allowNull: false })
  type!: string;

  @Column(DataType.STRING(255))
  name?: string;

  @Column(DataType.STRING(30))
  cpfcnpj?: string;

  @Column(DataType.STRING(50))
  cuit_cuil?: string;

  @Column(DataType.STRING(30))
  document?: string;

  @Column(DataType.STRING(18))
  birthday?: string;

  @Column({ type: DataType.STRING(100), allowNull: false })
  email!: string;

  @Column(DataType.STRING(100))
  phone?: string;

  @Default('unverified')
  @Column({ type: DataType.STRING(36), allowNull: false })
  status!: string;

  @Column(DataType.INTEGER)
  organization?: number;

  @Default('en')
  @Column({ type: DataType.STRING(10) })
  locale?: string;

  @Column(DataType.TEXT)
  address?: string;

  @Column(DataType.DATE)
  deleted_at?: Date;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  created_at!: Date;

  @Column({ type: DataType.DATE, allowNull: false, defaultValue: DataType.NOW })
  updated_at!: Date;
}