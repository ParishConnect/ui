import { Avatar } from './Avatar'
import { Box } from '../Box'
import React from 'react'
import { Strong } from '../Text'

export default {
  title: 'Avatar',
  component: Avatar,
}

export const All = () => (
  <Box margin={3}>
    <Strong marginBottom={2} level={600}>
      Default Usage
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 40px)" gridGap={3}>
      <Avatar name="Evan Hennessy" />
      <Avatar name="Gary Prennan" />
      <Avatar name="Teal Person" />
      <Avatar name="Jimbo J" />
      <Avatar name="Aaron Paul" />
      <Avatar name="Kylie Benson" />
      <Avatar name="Zulu Zaran" />
    </Box>
    <Strong marginY={2} level={600}>
      Solid Variations
    </Strong>
    <Box display="grid" gridTemplateColumns="repeat(auto-fit, 40px)" gridGap={3}>
      <Avatar solid name="Evan Hennessy" />
      <Avatar solid name="Gary Prennan" />
      <Avatar solid name="Teal Person" />
      <Avatar solid name="Jimbo J" />
      <Avatar solid name="Aaron Paul" />
      <Avatar solid name="Kylie Benson" />
      <Avatar solid name="Zulu Zaran" />
    </Box>
    <Strong display="block" marginY={2} level={600}>
      Image
    </Strong>
    <Avatar
      src="https://unsplash.imgix.net/photo-1492562080023-ab3db95bfbce?q=80&w=250&fit=facearea&auto=format&ixid=eyJhcHBfaWQiOjEyMDd9&h=250&facepad=2"
      name="Zulu Zaran"
    />
    <Avatar
      src="https://unsp.imgix.net/photo-1492562080023-ab3db95bfbce?q=80&w=250&fit=facearea&auto=format&ixid=eyJhcHBfaWQiOjEyMDd9&h=250&facepad=2"
      name="No Image"
    />
    <Strong display="block" marginY={2} level={600}>
      Custom Color (green)
    </Strong>
    <Avatar name="Evan Hennessy" color="green" />
    <Strong display="block" marginY={2} level={600}>
      Big
    </Strong>
    <Avatar name="Evan Hennessy" size={10} />
    <Strong display="block" marginY={2} level={600}>
      Small
    </Strong>
    <Avatar name="Evan Hennessy" size={3} />
  </Box>
)
