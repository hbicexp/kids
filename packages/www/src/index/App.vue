<template>
  <div id="content">
    <div class="index-container">
      <div class="left">
        <div class="project" v-for="i in [1, 2, 3]" :key="i">
          <div class="content">
            <div class="image">
              <img width="300" alt="作品简介" src="/images/3.png" />
            </div>
            <div class="info">
              <div class="title">作品标题</div>
              <div class="summary">
                作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介作品简介
              </div>
            </div>
          </div>
          <div class="footer">
            <span class="open"><a href="/" target="_blank">试一试</a></span>
            <span class="author">
              <i class="user"></i>
              作者
            </span>
            <span>
              <i class="fa fa-clock-o"></i>
              2021-01-01 01:01
            </span>
          </div>
        </div>
      </div>

      <div class="right">
        <div class="area">
          <div>QQ交流群</div>
          <div>微信公众号：二维码</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    mounted() {},
  }
</script>

<style lang="scss">
  $line-height: 24px;
  $padding: 15px;
  %border {
    padding: $padding;
    border: 1px solid #eee;
    border-radius: 2px;
  }

  #content {
    padding: $padding 0;
    .index-container {
      position: relative;
      display: flex;
      width: 1000px;
      margin: 0 auto;

      .left {
        width: 700px;
        margin-right: $padding;

        .project {
          margin-bottom: $padding;
          line-height: $line-height;
          background-color: #fff;
          @extend %border;

          .content {
            display: flex;
          }

          .info {
            padding: 0 $padding;

            .title {
              margin-bottom: 5px;
              font-weight: 600;
            }
          }

          .footer {
            display: flex;
            margin-top: $padding;

            .open {
              flex: 1;
            }
          }
        }
      }

      .right {
        flex: 1;
        .area {
          @extend %border;
          background-color: #fff;
        }
      }
    }
  }
</style>
