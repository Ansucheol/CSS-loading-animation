### loading-animation (기록장)

//html
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>도형 로딩 애니메이션-01</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <div class="loading">
    <span></span>
    <span></span>
    <span></span>
  </div>
</body>
</html>

//css
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.loading {}
.loading span{
  display: inline-block;
  width: 15px;
  height: 15px;
  background-color: gray;
  border-radius: 50%;

  /* 키프레임 밑에 별칭 linear(부드럽게) infinite(무한반복)*/ 
  animation: loading 1s linear infinite; 
}

.loading span:nth-child(1){
  animation-delay: 0s;
  background-color: crimson;
}
.loading span:nth-child(2){
  animation-delay: 0.2s;
  background-color: dodgerblue;
}
.loading span:nth-child(3){
  animation-delay: 0.4s;
  background-color: greenyellow;
}

/* 단축키 느낌? */
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
