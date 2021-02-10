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
    color: #333;
    background: #f3f3f3;
  }

  a,
  a:hover {
    color: #333;
    text-decoration: none;
  }

  #header {
    position: relative;
    width: 1920px;
    height: 347px;
    padding: 0;
    margin: 0 auto;
    background: url(../../public/images/header.jpg);

    .menu {
      position: absolute;
      top: 24px;
      left: 990px;
      display: flex;
      width: 340px;

      li {
        flex: 1;
        padding: 8px 0;
        margin-right: 5px;
        font-size: 18px;
        color: #000;
        text-align: center;
        text-decoration: none;
        list-style: none;
        background-color: rgba(255, 255, 255, 0.25);
        border-radius: 5px;
        transition: 0.3s;

        &:hover {
          color: #eee;
          background-color: rgba(0, 0, 0, 0.25);
        }
      }
    }
  }
</style>
