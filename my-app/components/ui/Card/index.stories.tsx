import type { ComponentStory, ComponentMeta } from "@storybook/react"
import Card from './index'

export default {
  title: 'Ui/Card',
  component: Card
} as ComponentMeta<typeof Card>

const Template: ComponentStory<typeof Card> = args => <Card {...args} />

export const Default: ComponentStory<typeof Card> = Template.bind({})

Default.args = {
  name: 'Default'
}

Default.storyName = 'デフォルト'
