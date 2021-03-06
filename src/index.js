import Button from './Button'

import Card from './Card/Card'
import CardActions from './Card/CardActions'
import CardHorizontalBlock from './Card/CardHorizontalBlock'
import CardMedia from './Card/CardMedia'
import CardPrimary from './Card/CardPrimary'
import CardSubtitle from './Card/CardSubtitle'
import CardSupportingText from './Card/CardSupportingText'
import CardTitle from './Card/CardTitle'

import Checkbox from './Checkbox'

import Dialog from './Dialog/Dialog'
import DialogHeaderTitle from './Dialog/DialogHeaderTitle'

import Drawer from './Drawer/Drawer'
import DrawerHeader from './Drawer/DrawerHeader'
import DrawerNav from './Drawer/DrawerNav'
import DrawerNavItem from './Drawer/DrawerNavItem'

import Fab from './Fab'

import List from './List/List'
import ListDivider from './List/ListDivider'
import ListItem from './List/ListItem'

import Toolbar from './Toolbar/Toolbar'
import ToolbarRow from './Toolbar/ToolbarRow'
import ToolbarSection from './Toolbar/ToolbarSection'

import ripple from './ripple'

const components = {
  Button,

  Card,
  CardActions,
  CardHorizontalBlock,
  CardMedia,
  CardPrimary,
  CardSubtitle,
  CardSupportingText,
  CardTitle,

  Checkbox,

  Dialog,
  DialogHeaderTitle,

  Drawer,
  DrawerHeader,
  DrawerNav,
  DrawerNavItem,

  Fab,

  List,
  ListDivider,
  ListItem,

  Toolbar,
  ToolbarRow,
  ToolbarSection,
}

function plugin (Vue, opts = { prefix: 'Mdc' }) {
  const { prefix } = opts
  const compNames = Object.keys(components)
  for (let i = 0; i < compNames.length; i++) {
    const name = compNames[i]
    Vue.component(`${prefix}${name}`, components[name])
  }
  Vue.directive('ripple', ripple)
}

export default plugin
// Export all components too
const version = '__VERSION__'
export {
  version,

  // components
  Button,

  Card,
  CardActions,
  CardHorizontalBlock,
  CardMedia,
  CardPrimary,
  CardSubtitle,
  CardSupportingText,
  CardTitle,

  Checkbox,

  Dialog,
  DialogHeaderTitle,

  Drawer,
  DrawerHeader,
  DrawerNav,
  DrawerNavItem,

  Fab,

  List,
  ListDivider,
  ListItem,

  Toolbar,
  ToolbarRow,
  ToolbarSection,

  // directives
  ripple,
}
