import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Title from "./Title";

configure({ adapter: new Adapter() });

describe("<Title/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Title url="1" title="title" />);
  });

  it("render <Photos/>", () => {
    expect(wrapper.find("a").props().href).toEqual("1");
    expect(wrapper.find("a").text()).toEqual("title");
  });
});
