import 'babel-polyfill'
import React from 'react'
import { expect } from 'chai'
import { createRenderer } from 'react-addons-test-utils'

if (global) {
  global.expect = expect
  global.React = React
  global.createRenderer = createRenderer
}
