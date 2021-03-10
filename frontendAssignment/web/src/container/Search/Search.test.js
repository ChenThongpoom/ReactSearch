import React, { Component } from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";

import { screen } from "@testing-library/dom";

import { configure, shallow, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import Search from "./Search";
import ListData from "../../components/ListData/ListData";

configure({ adapter: new Adapter() });

describe("<Search /> ", () => {
  let wrapper;
  let data;
  let searchInput;

  beforeEach(() => {
    wrapper = shallow(<Search />);
    data = shallow(<ListData />);
    data.setProps({
      photos: ["testPhoto0", "testPhoto1", "testPhoto2", "testPhoto3"],
      key: "1",
      url: "testUrl",
      title: "test",
      desc: "testDescription",
      tag: ["testTag1", "testTag2"],
    });
  });

  afterEach(() => jest.clearAllMocks());

  it("should render <Search/>", () => {
    expect(wrapper.find("search-input")).toBeTruthy();
    expect(wrapper.find("Icon")).toBeTruthy();
    expect(wrapper.find("IoSearch")).toHaveLength(1);
  });

  it("render input tag", () => {
    expect(wrapper.find("input")).toHaveLength(1);
  });

  it("render No result found", () => {
    expect(wrapper.find(".noResText").text()).toEqual("No Result Found!!!");
  });
});

describe("Input value", () => {
  let wrapper;
  let data;
  let searchInput;

  beforeEach(() => {
    wrapper = shallow(<Search />);
    data = shallow(<ListData />);
    const { queryByPlaceholderText } = render(<Search />);

    searchInput = queryByPlaceholderText("หาที่เที่ยวแล้วไปกับ...");
  });

  it("update on change", () => {
    expect(searchInput.value).toBe("");
    fireEvent.change(searchInput, { target: { value: "test" } });

    data.setProps({
      photos: ["testPhoto0", "testPhoto1", "testPhoto2", "testPhoto3"],
      key: "1",
      url: "testUrl",
      title: "test",
      desc: "testDescription",
      tag: ["testTag1", "testTag2"],
    });

    expect(searchInput.value).toBe("test");
    const dataResult = data.find("Title").props();
    expect(dataResult.title).toEqual("test");
  });

  it("Result not Found", () => {
    expect(searchInput.value).toBe("");
    fireEvent.change(searchInput, { target: { value: "asdfasdf" } });

    data.setProps({
      photos: null,
      key: null,
      url: null,
      title: null,
      desc: null,
      tag: null,
    });

    expect(searchInput.value).toBe("asdfasdf");
    const dataResult = data.find("Title").props();
    expect(dataResult.title).toEqual(null);
  });
});
