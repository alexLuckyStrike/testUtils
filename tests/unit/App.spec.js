import { mount } from "@vue/test-utils";
import HelloWorld from "@/components/HelloWorld.vue";
import App from "@/App.vue";

describe("AppTestComponent", () => {
  let wrapper;
  let container;

  const findButtonByText = (text) =>
    wrapper.findAll("button").wrappers.find((elem) => elem.text() === text);

  const createComponent = () => {
    wrapper = mount(App);
  };

  // const produceComponent = () => {
  //   container = mount(HelloWorld);
  // };

  afterEach(() => {
    wrapper.destroy();
  });

  it("count the result", async () => {
    createComponent();
    console.log("wrapper:before", wrapper.html());
    await findButtonByText("+").trigger("click");
    // console.log("wrapper:", wrapper.vm.counter);
    console.log("wrapper:after", wrapper.html());
    expect(wrapper.text()).toContain("1");
  });
});
