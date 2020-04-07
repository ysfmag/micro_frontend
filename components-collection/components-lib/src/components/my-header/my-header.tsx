import { Component, Prop, h } from "@stencil/core";

@Component({
  tag: "my-header",
  styleUrl: "my-header.css",
  shadow: true,
})
export class myHeader {
  @Prop() title: string;

  render() {
    return <h1> {this.title}</h1>;
  }
}
