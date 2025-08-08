import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class BlogService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {}

  findAll() {
    return this.postRepo.find();
  }

  findOne(id: number) {
    return this.postRepo.findOneBy({ id });
  }

  create(data: CreatePostDto) {
    const post = this.postRepo.create(data);
    return this.postRepo.save(post);
  }

  update(id: number, data: UpdatePostDto) {
    return this.postRepo.update(id, data);
  }

  remove(id: number) {
    return this.postRepo.delete(id);
  }
}
