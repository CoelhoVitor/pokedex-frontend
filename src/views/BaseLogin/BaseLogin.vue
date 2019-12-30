<template>
  <div class="main">
    <div class="header-pokedex">
      <img src="../../assets/ball.png" alt="ball pokedex"/>
      <div class="tree-balls">
        <img src="../../assets/red-ball.png" class="mini-ball" alt="red ball pokedex"/>
        <img src="../../assets/yellow-ball.png" class="mini-ball" alt="yellow ball pokedex"/>
        <img src="../../assets/green-ball.png" class="mini-ball" alt="green ball pokedex"/>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
  .main {
    width: 410px;
    border-radius: 12px;
    border-style: solid;
    border-width: 2px;
  }

  .header-pokedex {
    border-radius: 10px 10px 0 0;
    border-style: solid;
    border-width: 0 0 2px 0;
    border-color: #000;
    background-color: #ed1e24;
    padding: 10px 10px 8px 10px;
    display: flex;
  }

  .tree-balls {
    margin-left: 12px;
  }

  .mini-ball {
    margin: 0 2px;
    width: 12px;
    height: 12px;
  }

  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 0 0 10px 10px;
    flex-direction: column;
    width: 100%;
  }
</style>
