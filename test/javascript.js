$(document).ready(function () {
  var images = [
    'Images/skills0.jpg',
    'Images/skills1.jpg',
    'Images/skills2.jpg',
    'Images/skills3.jpg',
    'Images/skills4.jpg',
    'Images/projects5.jpg',
    'Images/projects6.jpg',
    'Images/projects7.jpg',
    'Images/projects8.jpg',
    'Images/competitions9.jpg',
    'Images/competitions10.jpg',
    'Images/competitions11.jpg',
    'Images/addinfo12.jpg'
    /*,'Images/addinfo13.jpg'*/
  ];
  var currentIndex = 0;
  var imgElements = $('.carousel-image');
  var lists = $('.list');

  function showImage() {
    imgElements.removeClass('active');
    $(imgElements[currentIndex]).addClass('active');
    lists.find('li').removeClass('active');
    lists.each(function () {
      $(this).find('[data-index="' + currentIndex + '"]').addClass('active');
    });
  }

  showImage();

  $('.carousel-control.prev').click(function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage();
  });

  $('.carousel-control.next').click(function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage();
  });

});
