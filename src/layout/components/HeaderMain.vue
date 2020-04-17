<template>
  <div class="headerMain">
    <div class="logo">
      <el-image :src="url" style="width: 55px" fit="fill" />
    </div>
    <div class="content">
      <div class="firstNav">
        <el-menu :default-active="activeMenu" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <template v-for="nav in firstNavs">
            <el-menu-item
              v-if="!nav.hidden && nav.meta"
              :key="nav.path"
              :index="nav.path"
            >
              {{ nav.meta.title || nav.meta.subTitle }}
            </el-menu-item>
          </template>
        </el-menu>
      </div>
      <div class="right-menu">
        <el-dropdown class="avatar-container" trigger="click">
          <div class="avatar-wrapper">
            <img :src="avatar+'?imageView2/1/w/80/h/80'" class="user-avatar">
            <i class="el-icon-caret-bottom" />
          </div>
          <el-dropdown-menu slot="dropdown" class="user-dropdown">
            <router-link to="/">
              <el-dropdown-item>
                Home
              </el-dropdown-item>
            </router-link>
            <a target="_blank" href="https://github.com/PanJiaChen/vue-admin-template/">
              <el-dropdown-item>Github</el-dropdown-item>
            </a>
            <a target="_blank" href="https://panjiachen.github.io/vue-element-admin-site/#/">
              <el-dropdown-item>Docs</el-dropdown-item>
            </a>
            <el-dropdown-item divided @click.native="logout">
              <span style="display:block;">Log Out</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import path from 'path'
import { isExternal } from '@/utils/validate'

export default {
  name: 'HeaderMain',
  components: {
  },
  data() {
    return {
      url: require('../../assets/img/logo.jpg'),
      firstNavs: []
    }
  },
  computed: {
    ...mapGetters([
      'avatar'
    ]),
    activeMenu() {
      const route = this.$route
      const { meta, path, matched } = route
      // if set path, the sidebar will highlight the path you set
      if (matched[0] && matched[0].path) {
        return matched[0].path
      } else {
        if (meta.activeMenu) {
          return meta.activeMenu
        }
      }
      return path
    }
  },
  created() {
    this.init()
  },
  methods: {
    init() {
      this.firstNavs = this.$router.options.routes
      console.log('firstNavs', this.firstNavs)
      this.$store.dispatch('user/setActiveMenu', this.activeMenu)
    },
    resolvePath(routePath) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    },
    handleSelect(key, keyPath) {
      this.$store.dispatch('user/setActiveMenu', key)
      // this.setActiveMenu(key)
    }
    // ...mapActions(['user/setActiveMenu'])
  }
}
</script>

<style lang="scss" scoped>
  .headerMain {
    display: flex;

    .logo {
      width: 210px;
    }

    .content {
      display: flex;
      flex: 1;
      justify-content: space-between;

      .right-menu {
        line-height: 50px;
        padding: 10px 0;
        height: 60px;

        &:focus {
          outline: none;
        }

        .right-menu-item {
          display: inline-block;
          padding: 0 8px;
          font-size: 18px;
          color: #5a5e66;
          vertical-align: text-bottom;

          &.hover-effect {
            cursor: pointer;
            transition: background .3s;

            &:hover {
              background: rgba(0, 0, 0, .025)
            }
          }
        }

        .avatar-container {
          margin-right: 30px;

          .avatar-wrapper {
            position: relative;

            .user-avatar {
              cursor: pointer;
              width: 40px;
              height: 40px;
              border-radius: 10px;
            }

            .el-icon-caret-bottom {
              cursor: pointer;
              position: absolute;
              right: -20px;
              top: 25px;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
</style>
