<template>
  <div class="container">
    <div>
      <p>宽80px</p>
      <p>高25%</p>
    </div>
    <div>
      <p>宽auto</p>
      <p>高25%</p>
    </div>
    <div>
      <p>宽100px</p>
      <p>高25%</p>
    </div>

    <div>
      <p>宽80px</p>
      <p>高100px</p>
    </div>
    <div>
      <p>宽auto</p>
      <p>高100px</p>
    </div>
    <div>
      <p>宽100px</p>
      <p>高100px</p>
    </div>

    <div>
      <p>宽80px</p>
      <p>高auto</p>
    </div>
    <div>
      <p>宽auto</p>
      <p>高auto</p>
    </div>
    <div>
      <p>宽100px</p>
      <p>高auto</p>
    </div>

    <div>
      <p>宽80px</p>
      <p>高60px</p>
    </div>
    <div>
      <p>宽auto</p>
      <p>高60px</p>
    </div>
    <div>
      <p>宽100px</p>
      <p>高60px</p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container {
  height: 400px;
  width: 400px;
  display: grid;
  grid-template-columns: 80px auto 100px;
  grid-template-rows: 25% 100px auto 60px;
  div {
    background-color: rgb(245 239 227);
    outline: 1px dotted;
    text-align: center;
  }
  p {
    margin: 0;
  }
}
</style>
