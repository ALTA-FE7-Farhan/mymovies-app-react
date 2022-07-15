import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <nav className="sticky top-0 w-full border-gray-200 sm:px-4 py-2.5 bg-zinc-800">
        <h1 className="text-slate-200">Header</h1>
      </nav>
    );
  }
}
