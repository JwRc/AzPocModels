import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
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
