import {
  BelongsTo,
  BelongsToMany,
  Column,
  DataType,
  ForeignKey,
  HasMany,
  Model,
  Table,
} from 'sequelize-typescript';
import { Request } from '../../request/model/request.model';
import { RequestTag } from './request-tag.model';

export interface TagCreateAttrs {
  name: string;
}

@Table({ tableName: 'tag' })
export class Tag extends Model<Tag, TagCreateAttrs> {
  @Column({ type: DataType.INTEGER, autoIncrement: true, primaryKey: true })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name: string;

  @Column({ type: DataType.INTEGER })
  @ForeignKey(() => Tag)
  parent: number;

  @HasMany(() => Tag)
  tag: Tag[];

  @BelongsToMany(() => Request, () => RequestTag)
  request_tag: Request[];
}
