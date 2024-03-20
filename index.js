document.querySelectorAll(".menu .folders .link a").forEach(function (link) {
  link.addEventListener("click", function (e) {
    if (e.target.parentNode.children.length > 1) {
      e.target.parentNode.classList.toggle("active");
    }
  });
});
document
  .querySelectorAll(".interface .links .links1 .link a")
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      if (e.target.parentNode.children.length > 1) {
        e.target.parentNode.classList.toggle("active");
      }
    });
  });
// ---------------------------------jQuery for hamburger Menu ----------------------------------------//

$("#menu-btn").click(function () {
  $(".menu").toggleClass("active");
});


// ---------------------------------Search Bar Functionality Code ---------------------------------------//

const searchFun = () => {
  let filter = document.getElementById('myInput').value.toUpperCase();

  let mytable = document.getElementById('myTable');

  let tr = mytable.getElementsByTagName('tr');

  for (var i=0; i<tr.length ; i++) {
    let td = tr[i].getElementsByTagName('td')[0];

    if (td) {
      let textvalue = td.textContent || td.innerHTML;

      if(textvalue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      }else {
        tr[i].style.display = "none";
      }
    }
  }
}