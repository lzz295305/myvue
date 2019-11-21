import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import child from '../components/child'
import child_a from "../components/child_a"
import 练习1 from "../components/练习1";
import demo1 from "../pages/demo1/index";
import demo2 from "../pages/demo2/index2";
import demo3 from '../pages/demo3/index3';
import demo4 from '../pages/demo4/index4';
import demo5 from '../pages/demo5/index5';
import demo6 from '../pages/demo6/index6';
import demo7 from '../pages/demo7/index7';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[{
        path: '/HelloWorld/child',
        name: 'child',
        component: child,
        children:[{
          path:'/HelloWorld/child/child_a',
          name:'child_a',
          component:child_a
        }]
      }]
    },
    {
      path: '/练习1',
      name: '练习1',
      component: 练习1,
    },
    {
      path: '/demo1',
      name: 'demo1',
      component: demo1,
    },
    {
      path: '/demo2',
      name: 'demo2',
      component: demo2,
    },
    {
      path: '/demo3',
      name: 'demo3',
      component: demo3,
    },
    {
      path: '/demo4',
      name: 'demo4',
      component: demo4,
    },
    {
      path: '/demo5',
      name: 'demo5',
      component: demo5,
    },
    {
      path: '/demo6',
      name: 'demo6',
      component: demo6,
    },
    {
      path: '/demo7',
      name: 'demo7',
      component: demo7,
    },
  ]
})
