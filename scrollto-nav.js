/**!
 * scrollto-nav.js
 *
 * @copyright Copyright 2016 Kelley Brothers IT
 * @author    Gregory Kelley
 * @link      https://kelleybrothersit.com
 * Available for public and commercial use free of charge
 * 
 */

/* the main function that controls the scrolling.
 * accepts a redirect flag, url and the object
 * to scroll to after redirect.
 * It creates a cookie storing the object to scroll
 * if the scroll is flagged for redirect.
 */
$(function(){

  $.fn.scrollView = function (redirect, url, object) {
    if(redirect == 1){
      setCookie("scroll",object, 10);
      window.location.replace(url);
    }
    return this.each(function () {
      $('html, body').animate({
        scrollTop: $(this).offset().top - 90
      }, 700);
       $("header").removeClass("show-mobile-nav");
    });
  }

  // sets a cookie
  function setCookie(cname, cvalue, exdays) {
      var d = new Date();
      d.setTime(d.getTime() + (exdays*24*60*60*1000));
      var expires = "expires="+ d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  // retrieves the cookie
  function getCookie(cname) {
      var name = cname + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
          var c = ca[i];
          while (c.charAt(0) == ' ') {
              c = c.substring(1);
          }
          if (c.indexOf(name) == 0) {
              return c.substring(name.length, c.length);
          }
      }
      return "";
  }

  // deletes the cookie
  function delCookie(cname){
    document.cookie = cname+"=; expires=Thu, 01 Jan 1970 00:00:00 UTC";
  }

  var c = getCookie('scroll');
    if(c){
      $(c).scrollView(0,0,0);
      delCookie('scroll');
  }
});