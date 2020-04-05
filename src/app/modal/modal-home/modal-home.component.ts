import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-modal-home",
  templateUrl: "./modal-home.component.html",
  styleUrls: ["./modal-home.component.css"],
})
export class ModalHomeComponent implements OnInit {
  modalOpen = false;
  items = [
    {
      title: "Question 1?",
      content: "Answer 1",
    },
    {
      title: "Question 2?",
      content: "Answer 2",
    },
    {
      title: "Question 3?",
      content: "Answer 3",
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onClickHandler() {
    this.modalOpen = !this.modalOpen;
  }
}
