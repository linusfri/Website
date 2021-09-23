function mobileMenu() {
    let x = document.getElementById("menu-links");
    if (x.style.display == "block") {
        x.style.display = "none";
    } 
    
    else {
        x.style.display = "block";
    }
}

function search() {
    let x = document.getElementById("input");
    if (x.style.display == "block") {
        x.style.display = "none";
    }

    else {
        x.style.display = "block";
    }
}



function productDesc() {
    let spec = document.getElementById("product-ind-spec"),
    desc = document.getElementById("product-ind-desc"),
    styleDesc = window.getComputedStyle(desc),
    descTab = document.getElementById("product-ind-desc-tab"),
    specTab = document.getElementById("product-ind-spec-tab")

    desc.style.display = "block";
    spec.style.display = "none";
    
    if (descTab.classList.contains("active") == false) {
        descTab.classList.add("active");
        specTab.classList.remove("active")
    }
   
}

function productSpec() {
    let spec = document.getElementById("product-ind-spec"),
    styleSpec = window.getComputedStyle(spec),
    desc = document.getElementById("product-ind-desc"),
    descTab = document.getElementById("product-ind-desc-tab"),
    specTab = document.getElementById("product-ind-spec-tab")
    
    spec.style.display = "block";
    desc.style.display = "none"; 

    if (specTab.classList.contains("active") == false) {
        specTab.classList.add("active");
        descTab.classList.remove("active");
    }
}

// (function($){
//     $('#search-toggle').click(function(){
//         $('#input').toggle();
//         if ($('#input').hasClass('show') ) {
//             $('#input').removeClass('show')
//         } else {
//             $('#input').addClass('show')
//         }
//     });

//     $('#search-toggle').click(function(){
//         if ($('#myLinks').hasClass('show') ) {
//             $('#myLinks').removeClass('show').hide();
//         } else {
//             $('#myLinks').addClass('show').show();
//         }
//     });
// })(jQuery);