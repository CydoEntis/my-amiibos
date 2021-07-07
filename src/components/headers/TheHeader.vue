<template>
  <header>
    <div class="header-contet">
      <slot name="cta"></slot>
      <slot name="cta-sub-text"></slot>
      <slot name="cta-btn"></slot>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
header {
  width: 100%;
  height: 40vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>