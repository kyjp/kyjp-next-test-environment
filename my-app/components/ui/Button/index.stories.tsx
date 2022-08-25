import type { ComponentStory, ComponentMeta } from "@storybook/react"
import Button from './index'

export default {
  title: 'Ui/Button',
  component: Button
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default: ComponentStory<typeof Button> = Template.bind({})

Default.args = {
  label: 'Default'
}

Default.storyName = 'デフォルト'
