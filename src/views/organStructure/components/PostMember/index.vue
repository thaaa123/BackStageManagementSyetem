<template>
  <div class="post-member-container">
    <div class="header">
      <div class="title">岗位成员</div>
      <div class="operation">
        <el-button type="primary">添加</el-button>
      </div>
    </div>
    <div class="content">
      <el-table :data="data.items" border fit highlight-current-row>
        <el-table-column align="center" label="姓名" width="90">
          <template slot-scope="scope">
            {{ scope.row.name }}
          </template>
        </el-table-column>
        <el-table-column align="center" label="地址">
          <template slot-scope="scope">
            {{ scope.row.address }}
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
import Pagination from '@/components/Pagination'// svg component

export default {
  name: 'PostMember',
  components: {
    'pagination': Pagination
  },
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
    }
  },
  watch: {
  },
  methods: {
    handleCurrentChange(page) {
      console.log('handleCurrentChange', page)
    },
    handleSizeChange() {
      console.log('handleSizeChange')
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
