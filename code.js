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
