import {Table, Column, Model, HasMany, PrimaryKey, CreatedAt, UpdatedAt, ForeignKey} from 'sequelize-typescript';
import { User } from '../../users/models/User';

// Sequalize decorators to indicate that our model will correspond to table in our postgreSQL table + our instance variables will be ther eand define what kinds
@Table
export class FeedItem extends Model<FeedItem> {
  @Column
  public caption!: string;

  @Column
  public url!: string;


  // Special decorators @CreatedAt and @UpdatedAt to tell postgreSQL interface to keep these up to date
  @Column
  @CreatedAt
  public createdAt: Date = new Date();

  @Column
  @UpdatedAt
  public updatedAt: Date = new Date();
}
