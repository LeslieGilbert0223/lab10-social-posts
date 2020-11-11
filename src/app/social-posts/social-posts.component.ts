import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css'],
})
export class SocialPostsComponent implements OnInit {
  posts: Post[] = [
    {
      title: 'Grand Chripus',
      thought: 'GC is cool',
    },
    {
      title: 'Lorem 1',
      thought: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
      title: 'Lorem 2',
      thought: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
    {
      title: 'Lorem 3',
      thought: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  // onDelete method that responds to the deleted event
  onDelete = (index: number): void => {
    this.posts.splice(index, 1);
  };

  // submitPost method that triggers the submitted event emitter
  submitPost = (post: Post): void => {
    this.posts.unshift(post);
  };
}
