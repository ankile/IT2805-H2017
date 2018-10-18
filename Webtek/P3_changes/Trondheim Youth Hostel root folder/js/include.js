/*
FILE NAME: include.js
WRITTEN BY: Lars Lien Ankile
WHEN: October/Novemvber 2017
PURPOSE: Insert the navbar and footer into every page on the site, in
accordance with the DRY principle. */

/* Save the navbar markup in a constant */
const navbar_content = "<div class='navbar'>\
  <ul id='navbar'>\
    <a href='index.html'><div id='logo-title'>\
      <li id='logo-li' class='left'><img id='logo-image' src='img/house_closed.png' alt='logo'></li>\
      <li id='logo-li-text' class='left'>Trondheim Youth Hostel</li>\
    </div></a>\
    <li class='dropdown'>\
      <a href='javascript:void(0)' class='dropdown-button'>MER</a>\
      <div class='dropdown-content card'>\
        <a href='mer_om_oss.html'>OM OSS</a>\
        <a href='mer_kontakt.html'>KONTAKT</a>\
        <a href='mer_omtaler.html'>OMTALER</a>\
        <a href='mer_om_trondheim.html'>OM TRONDHEIM</a>\
        <a href='mer_blog.html'>BLOGG</a>\
      </div>\
    </li>\
    <li><a href='rom.html'>ROM</a></li>\
    <li><a href='bestilling.html'>BESTILL</a></li>\
    <li><a href='index.html'>HJEM</a></li>\
  </ul>\
</div>";

/* Save the footer content in a constant */
const footer_content = '<footer id="footer">\
  <div class="auto-margin" id="footer-container">\
    <div class="row">\
        <div class="col-3"><p>Trondhiem Youth Hostel AS</p></div>\
        <div class="col-3"><p><a target="_blank" href="https://www.google.no/maps/place/Weidemanns+vei+42,+7043+Trondheim/@63.4343273,10.3947243,13.21z/data=!4m5!3m4!1s0x466d31a6d91b8447:0xcfae9433f6a4eada!8m2!3d63.4340183!4d10.4254554">Weidemanns vei 42, 7048 Trondheim</a></p></div>\
        <div class="col-3"><p>Telefonnummer: <br>+47 912 34 567</p></div>\
        <div class="col-3"><p><a target="_top" href="mailto:post@trondheimyouthhostel.no">post@trondheimyouthhostel.no</a></p></div>\
    </div>\
  </div>\
  <div class="auto-margin" id="footer-container-liten-skrift">\
    <hr>\
    <p id="liten-skrift">This site is constantly reviewed to avoid errors, but we cannot warrant full correctness of all content and/or pricing. While using this site, you agree to have read and accepted our terms of use, cookie and privacy policy. Copyright 2017-2017 by Trondheim Hostel Holding AS &copy;&reg;. All Rights Reserved. This webspace is created by Martin Egeli, Mathias Skotnes, Mats Kvelland, Anders Bergesen og Lars Lien Ankile.</p>\
  </div>\
</footer>';


/* Get the div where the navbar should be placed and set it's innerHTML to
the contents of the navbar constant above. */
document.getElementById('navbar_content').innerHTML = navbar_content;

/* Same here except with the footer */
document.getElementById('footer_content').innerHTML = footer_content;
