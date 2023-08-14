import { Component } from "../../core/";

export class TheHeader extends Component {
  constructor() {
    super({
      tagName: "header",
    });
  }
  render() {
    this.el.className = "header py-4";
    this.el.id = "header";
    this.el.innerHTML = /* html */ `
      <div class="container mx-auto px-4">
        <h1 class="text-md">EMS(Employees Management System) JS</h1>
      </div>
    `;
  }
}
