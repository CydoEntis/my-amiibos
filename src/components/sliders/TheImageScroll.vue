<template>
  <div class="image-wrapper">
    <div class="scrolling-background"></div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.image-wrapper {
  width: 100%;
  overflow: hidden;
  height: 50vh;
}

.scrolling-background {
  width: 3924px;
  height: 407px;

  background: url("https://www.nintendo.com/etc.clientlibs/noa/clientlibs/clientlib-ncom/resources/images/page/amiibo/whatis/amiibo-mosaic.png");
  animation: slide 60s linear 1s infinite;
}

@keyframes slide {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(-1692px, 0, 0); /* The image width */
  }
}
</style>