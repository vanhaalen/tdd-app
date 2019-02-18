import { shallowMount } from "@vue/test-utils";
import UserView from "@/views/UserView";
import VUserSearchForm from "@/components/VUserSearchForm";
import VUserProfile from "@/components/VUserProfile";

describe("UserView", () => {
  const build = () => {
    const wrapper = shallowMount(UserView);

    return {
      wrapper,
      userSearchForm: () => wrapper.find(VUserSearchForm),
      userProfile: () => wrapper.find(VUserProfile)
    };
  };

  it("should render the component", () => {
    // arrange
    const { wrapper } = build();

    // assert
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("should render main child components", () => {
    // arrange
    const { userSearchForm, userProfile } = build();

    // assert
    expect(userSearchForm().exists()).toBe(true);
    expect(userProfile().exists()).toBe(true);
  });

  it("should pass a prop to the user profile component", () => {
    // arrange
    const { wrapper, userProfile } = build();
    wrapper.setData({
      user: {
        name: "Daniel"
      }
    });

    // assert
    expect(userProfile().vm.user).toBe(wrapper.vm.user);
  });
});
