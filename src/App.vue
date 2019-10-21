<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: "app",
  components: {

  }
};
</script>

<style>

html,body{
  height: 100%;
}
#app{
  height: 100%;
}
body .el-table th.gutter{
    display: table-cell!important;
}
 
body .el-table colgroup.gutter{
    display: table-cell!important;
}
</style>
