import React, { useState } from 'react'
import { Box } from '../Box'
import { Heading } from '../Text'
import { Menu } from './Menu'
import { MenuItem } from './MenuItem'
import { MenuGroup } from './MenuGroup'
import { Popover } from '../Popover/Popover'
import { Button } from '../Button'
import { MenuDivider } from './MenuDivider'
import { MenuOption } from './MenuOption'
import { TrashIcon, ShieldCrossIcon } from '../Icon'
import { MenuOptionsGroup } from './MenuOptionsGroup'

export default {
  title: 'Menu',
  component: Menu,
}

export const menu = () => (
  <Box margin={3}>
    <Heading marginBottom={2}>Menu</Heading>
    <Box maxWidth={40}>
      <Menu>
        <MenuGroup>
          <MenuItem secondaryText="⌘K">Close...</MenuItem>
          <MenuItem secondaryText="⌘F">Search...</MenuItem>
          <MenuItem secondaryText="⎋">Shutdown...</MenuItem>
        </MenuGroup>
        <MenuDivider />
        <MenuGroup>
          <MenuItem intent="danger" icon={TrashIcon}>
            Delete...
          </MenuItem>
        </MenuGroup>
      </Menu>
    </Box>
  </Box>
)

export const menuGroup = () => (
  <Box margin={3}>
    <Heading marginBottom={2}>Menu Group</Heading>
    <Popover
      maxWidth={40}
      content={
        <Menu>
          <MenuGroup title="Items">
            <MenuItem secondaryText="⌘K">Close...</MenuItem>
            <MenuItem secondaryText="⌘F">Search...</MenuItem>
            <MenuItem secondaryText="⎋">Shutdown...</MenuItem>
          </MenuGroup>
        </Menu>
      }
    >
      <Button>Open</Button>
    </Popover>
  </Box>
)

export const menuOptions = () => {
  const [order, setOrder] = useState<string | number>('asc')
  const [visible, setVisible] = useState<string | number>('email')
  return (
    <Box margin={3}>
      <Heading marginBottom={2}>Menu Options Group</Heading>
      <Popover
        maxWidth={40}
        content={
          <Menu>
            <MenuOptionsGroup
              title="Order"
              options={[
                { label: 'Ascending', value: 'asc' },
                { label: 'Descending', value: 'desc' },
              ]}
              onChange={value => setOrder(value)}
              selected={order}
            />
            <MenuDivider />
            <MenuOptionsGroup
              title="Visible"
              options={[
                { label: 'Email', value: 'email' },
                { label: 'Phone', value: 'phone' },
                { label: 'State', value: 'state' },
                { label: 'Country', value: 'country' },
                { label: 'Type', value: 'type' },
              ]}
              onChange={value => setVisible(value)}
              selected={visible}
            />
          </Menu>
        }
      >
        <Button>Open</Button>
      </Popover>
    </Box>
  )
}
