<template>
<!-- Basic HTML Code to create bubbles -->
  <div class="bubbels">
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
    <div class="bubble"></div>
  </div>
</template>

<style scoped>
.bubbels{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.bubble{
  position: absolute;
  bottom: -50px;
  background: #fff;
  border-radius: 50%;
  opacity: 0.15;
  animation: flying 10s infinite ease-in;
}
/* Animation for all bubbles */
@keyframes flying {
  0%{
    bottom: 100vh;
    transform: translateX(0);
  }
  60%{
    transform: translateX(200px);
  }
  100%{
    bottom: -10vh;
    transform: translateX(-200px);
  }
}
/* Different styles for different bubbles */
/* animation-delay set negative to start from center of screen when loaded */
.bubble:nth-child(1){
  width: 70px;
  height: 70px;
  left: 5%;
  animation-duration: 8s;
  animation-delay: -6s;
}
.bubble:nth-child(2){
  width: 40px;
  height: 40px;
  left: 10%;
  animation-duration: 5s;
  animation-delay: -1s;
}
.bubble:nth-child(3){
  width: 70px;
  height: 70px;
  left: 15%;
  animation-duration: 10s;
  animation-delay: -6s;
}

.bubble:nth-child(4){
  width: 80px;
  height: 80px;
  left: 25%;
  animation-duration: 7s;
  animation-delay: -0s;
}

.bubble:nth-child(5){
  width: 35px;
  height: 35px;
  left: 40%;
  animation-duration: 6s;
  animation-delay: -3s;
}
.bubble:nth-child(6){
  width: 45px;
  height: 45px;
  left: 55%;
  animation-duration: 8s;
  animation-delay: -6s;
}
.bubble:nth-child(7){
  width: 85px;
  height: 85px;
  left: 65%;
  animation-duration: 7s;
  animation-delay: -2s;
}
.bubble:nth-child(8){
  width: 80px;
  height: 80px;
  left: 75%;
  animation-duration: 6s;
  animation-delay: -4s;
}

.bubble:nth-child(9){
  width: 65px;
  height: 65px;
  left: 80%;
  animation-duration: 7s;
  animation-delay: -4s;
}

.bubble:nth-child(10){
  width: 60px;
  height: 60px;
  left: 90%;
  animation-duration: 6s;
  animation-delay: -2s;
}
</style>