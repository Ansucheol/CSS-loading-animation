$('.btn span').click(function(){
  $(this).addClass('active')
  $(this).siblings().removeClass('active')
})
// btn 밑에 span을 클릭했을 때 자기 자신(this)에 엑티브 클래스를 넣고
// 자기 자신의 형제(siblings)에는 엑티브 클래스를 지워라