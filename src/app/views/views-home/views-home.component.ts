import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-views-home",
  templateUrl: "./views-home.component.html",
  styleUrls: ["./views-home.component.css"]
})
export class ViewsHomeComponent implements OnInit {
  stats = [
    { value: 204, label: "No. of Users" },
    { value: 3254, label: "Revenue" },
    { value: 90, label: "Reviews" }
  ];

  items = [
    {
      image: "/assets/images/couch.jpeg",
      title: "Couch",
      description: "A comfortable couch to sit on"
    },
    {
      image: "/assets/images/dresser.jpeg",
      title: "Dresser",
      description: "Enough space for my cloths"
    }
  ];

  constructor() {}

  ngOnInit(): void {}
}
