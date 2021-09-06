function formValid() {
    let un = uname.value;
    let email = em.value;
    let ag = age.value;
    let num = mobile.value;



    if (un == "" || email == "" || ag == "") {
        alert("Fields cannot be blank")
    }
    
    else {

        let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (email.match(mailformat)) {
            return true;
        }
        else { alert("invalid mail format") }


        let phoneno = /^\d{10}$/;
        if (num.match(phoneno)) {
            return true;
        }
        else { alert("invalid phone number") }
    }
}