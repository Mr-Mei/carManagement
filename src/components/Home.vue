<template>
  <el-row class="container">
    <el-col :span="24" class="header">
      <Header></Header>
    </el-col>
    <el-col :span="24" class="remain">
      <LeftNav :navMenus="menuData"></LeftNav>
      <Main :navMenus="menuData"></Main>
    </el-col>
  </el-row>
</template>

<script>
import Header from '../components/Header'
import LeftNav from '../components/LeftNav'
import Main from '../components/Main'
import store from '../store/index'
export default {
  data () {
    return {
      menuData: [
        {
          // 一级菜单目录
          entity: {
            id: 'AM',
            name: '汽车管理',
            icon: 'icon iconfont icon-box',
            path: 'automobileMng'
          },
          // 二级菜单目录
          childs: [
            {
              entity: {
                id: 'AIM',
                name: '汽车信息管理',
                icon: '',
                path: 'automobileInfMng'
              }
            },
            {
              entity: {
                id: 'ABM',
                name: '汽车品牌管理',
                icon: '',
                path: 'automobileBrandMng'
              }
            }
          ]
        },
        {
          // 一级
          entity: {
            id: 'SM',
            name: '库存管理',
            icon: 'icon iconfont icon-similarproduct',
            path: 'stockManage'
          }
        },
        {
          // 一级
          entity: {
            id: 'DB',
            name: '仪表盘',
            icon: 'icon iconfont icon-viewgallery',
            path: 'Dashboard'
          }
        }
      ]
    }
  },
  store,
  components: {
    Header,
    LeftNav,
    Main
  }
}
</script>

<style lang="scss">
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  overflow: hidden;
  .header {
  height: 60px;
  line-height: 60px;
  }
  .remain {
    display: flex;
    position: absolute;
    top: 60px;
    bottom: 0px;
  }
}
</style>
