<template>
  <header class="page-header">
		<slot>
		</slot>
  </header>
</template>

<script>
export default {};
</script>

<style>
.page-header {
  position: relative;
  padding: 9px 0px;
}
.page-header h4 {
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;
}
.page-header button {
  position: absolute;
  width: 26px;
  height: 21px;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
  background: url("../assets/btn-back.png") no-repeat;
}
</style>
