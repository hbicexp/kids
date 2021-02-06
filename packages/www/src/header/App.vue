<template>
  <div id="header">
    <div class="logo"></div>
    <ul class="menu">
      <li>首页</li>
      <li>作品</li>
      <li>动手</li>
      <li>我们</li>
    </ul>
    <div class="profile"></div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss">
  html,
  body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }

  #header {
    position: relative;
    width: 1920px;
    height: 528px;
    padding: 0;
    margin: 0 auto;
    background-image: url(../../public/images/header.jpg);

    .menu {
      position: absolute;
      top: 24px;
      left: 900px;
      display: flex;
      width: 300px;

      li {
        flex: 1;
        padding: 5px;
        font-size: 24px;
        color: #333;
        text-align: center;
        text-decoration: none;
        list-style: none;
        border-radius: 5px;
        transition: 0.3s;

        &:hover {
          background-color: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
</style>
