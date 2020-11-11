import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css'],
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>();
  public show: boolean = false;
  public thoughtButton: any = 'Show';

  constructor() {}

  ngOnInit(): void {}

  emitSubmittedEvent = (form: NgForm): void => {
    let newPost: Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    this.submitted.emit(newPost);
    form.reset();
  };

  toggle() {
    this.show = !this.show;
    if (this.show) this.thoughtButton = 'Hide';
    else;
    {
      this.thoughtButton = 'Show';
    }
  }
}
