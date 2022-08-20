var inputtext = document.getElementById("input");
var send = document.getElementById("send");
var emoji = document.getElementById("emoji");
var three_dot1 = document.getElementById("three_dot1");
var namevalue = document.getElementById("namevalue");
var contact_list = document.querySelector(".contact-list")
var contact_name = document.querySelector("#titlenm")
var one = document.querySelector(".one")
var two = document.querySelector(".two")
var menu2 = document.querySelector("#menu2")
var search_icon = document.querySelector("#search_icon")
var search_box_hidden = document.querySelector(".search-box-hidden")
var profile_btn = document.querySelector("#profile_show")
var profile = document.querySelector(".profile")
var hide_profile = document.querySelector("#hide_profile")
var settings = document.querySelector("#settings")
var settings = document.querySelector("#settings")
var settings_show = document.querySelector(".settings")
var hide_settings = document.querySelector("#hide_settings")

var status_edit = document.querySelector("#status-icon")
var mobile_edit = document.querySelector("#mobile-icon")
var email_edit = document.querySelector("#email-icon")
var website_edit = document.querySelector("#website-icon")

var status_update = document.querySelector("#status")
var mobile = document.querySelector("#mobile")
var email = document.querySelector("#email")
var website = document.querySelector("#website")






var list1 = [];
// var list2=[];
let n = 0;
let x = 1;
send.onclick = function AddRow() {
    let addRow = document.getElementById("show-chat");
    let newRow = addRow.insertRow(n);

    list1[x] = inputtext.value;
    // list2[x] = inputtext.value;

    var cell1 = newRow.insertCell(0)
    // var cell1 = newRow.insertcell(1)

    cell1.innerHTML = list1[x]
    // cell2.innerHTML = list2[x]

    inputtext.value = "";
    console.log(n);
    n++;
    x++;
}
// n++;
// x++;

emoji.onclick = function sticker() {
    alert("Kindly check the relevent code for your Emoji and paste the code in the text area . Also ADD (&#) before the code")
}


contact_list.onclick = function titlename() {
    console.log(namevalue.textContent);
    contact_name.textContent = namevalue.textContent;

}


three_dot1.onclick = function () {
    console.log("menu option clicked");
    if (one.style.display == "none") {
        console.log("if targated");
        one.style.display = "block";
        three_dot1.style.color = "white"
    }
    else {
        one.style.display = "none";
        console.log("else targate");
        three_dot1.style.color = "black";
    }
}



menu2.onclick = function () {
    if (two.style.display == "none") {
        two.style.display = "block";
        menu2.style.color = "white";
    }
    else {
        two.style.display = "none";
        menu2.style.color = "black";
    }
}


search_icon.onclick = function () {
    if (search_box_hidden.style.display == "none") {
        search_box_hidden.style.display = "block";
        search_icon.style.color = "white";
    }
    else {
        search_box_hidden.style.display = "none";
        search_icon.style.color = "black";
    }
}

// -------------------------profile page show and hide -------------------------------------------//

profile_btn.addEventListener("click", function () {
    profile.style.display = "block"
    one.style.display = "none";

});

hide_profile.addEventListener("click", function () {
    profile.style.display = "none";
})


// ------------------------------settings page show and hide ------------------------------------//

settings.addEventListener("click", function () {
    settings_show.style.display = "block"
    one.style.display = "none";

});

hide_settings.addEventListener("click", function () {
    settings_show.style.display = "none";
})


// ---------------------------profile edit functions ---------------------------------------------------------//

status_edit.addEventListener("click", function () {
    if (status_update.contentEditable === "false") {
        status_update.contentEditable = true;
        status_edit.style.color = "blue";
    }
    else {
        status_update.contentEditable = "false";
        status_edit.style.color = "black";
    }
})


mobile_edit.addEventListener("click", function () {
    if (mobile.contentEditable === "false") {
        mobile.contentEditable = true;
        mobile_edit.style.color = "blue";
    }
    else {
        mobile.contentEditable = "false";
        mobile_edit.style.color = "black";
    }
})


email_edit.addEventListener("click", function () {
    if (email.contentEditable === "false") {
        email.contentEditable = true;
        email_edit.style.color = "blue";
    }
    else {
        email.contentEditable = "false";
        email_edit.style.color = "black";
    }
})

website_edit.addEventListener("click", function () {
    if (website.contentEditable === "false") {
        website.contentEditable = "true";
        website_edit.style.color = "blue";
    }
    else {
        website.contentEditable = "false";
        website_edit.style.color = "black";
    }
})