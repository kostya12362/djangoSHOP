// $(document).ready(function(){
//   $("#go").click(function(){
//     $("#godiv").animate({display: "none");
//   });
// });

// $( "#go" ).click(function() {
//   $( "#godiv" ).hide( 1000 );
// });

 // $('#go').toggle(
 //        function () {
 //            $('#godiv').animate({
 //                height:"0px"
 //            }, 500);
 //        },
 //        function () {
 //            $('#godiv').animate({
 //                height:"100px"
 //            }, 500);
 //        });
// $( "#go" ).click(function() {
//   $( this ).css({
//     borderStyle: "inset",
//     cursor: "wait"
//   });
//   $( "input" ).slideDown( 1000, function() {
//     $( this )
//       .css( "border", "2px red inset" )
//       .filter( ".middle" )
//         .css( "background", "yellow" )
//         .focus();
//     $( "div" ).css( "visibility", "hidden" );
//   });
// });

$(document).ready(function(){
  $("#goSign").click(function(){
    $("#godiv").slideUp(1000);
    $("#showdiv").slideDown(1000);
  });
  $("#goLogin").click(function(){
    $("#godiv").slideDown(1000);
    $("#showdiv").slideUp(1000);
  });

    $("#goSignTOP").click(function(){
    $("#godiv").slideUp(1000);
    $("#showdiv").slideDown(1000);
  });
  $("#goLoginTOP").click(function(){
    $("#godiv").slideDown(1000);
    $("#showdiv").slideUp(1000);
//
// $(".nav-list").click(function() {
//
//             // Select all list items
//             var listItems = $(".nav-list");
//
//             // Remove 'active' tag for all list items
//             for (let i = 0; i < listItems.length; i++) {
//                 listItems[i].classList.remove("active");
//             }
//
//             // Add 'active' tag for currently selected item
//             this.classList.add("active");
//         });
  });
});