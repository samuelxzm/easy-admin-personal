<template>
  <div id="app">
    <ea-layout>
      <div slot="logo" class="logo">
        <img class="logo_img" src="../assets/logo.png" />
      </div>
      <ea-sidemenu slot="sidemenu" />
      <ea-header slot="header">

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