$(document).ready(function () {

    var i=0;
    var tx_loginHeaderText = document.getElementById("loginHeaderText");
    var inp_email = document.getElementById("email");
    var bt_login = document.getElementById("submitButtonHTML");
    var tx_totalSiteLogins = document.getElementById("totalSiteLogins");

    bt_login.addEventListener('click', function (event) {

            i++;
            if(inp_email.value == "admin@admin.com")
                tx_loginHeaderText.innerHTML = "ADMIN";

            tx_totalSiteLogins.innerHTML = i;
    });
    
});