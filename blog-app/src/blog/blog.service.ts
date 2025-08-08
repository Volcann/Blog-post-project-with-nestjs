import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './blog.entity';
import { User } from '../users/users.entity';

@Injectable()
export class BlogService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  createPost(title: string, content: string, user: User) {
    const post = this.postRepo.create({ title, content, author: user });
    return this.postRepo.save(post);
  }

  findAll() {
    return this.postRepo.find({ relations: ['author'] });
  }
}
