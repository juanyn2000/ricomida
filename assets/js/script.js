const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);
$(document).ready(function () {
  $("#enviarCorreo").click(function () {
    alert("El correo fue enviado correctamente");
  });
  $("h5").dblclick(function () {
    $(this).css({
      color: "red",
    });
  });
  $(".card h4").click(function () {
    $(this).siblings().toggle();

  });
});
