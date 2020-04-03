import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-collections-home",
  templateUrl: "./collections-home.component.html",
  styleUrls: ["./collections-home.component.css"]
})
export class CollectionsHomeComponent implements OnInit {
  data = [
    { name: "Rabby", age: 27, occupation: "Engineer" },
    { name: "John Doe", age: 24, occupation: "Designer" },
    { name: "Jane Doe", age: 31, occupation: "Animator" }
  ];

  headers = [
    { key: "name", label: "Name" },
    { key: "age", label: "Age" },
    { key: "occupation", label: "Occupation" }
  ];

  constructor() {}

  ngOnInit(): void {}
}
