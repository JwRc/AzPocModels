import { Model } from 'sequelize-typescript';
export declare class User extends Model<User> {
    id: number;
    partner: number;
    uuid: string;
    external_id: string | null;
    type: string;
    name: string | null;
    cpfcnpj: string | null;
    cuit_cuil: string | null;
    document: string | null;
    birthday: string | null;
    email: string;
    phone: string | null;
    status: string;
    organization: number | null;
    locale: string | null;
    address: string | null;
    deleted_at: Date | null;
    created_at: Date;
    updated_at: Date;
}
