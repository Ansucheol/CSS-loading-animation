### loading-animation (공부한거 기록하는 곳)

# @keyframes 은 애니메이션 효과를 줄때 단축키? 줄 때 쓴다.
/* 단축키 설정 느낌? */
@keyframes loading {
  0%{
    opacity: 0;
    transform: scale(0.5);
  }
  50%{
    opacity: 1;
    transform: scale(1.2);
  }
  100%{
    opacity: 0;
    transform: scale(0.5);
  }
}

# /* 키프레임 밑에 별칭 linear(부드럽게) infinite(무한반복)*/ 
  animation: loading 1s linear infinite;
