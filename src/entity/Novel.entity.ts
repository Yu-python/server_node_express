import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm'
import Classify from './Classify.entity';

@Entity()
export default class Novel {
    @PrimaryGeneratedColumn('uuid', { comment: '主键' })
    id: string;

    @Column({ name: 'author_name', comment: '作者名' })
    authorName: string;

    @Column({ name: 'book_name', comment: '小说名' })
    bookName: string;

    @Column({ name: 'book_desc', comment: '小说描述', default: '' })
    bookDesc: string;

    @Column({ name: 'book_cover_url', comment: '小说封面', default: 'https://novel.dkvirus.top/images/cover.png' })
    bookCoverUrl: string;

    @Column({ name: 'book_url', comment: '小说网络地址，可以查询所有章节' })
    bookUrl: string;

    @Column('date', { name: 'last_update_at', comment: '小说最后更新时间，业务字段' })
    lastUpdateAt: Date;

    @CreateDateColumn({ comment: '创建时间', name: 'create_time', select: false })
    createTime: Date;

    @UpdateDateColumn({ comment: '更新时间', name: 'update_time', select: false })
    updateTime: Date;

    @ManyToOne(() => Classify, classify => classify.novels, { nullable: false })
    @JoinColumn({ name: 'classify_id' })
    classify: Classify;
}