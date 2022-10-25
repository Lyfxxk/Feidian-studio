import Vue from 'vue'
import App from './App.vue'
import { Button,Radio,Container,Main,Header,Aside,Menu,
Submenu,MenuItem,MenuItemGroup,Dropdown,
DropdownMenu,DropdownItem,
Row,Col,Card,Table,TableColumn
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/less/index.less'

import router from './router'
import store from './store'
import http from 'axios'
import './api/mock.js'

Vue.config.productionTip = false
Vue.use(Button)
Vue.use(Radio)
Vue.use(Container)
Vue.use(Main)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)

Vue.prototype.$http=http

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
