

const sideNav = document.querySelectorAll('.sidenav');
M.Sidenav.init(sideNav);

const slider = document.querySelectorAll('.slider');
M.Slider.init(slider,{
    indicators: false,
    height:800,
    transition:700,
    interval: 3000
});

const parallax = document.querySelectorAll('.parallax');
M.Parallax.init(parallax);


const materialbox = document.querySelectorAll('.materialboxed');
M.Materialbox.init(materialbox);

const scroll = document.querySelectorAll('.scrollspy');
M.ScrollSpy.init(scroll,{
scrollOffset: 500
});


$('#btn-a').click(function(){
  Swal.fire({
    position: 'top-end',
    type: 'success',
    title: 'Your work has been saved',
    showConfirmButton: false,
    timer: 1500
  })
});

//Tanggapan
Swal.fire({
    title: '<strong>Beri Tanggapan kamu<u>Ya?</u></strong>',
    type: 'info',
    html:
      'Untuk lebih mengenal saya  <b>silakan kunjungi</b>, ' +
      '<a href="https://github.com/mahesaalwi">links</a> ' +
      'Terima kasih',
    showCloseButton: true,
    showCancelButton: true,
    focusConfirm: false,
    confirmButtonText:
      '<i class="fa fa-thumbs-up"></i> Great!',
    confirmButtonAriaLabel: 'Thumbs up, great!',
    cancelButtonText:
      '<i class="fa fa-thumbs-down"></i>',
    cancelButtonAriaLabel: 'Thumbs down',
  })