<template>
  <div id="app">
    <ea-layout>
      <div slot="logo" class="logo">
        <img class="logo_img" src="../assets/logo.png" />
      </div>
      <ea-sidemenu slot="sidemenu" />
      <ea-header slot="header">
        <!-- 页签 -->
        <ea-tagview slot="tagview" />
       <!-- 右侧操作按钮 -->
        <ea-refresh slot="options" />
        <!-- <ea-help slot="options" />
        <ea-fullscreen slot="options" />
        <ea-pagesetting slot="options"/>
        <ea-usercenter slot="options" /> -->
      </ea-header>
    </ea-layout>
  </div>
</template>
<style lang="scss" scoped>
.logo {
  height: 60px;
  color: #fff;
  font-size: 20px;
}
.logo_img {
  height: 60px;
}
</style>