import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Description from "./Description";

configure({ adapter: new Adapter() });

describe("<Description/>", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallow(<Description />);
  });

  it("render <Description />", () => {
    wrapper.setProps({ desc: "sadf", url: "sadfas" });
    expect(wrapper.contains(<div className="description">sadf </div>)).toEqual(
      true
    );
    expect(
      wrapper.contains(
        <a className="more-text" href="sadfas">
          อ่านต่อ
        </a>
      )
    ).toEqual(true);
  });
});
