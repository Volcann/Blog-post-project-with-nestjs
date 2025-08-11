import {
  Controller,
  Post as PostMethod,
  Get,
  Body,
  UseGuards,
  Request,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('posts')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @UseGuards(JwtAuthGuard)
  @PostMethod()
  createPost(@Body() body: { title: string; content: string }, @Request() req) {
    return this.blogService.createPost(body.title, body.content, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  getPosts() {
    return this.blogService.findAll();
  }
}
