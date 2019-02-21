import { shallowMount } from "@vue/test-utils";
import VUserSearchForm from "@/components/VUserSearchForm";

describe("VUserSearchForm", () => {
  const build = () => {
    const wrapper = shallowMount(VUserSearchForm, {
      attachToDocument: true
    });

    return {
      wrapper,
      input: () => wrapper.find("input"),
      button: () => wrapper.find("button")
    };
  };

  it("should render the component", () => {
    // arrange
    const { wrapper } = build();

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render the main child components", () => {
    // arrange
    const { input, button } = build();

    // assert
    expect(input().exists()).toBe(true);
    expect(button().exists()).toBe(true);
  });

  it("should emit 'submitted' event when submitting the form", () => {
    // arrange
    const expectedUser = "kuroski";
    const { wrapper, input, button } = build();
    input().element.value = expectedUser;

    // act
    input().trigger("input");
    button().trigger("click");
    // button().trigger("submit");

    // assert
    expect(wrapper.emitted().submitted[0]).toEqual([expectedUser]);
  });
});
