<template>
  <div>
    <div>Mint Ui组件库的使用</div>
    <mt-tabbar>
      <mt-tab-item id="外卖">
        <img src="../../assets/外卖.png" height="100" width="100"/>
        <p>外卖</p>
      </mt-tab-item>
      <mt-tab-item id="订单">
        <img src="../../assets/订单.png" height="100" width="100"/>
        <p>订单</p>
      </mt-tab-item>
      <mt-tab-item id="发现">
        <img src="../../assets/发现.png" height="100" width="100"/>
        <p>发现</p>
      </mt-tab-item>
      <mt-tab-item id="我的">
        <img src="../../assets/我 的.png" height="100" width="100"/>
        <p>我的</p>
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
    import Vue from 'vue';
    import {Toast} from 'mint-ui';
    import {MessageBox} from 'mint-ui';
    import {Tabbar,TabItem} from 'mint-ui';
    Vue.component(Tabbar.name,Tabbar);
    Vue.component(TabItem.name,TabItem);
    export default {
        name: "index7",
        data(){
            return{

            }
        },
        mounted(){
            // Toast('这是一个提示信息');
            // MessageBox('提示','操作成功');
        }
    }
</script>

<style scoped>

</style>
