import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Photos from "./Photos";

configure({ adapter: new Adapter() });

describe("<Photos/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Photos photos={["0", "1", "2", "3"]} />);
  });

  it("render <Photos/>", () => {
    expect(wrapper.find(".fst").props().src).toEqual("1");
    expect(wrapper.find(".snd").props().src).toEqual("2");
    expect(wrapper.find(".trd").props().src).toEqual("3");
  });
});
