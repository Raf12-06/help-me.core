import {
  Column,
  DataType,
  ForeignKey,
  Model,
  Table,
} from 'sequelize-typescript';
import { Request } from '../../request/model/request.model';
import { Tag } from './tag.model';

export interface RequestTagCreateAttrs {
  request: number;
  tag: number;
}

@Table({ tableName: 'request-tag' })
export class RequestTag extends Model<RequestTag, RequestTagCreateAttrs> {
  @Column({ type: DataType.INTEGER, allowNull: false })
  @ForeignKey(() => Request)
  request: number;

  @Column({ type: DataType.INTEGER, allowNull: false })
  @ForeignKey(() => Tag)
  tag: number;
}
