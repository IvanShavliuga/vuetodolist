<template>
<div class="modal">
  <div class="modal__box">
    <p class="modal__text">Вы подтверждаете, что желаете сделать изменения?</p>
    <button class="modal__button modal__yes">Yes</button>
    <button class="modal__button modal__no">No</button>
  </div>
</div>
</template>
<style>
body {
  overflow: hidden;
}
.modal {
  background-color: rgba(0, 0, 0, 0.7);
  height: 100vh;
  width: 100%;
  position: absolute;
}
.modal__box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  height: 30%;
  border: 2px solid #ddd;
  background-color: #fff;
  color: #342525;
}
.modal__text {
  font-size: 22px;
}
.modal__button {
  padding: 10px;
  font-size: 24px;
  height: 50px;
  color: #fff;
  margin: 20px;
}
.modal__yes {
  background-color: #45ac45;
  border: 1px solid #238923;
}
.modal__no {
  background-color: #ac4545;
  border: 1px solid #892323;
}
</style>
