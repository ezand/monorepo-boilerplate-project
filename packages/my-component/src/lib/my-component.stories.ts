import type { Meta, StoryObj } from '@storybook/web-components';
import './my-component';

const meta: Meta = {
  component: 'my-component',
  title: 'Components/MyComponent',
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  name: 'Default',
  args: {
    name: 'you legend',
  },
};
