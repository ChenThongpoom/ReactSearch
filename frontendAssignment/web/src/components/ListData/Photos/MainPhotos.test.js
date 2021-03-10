import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MainPhoto from "./MainPhoto";

configure({ adapter: new Adapter() });

describe("<MainPhoto/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<MainPhoto photos={["1", "2"]} />);
  });

  it("render <MainPhoto/>", () => {
    expect(wrapper.find("img").props().src).toEqual("1");
  });
});
