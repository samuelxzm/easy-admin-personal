<template>
  <!-- <div>{{tableData}}</div> -->
  <el-table
    :data="tableData.routerList"
    row-key="path"
    :tree-props="{children: 'children'}"
    border
    default-expand-all
  >
    <el-table-column prop="name" label="名称"></el-table-column>
    <el-table-column prop="path" label="路径"></el-table-column>
    <el-table-column prop="component" label="组件"></el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          icon="el-icon-edit"
          circle
          plain
          @click="handleEdit(scope.$index, scope.row)"
        ></el-button>
        <el-button
          size="mini"
          icon="el-icon-delete"
          circle
          plain
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        ></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
  data() {
    return {
      tableData: require("../router.json")
    };
  },
  created(){
console.log('dfd')
  },
  methods: {
    handleDelete(index, row) {
      console.log(index);
    },
    handleEdit(index, row) {
      console.log(index);
    }
  }
};
</script>
<style lang="scss" scoped>
.logo_img {
  height: 30px;
}
</style>