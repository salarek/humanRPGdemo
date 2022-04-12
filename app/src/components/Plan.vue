<template>
  <div class="plan">
    <div class="plan-table">
      <div class="field">
        Poniedziałek
        <div>dupa</div>
      </div>
      <div class="field">Wtorek</div>
      <div class="field">Środa</div>
      <div class="field">Czwartek</div>
      <div class="field">Piątek</div>
      <div class="field">Sobota</div>
      <div class="field">Niedziela</div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.plan {
  overflow-y: scroll;
  position: absolute;
  left: 0%;
  top: 0%;
  width: 100%;
  height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
}
.plan-table {
  background-color: white;
  border-radius: 20px;
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: 1fr 1fr;
}
.field {
  text-align: left;
  margin: 2px;
  background: red;
}
</style>
