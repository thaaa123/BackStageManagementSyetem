<template>
  <div class="organ-structure-container">
    <el-row :gutter="10">
      <el-col :span="6">
        <!-- 公司结构树 -->
        <companyTree :data="companyTreeData" @clickCompanyNote="handleClickCompanyNote" />
      </el-col>
      <el-col :span="18">
        <!-- 岗位 -->
        <post :data="postData" @clickPost="handleClickPost" @resetPostDataParam="resetPostDataParam" />
        <!-- 岗位成员 -->
        <postMember :data="postMemberData" />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import viewport from '@/mixins/viewport'
import { companyTreeData, postData, postMemberData } from './data'
import CompanyTree from './components/CompanyTree/index'
import PostMember from './components/PostMember/index'
import Post from './components/Post/index'

export default {
  name: 'OrganStructureContainer',
  components: {
    'companyTree': CompanyTree,
    'post': Post,
    'postMember': PostMember
  },
  mixins: [viewport],
  data() {
    return {
      companyTreeData: [],
      postData: {},
      postMemberData: {},
      postDataParam: {
        size: 10,
        currentPage: 1
      },
      postMemberParam: {
        size: 10,
        currentPage: 1
      }
    }
  },
  mounted() {
    this.init()
  },
  methods: {
    init() {
      this.getCompanyTreeData()
    },
    // 点击公司组织节点
    handleClickCompanyNote(data) {
      this.resetPostDataParam({ size: 10, currentPage: 1 })
      this.postMemberData = {}
    },
    // 点击岗位
    handleClickPost(data) {
      console.log('data', data)
      this.resetPostMemberParam({ size: 10, currentPage: 1 })
    },
    // 获取 [公司组织] 数据
    getCompanyTreeData() {
      this.companyTreeData = companyTreeData
    },
    // 获取 [组织岗位] 数据
    getPostData() {
      this.postData = postData
    },
    // 获取 [岗位成员] 数据
    getMemberPostData() {
      this.postMemberData = postMemberData
    },
    // 重新设置 [组织岗位] 数据
    resetPostDataParam(data) {
      this.postDataParam = { ...this.postDataParam, ...data }
      this.getPostData()
    },
    // 重新设置 [岗位成员] 数据
    resetPostMemberParam(data) {
      this.postMemberParam = { ...this.postMemberParam, ...data }
      this.getMemberPostData()
    }
  }
}
</script>

<style lang="scss">
  .organ-structure-container {
    padding-top: 20px;
  }
</style>
