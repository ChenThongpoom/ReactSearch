import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ListTag from "./ListTag";
import Search from "../../../container/Search/Search";

configure({ adapter: new Adapter() });

describe("<ListTag/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<ListTag tag="11" />);
  });

  it("render one <ListTag />", () => {
    expect(
      wrapper.contains(<div className="category-container">หมวด - 11</div>)
    ).toEqual(true);
  });

  it("Not render <ListTag/>", () => {
    wrapper.setProps({ tag: null });
    expect(
      wrapper.contains(<div className="category-container">หมวด - </div>)
    ).toEqual(true);
  });
});
