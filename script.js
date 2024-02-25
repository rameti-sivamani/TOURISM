$(".Available-cnt").hide();
function availableSoon() {
     $(".Available-cnt").show();
     $(".navbar").hide();
     $("footer").hide()
     $("header").hide();
     $(".book-now-fixed").hide()
}
$(document).ready(function () {

     $("#booking-window").click(function () {
          $(".Booking-window").show();
          $(".navbar").hide();
          $("footer").hide()
          $("header").hide();
     });
     $("strong").click(function () {
          $(".Booking-window").show();
          $(".navbar").hide();
          $("footer").hide()
          $("header").hide();
          $(".book-now-fixed").hide()
     });

     $(".book-now-img").click(function () {
          $(".Booking-window").show();
          $(".navbar").hide();
          $("footer").hide()
          $("header").hide();
          $(".book-now-fixed").hide()
     });

     $(".nav-link").hover(function () {
          const hr = document.createElement("hr");
          hr.style.margin = "1px"
          $(hr).animate({ width: "100%", opacity: 1 });
          $(this).append(hr);

     }, function () {
          $(this).find("hr").stop().animate({ width: "0", opacity: 0 }, 400, function () {
               $(this).remove(); // Remove the hr after animation
          });
     });

     $(".form-submit").hide();
     $("#signup-btn").click(function () {
          var ackText = document.getElementByClassName('submit-text');
          ackText.innerHTML = "You are Successfully registered ";
          $(".form-submit").show();
     });

     $(".login-button").click(function () {
          $(".login-show").show();
          $(".navbar").hide();
          $(".loginClass").show();
          $(".book-now-fixed").hide()
     });

     $(".register-button").click(function () {
          $(".register-show").show();
          $(".navbar").hide();
          $(".registerClass").show();
          $(".book-now-fixed").hide();
     });

     $(".address-button").click(function () {
          $(".navbar").hide();
          $(".address").show(); $(".book-now-fixed").hide()

     });
     $(".close").click(function () {
          $(".login-show").hide();
          $(".register-show").hide();
          $(".navbar").show();
          $(".address").hide()
          $(".backdrop-effect").hide();
          $(".Booking-window").hide()
          $("footer").show()
          $("header").show();
          $(".Available-cnt").hide();
          $(".book-now-fixed").show()
     });

     $(".move-to-login").click(function () {
          $(".login-show").show();
          $(".registerClass").hide();
          $(".navbar").hide();
          $(".address").hide()
          $(".loginClass").show();
     });
     $(".move-to-register").click(function () {
          $(".register-show").show();
          $(".loginClass").hide();
          $(".navbar").hide();
          $(".address").hide()
          $(".registerClass").show();
     });
     $screenWidthCheck = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
     if ($screenWidthCheck > 759) {
          $(".main").hide();
          $(".sidebar").hide();
     }
     if ($screenWidthCheck < 758) {
          $(".menu").click(function () {

               document.querySelector(".sidebar").style.display = "flex";
               document.querySelector(".menu").style.display = "none";
          });
          $(".sidebar").click(function () {
               document.querySelector(".sidebar").style.display = "none";
               document.querySelector(".menu").style.display = "flex";
          });
     }
});