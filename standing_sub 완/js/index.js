
$(function(){
    let subOT = $('.subsec2 button').offset().top + $('.subsec2 button').outerHeight()

    $(window).scroll(function(){

        if($(window).scrollTop() >= subOT){
            $('.subsec3_boxwrap').addClass('start')
        }else{
            $('.subsec3_boxwrap').removeClass('start')
        }
    })

})

document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', () => {
  // 타이틀 타이핑
  const target = document.querySelector('.type-target');
  if (target){
    const text = target.textContent.trim();
    target.textContent = '';
    target.classList.add('animate__animated','animate__fadeIn');
    let i = 0;
    const speed = 70;
    setTimeout(function type(){
      target.textContent += text[i++];
      if (i < text.length) setTimeout(type, speed);
    }, 150);
  }

  // 채팅 순차 등장
  const container = document.querySelector('.chat-seq');
  if (!container) return;
  const seqItems = [...container.querySelectorAll('.seq')];

  const showSeq = () => {
    seqItems.forEach((el, idx) => {
      const effect = el.dataset.anim || 'animate__fadeInUp';
      setTimeout(() => {
        el.style.opacity = '1';
        el.classList.add('animate__animated', effect);
      }, idx * 180);
    });
  };

  if ('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting){
        io.disconnect();
        showSeq();
      }
    }, { threshold: 0.2 });
    io.observe(container);
  } else {
    showSeq();
  }
});
