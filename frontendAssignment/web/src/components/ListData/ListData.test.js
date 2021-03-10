import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import ListData from "./ListData";
import Title from "./Title/Title";
import Description from "./Description/Description";
import ListTag from "./ListTag/ListTag";
import Photos from "./Photos/Photos";

configure({ adapter: new Adapter() });

describe("<ListData /> ", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <ListData
        photos={["testPhoto0", "testPhoto1", "testPhoto2", "testPhoto3"]}
        url=""
        title="asdfaf"
        desc="asfdasfd"
        tag={["testTag1", "testTag2"]}
      />
    );
  });

  it("render one <Title />", () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });

  it("render one <Description/>", () => {
    expect(wrapper.find(Description)).toHaveLength(1);
  });

  it("render one <ListTag/>", () => {
    expect(wrapper.find(ListTag)).toHaveLength(1);
  });

  it("render one list of <Photos/>", () => {
    expect(wrapper.find(Photos)).toHaveLength(1);
  });

  it("render one <ListTag/>", () => {
    expect(wrapper.find(ListTag)).toHaveLength(1);
  });
});
