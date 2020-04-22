<template>
  <div class="post-container">
    <div class="header">
      <div class="title">岗位</div>
      <div class="operation">
        <el-button type="primary">添加</el-button>
      </div>
    </div>
    <div class="content">
      <el-table :data="data.items" border fit highlight-current-row @row-click="clickPost">
        <el-table-column align="center" label="名称" width="90">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="描述">
          <template slot-scope="scope">
            {{ scope.row.desc }}
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <pagination :current-page="data.currentPage" :total="data.total" :page-size="data.size" class-name="pagination" @sizeChange="handleSizeChange" @currentChange="handleCurrentChange" />
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination'
import { debounce } from 'lodash'

export default {
  name: 'Post',
  components: {
    'pagination': Pagination
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  maxheight() {
    return this.clientHeight - 200
  },
  data() {
    return {
    }
  },
  mounted() {
    console.log('data', this.data)
  },
  methods: {
    clickPost: debounce(function(row) {
      this.$emit('clickPost', row)
    }, 300),
    handleCurrentChange(page) {
      this.$emit('resetPostDataParam', { 'currentPage': page, 'size': this.data.size })
    },
    handleSizeChange(size) {
      this.$emit('resetPostDataParam', { 'currentPage': this.data.currentPage, 'size': size })
    }
  }
}
</script>

<style lang="scss">
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
