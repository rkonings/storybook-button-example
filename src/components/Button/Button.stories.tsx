import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button } from "./Button";

export default {
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Button",
};

export const Primary = Template.bind({});
Primary.args = {
  children: "Button",
  primary: true,
};

export const Subtext = Template.bind({});
Subtext.args = {
  children: "Button",
  subtext: "with subtext",
};
