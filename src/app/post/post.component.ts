import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent implements OnInit {
  @Input() postRef: Post;
  @Output() deletePost = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  // deletePost method that triggers the deleted event emitter
  emitDeleteEvent = (): void => {
    this.deletePost.emit();
  };
}
