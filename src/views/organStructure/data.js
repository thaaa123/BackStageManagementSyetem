const companyTreeData = [{
  id: 1,
  label: '一级 1',
  children: [{
    id: 4,
    label: '二级 1-1',
    children: [{
      id: 9,
      label: '三级 1-1-1'
    }, {
      id: 10,
      label: '三级 1-1-2'
    }]
  }]
}, {
  id: 2,
  label: '一级 2',
  children: [{
    id: 5,
    label: '二级 2-1'
  }, {
    id: 6,
    label: '二级 2-2'
  }]
}, {
  id: 3,
  label: '一级 3',
  children: [{
    id: 7,
    label: '二级 3-1'
  }, {
    id: 8,
    label: '二级 3-2'
  }]
}]

const postData = {
  total: 3,
  currentPage: 1,
  zise: 10,
  items: [
    {
      'name': '前端开发',
      'desc': '前端开发主要做的是用户所能看到的前端展示界面。'
    },
    {
      'name': '后端开发',
      'desc': '后端开发主要做的是逻辑功能等模块，是用户不可见的'
    },
    {
      'name': '项目经理',
      'desc': '指企业建立以项目经理责任制为核心，对项目重要管理'
    }
  ]
}

const postMemberData = {
  total: 3,
  currentPage: 1,
  zise: 10,
  items: [{
    date: '2016-05-02',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-04',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-01',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }, {
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市普陀区金沙江路 1518 弄'
  }]
}

export {
  companyTreeData,
  postData,
  postMemberData
}
