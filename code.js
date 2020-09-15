function onClickMenu() {
  document.getElementById("menu").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");

  document.getElementById("menu-bg").classList.toggle("change-bg");
}
document.getElementById("about").onclick = function () {
  window.location.hash = "#about";
};

$(document).ready(function () {
  $(".submit").click(function (event) {
    var email = $(".Email").val();
    var subject = $(".Subject").val();
    var services = $(".Services").val();
    var name = $(".Name").val();
    var statusElm = $(".status");
    statusElm.empty();

    if (email.lenght >= 5 && email.includes("@") && email.includes(".")) {
      statusElm.append("<div>valid  email</div>");
    } else {
      statusElm.append(" <div> invalid email</div >");
    }

    if (name.lenght >= 2) {
      statusElm.append("<div> valid name</div >");
    } else {
      statusElm.append("<div>your name is invalid</div >");
    }

    if (subject.lenght >= 10) {
      statusElm.append("<div> valid message</div >");
    } else {
      statusElm.append("<div> please add more on your message </div >.");
    }
  });
});

// scroll up  button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
