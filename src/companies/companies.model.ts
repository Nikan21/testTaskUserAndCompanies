import { Model, Column, DataType, Table, ForeignKey, BelongsTo } from "sequelize-typescript";
import { User } from "src/users/users.model";

interface CompanyCreationAttrs {
    name: string;
    address: string;
    serviceOfActivity: string;
    numberOfEmployess: number;
    description: string;
    type: string;
    userId: number
}

@Table({tableName: 'companies'})
export class Company extends Model<Company, CompanyCreationAttrs> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number

    @Column({type: DataType.STRING, unique: true, allowNull: true})
    name: string;

    @Column({type: DataType.STRING, allowNull: true})
    address: string;

    @Column({type: DataType.STRING, allowNull: true})
    serviceOfActivity: string;

    @Column({type: DataType.INTEGER, allowNull: true})
    numberOfEmployess: number;

    @Column({type: DataType.STRING, allowNull: true})
    description: string;

    @Column({type: DataType.STRING, allowNull: true})
    type: string;

    @ForeignKey(() => User)
    @Column({type: DataType.INTEGER})
    userId: number;
    
    @BelongsTo(() => User)
    user: User;
}