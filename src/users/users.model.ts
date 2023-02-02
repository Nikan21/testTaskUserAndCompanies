import { Model, Column, DataType, Table, HasMany } from "sequelize-typescript";
import { Company } from "src/companies/companies.model";

interface UserCreationAttrs {
    firstName: string;
    lastName: string;
    nickname: string;
    phoneNumber: number;
    position: string;
    description: string;
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, allowNull: true})
    firstName: string;

    @Column({type: DataType.STRING, allowNull: true})
    lastName: string;

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    nickname: string;

    @Column({type: DataType.INTEGER, unique: true, allowNull: true})
    phoneNumber: number;

    @Column({type: DataType.STRING, allowNull: true})
    position: string;

    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    email: string;

    @Column({type: DataType.STRING, allowNull: true})
    password: string;

/*     @HasMany(() => Company)
    companies: Company[]; */
}