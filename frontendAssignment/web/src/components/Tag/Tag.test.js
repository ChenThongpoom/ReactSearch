import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Tag from "./Tag";

configure({ adapter: new Adapter() });

describe("<Tag/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Tag tag="1" clicked="clicked!!" />);
  });

  it("render <Photos/>", () => {
    expect(wrapper.find(".tag").props().onClick).toEqual("clicked!!");
    expect(wrapper.find(".tag").text()).toEqual("1");
  });
});
