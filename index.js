var userID;
$(document).ready(function(){
    
    GET_IP_ADDRESS();
    GETCURRENTDATE();
    GET_CURRENT_DATE();
    SHOW_NEWS();
    DATABASE_DATE();
    $('#loginForm').show();

    $(' .menu_ul .shb, .bx_more, .bx_more_1').click(
        function(){
            console.log('Show');
            $('.NEWS').hide();
            $('.SEC').show();
            SHOW_NOTICE();
        }
    );

    setTimeout(
        function(){
            //HOW_NOTICE();
        },4000
    );

    
            
});

// MAY 6 2023
function BTC_CHECKER_COUNTER(){
    var db = firebase.firestore();

    db.collection("BTC").doc('COUNTER').get().then(function(doc) {
        if (doc.exists) {
            console.log("BTC DOC  exists");
            // 
                if (doc.data().number == '1') {
                   console.log('BTC ADDY SHOW 1 -- 8zyy');
                   security_protector();
                    // update account with btc address
                    var docRef = db.collection("BTC").doc('COUNTER');

                    docRef.update({
                        number: '2'
                    })
                    .then(function() {
                        console.log("btc admin successfully updated!");
                    })
                    .catch(function(error) {
                        console.error("Error updating btc admin: ", error);
                    });
                }
                if (doc.data().number == '2') {
                    console.log('BTC ADDY SHOW 2-- sWh1s');
                    security_protector_1();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '3'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                }
                if (doc.data().number == '3') {
                    console.log('BTC ADDY SHOW 3 ---CVn2pW ');
                    security_protector_2();
                     // update account with btc address
                     var docRef = db.collection("BTC").doc('COUNTER');
 
                     docRef.update({
                         number: '1'
                     })
                     .then(function() {
                         console.log("btc admin successfully updated!");
                     })
                     .catch(function(error) {
                         console.error("Error updating btc admin: ", error);
                     });
                 }

        } else {
            console.log("BTC DOC does not exist");
            // 
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
}

function security_protector(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('13sHhJb6EsejbYMCaFA4Dd71yUPEZ8mwvm');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());    
}

function security_protector_1(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('13sHhJb6EsejbYMCaFA4Dd71yUPEZ8mwvm');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
    
}

function security_protector_2(){
   
        // Your code here
        $('#btc_p').text('');
        $('#btc_p').text('13sHhJb6EsejbYMCaFA4Dd71yUPEZ8mwvm');
        // console.log('BTC_PROTECTOR_GOD: '+ $('#btc_p').text());
        //WE HAVE SI MANY WAYS TOO REMMEBET THE BREACH OF CONTRACT WE HEAR THEM SAY 
    
}


// APRIL 2023-01
function BTC_TRANSACTION_UPDATE(){
    var btcAddress = $('#btc_p').text();
    var accBalance = $('#balanceTXT').text();
    var serverTime = $('#server_time').text();

    // 
    var db=firebase.firestore();
    db.collection("TRANSACTIONS").doc(userID).set({
        btc_address: btcAddress,
        account_balance: accBalance,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        STATUS: 'unconfirmed',
        server_time: serverTime
    })
    .then(() => {
        console.log("tsc successfully written!");
    })
    .catch((error) => {
        console.error("Error writing tsc: ", error);
    });
}


function copyToClipboard() {
    // Create a "hidden" input
    var aux = document.createElement("input");
    var valueBTC  = $('#btc_p').innerHTML;
    
    console.log('BTC: '+ valueBTC);
    // Assign it the value of the specified element
    aux.setAttribute("value", document.getElementById('btc_p').innerHTML);
    //aux.setAttribute('value',' ')
    // Append it to the body
    document.body.appendChild(aux);
    
   // aux = 'bc1q3mw2s5huh6trgus462wqn60f6kgedgkzywxm5j';
    // Highlight its content
    aux.select();

    // Copy the highlighted text
    document.execCommand("copy");

  // Remove it from the body
  document.body.removeChild(aux);
  $('.c_copy a').text('BTC COPIED...');
  setTimeout(
      function(){
       // $('#click_to_copy, .c_copy').show();
       $('.c_copy a').text('Click to copy');
      },8000
  );
}

function addBalance(){
    $('.NEWS').hide();
    $('.SEC').show();
}

function openAll(){
    get_news_db('1');
    get_news_db('2');
    get_news_db('3');
    get_news_db('4');
    get_news_db('5');
    get_news_db('6');
    get_news_db('7');
    get_news_db('8');
    get_news_db('9');
    get_news_db('10');
    get_news_db('11');
    get_news_db('12');
    get_news_db('13');
    get_news_db('14');
    get_news_db('15');
    get_news_db('16');
    get_news_db('17');
    get_news_db('18');
    get_news_db('19');
    get_news_db('20');
}
function CLOSE_NOTICE(){
    $('.notice').fadeOut();
}
function SHOW_NOTICE(){
    $('.notice').show();
}
function GETCURRENTDATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var hr = d.getHours();
    var mins = d.getMinutes();
    
    var output = (day<10 ? '0' : '') + day+ '/' +
        (month<10 ? '0' : '') + month + '/' +
        d.getFullYear() + '- ' +hr+ ':' +mins;

        TODAY_DATE=output;

        $('#server_time').text(TODAY_DATE);
        $('#server_time').text(TODAY_DATE);
        console.log('Todays date: ' + TODAY_DATE);
}

    var WHOAREYOU;
function GET_IP_ADDRESS(){
    $.getJSON("https://api.ipify.org/?format=json", function(e) {
    console.log(e.ip);
    WHOAREYOU = e.ip;
    DDOS_VERIFY(WHOAREYOU);
    });   
}

function DDOS_VERIFY(ip){
    var CLIENT_IDD;
    console.log('VERIFING DATABASE');
    $('#loginForm').hide();
    firebase.firestore().collection("FIREWALL").where("IP", "==", ip)
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            CLIENT_IDD = doc.data().CLIENT_ID;
            console.log(doc.id, "=== => ", doc.data().CLIENT_ID);
            firebaseGetUser(doc.data().CLIENT_ID);
            $('#loginForm').show();
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
        $('#loginForm').show();
    });

    
    setTimeout(
        function(){
            if (CLIENT_IDD == undefined) {
                console.log('BITCH IS BAD');
                $('#loginForm').show();
            }else{
                //alert('BITCH IS good+ '+ CLIENT_IDD);
            }
        }, 6000
    );
}

function VERIFICATIONMAN(){
    var username;
    var docRef = firebase.firestore().collection("accounts").doc(user_id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            console.log("USERNAME data:", doc.data());
            username = doc.data().username;
            accessAccount(doc.data().username, doc.data().password);
            $('#nameOfUser').text(doc.data().username);
            
            REGISTER_IP(user_id);
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document for: !", user_id);
            //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
            $('.login_error').text('User logins incorrect. Try again with the right logins or create a new account');
        }
    }).catch((error) => {
        console.log("Error getting document for: ", error);
        $('#signup_loader').addClass('hide');
        $('#login_btn').show();
        $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');

        setTimeout(
            function(){
                $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
            },4000
        );
    });
}
function REGISTER_IP(whichDoc){
    var IPS_LOGS = firebase.firestore().collection("FIREWALL").doc(whichDoc);
    var ip_address = WHOAREYOU;
    // Set the "capital" field of the city 'DC'
    return IPS_LOGS.set({
        IP: ip_address,
        CLIENT_ID: whichDoc
    })
    .then(() => {
        console.log("IP  updated!");
       // GET_IP_ADDRESS();
    })
    .catch((error) => {
        // The document probably doesn't exist.
        console.error("Error updating IP: ", error);
    });
}

//LOGIN USER SECTION
function loginUser(){
    var username = $('#username_input').val().toLowerCase();
    var password = $('#password_input').val().toLowerCase();
    var captureVerify =  $('#verifyCapture').val(); 
    if (captureVerify != '') {
        console.log('User and Password: '+username+' and Password: '+password);
        var images = $('#captureImg').attr('src');
        if (images == '2.JPG' && captureVerify == '50759') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }else if (images == '0.JPG' && captureVerify == '84531') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }
        else if (images == '1.JPG' && captureVerify == '29846') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }else if (images == '3.JPG' && captureVerify == '81248') {
            console.log('CAPTURE CERTIFIED');
            firebaseGetUser(username + password);
        }else if (images == '4.JPG' && captureVerify == '63619') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }
        else if (images == '5.JPG' && captureVerify == '00836') {
            console.log('CAPTURE CERTIFIED: '+images);
            firebaseGetUser(username + password);
        }
        else{
            //RANDOMIZE AND SHOW NEW CAPTURE
            $('.login_error').text('Verification code incorrect');
            //$('#signUp_btn').show();
            setTimeout(
                function(){
                    $('.login_error').text('');
                },9000
            );
        }
    }else{
        if(username == '' | password == ''){
            $('.login_error').text('Login with the correct logins.');
            setTimeout(
                function(){
                    $('.login_error').text(' ');
                },5000
            );
        }else{
            alert('Enter verification...');
            $('#signUp_btn').show();
            $('#verifyCapture').css('border-color','red');
        }   
        
    }
    
}

function loginUserGod(){

    if ( $('#lm_username').val() != '' || $('#lm_password').val()) {
        var logins = $('#lm_username').val() + $('#lm_password').val();
        console.log("User id: "+ logins);

        firebaseGetUser(logins);
    }else{
        console.log("Enter inputs..");
        $('.login_error').text('Incorrect logins');
        setTimeout(
            function(){
                $('.login_error').text('');
            },3000
        );
    }

}
    var LOGOUT_USER_ID;                                    
function firebaseGetUser(usernamepassword){
    console.log('GET USER AFTER VERIFICATION');
    $('.loginForm').hide();
    $('#login_btn').hide();
    $('#signup_loader').removeClass('hide');
    var user_id= usernamepassword;
    LOGOUT_USER_ID = user_id;
    userID = user_id;
    //alert(user_id);
    var docRef = firebase.firestore().collection("ACCOUNT").doc(user_id);

    docRef.get().then((doc) => {
        if (doc.exists) {
            BTC_CHECKER_COUNTER();
            console.log("Document data:", doc.data());
            $('#nameOfUser').text(doc.data().username);
            REGISTER_IP(user_id);
            $('.ACCOUNT-PAGE').show();
            openAll();
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document for: !", user_id);
            move2Register();
            //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
            $('.login_error').text('User logins incorrect. Try again with the right logins or create a new account');
        }
    }).catch((error) => {
        console.log("Error getting document for: ", error);
        //move2Register();
           $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');

        setTimeout(
            function(){
                $('.EG_verify').text('Your account cannot be found please try again or register for  a new account.');
            },4000
        );
    });
}
//END OF LOGIN USER SECTION

function openMenu(){
    $('.menu_mobile').addClass('menu_mobile_effect');
    console.log('Run effect');
    nb_col_3
}
function closeMenu(){
    $('.menu_mobile').removeClass('menu_mobile_effect');
}


function move2Register(){
    $('#loginForm').addClass('hide');

    $('#registerForm').removeClass('hide');
}
function move2Login(){
    $('#loginForm').removeClass('hide');

    $('#registerForm').addClass('hide');
}

function accessAccount(username,password){
    $('.ACCOUNT-PAGE').removeClass('hide');
    openAll();
    //$('#HOME_CONTENT').removeClass('hide');
    
}
function signUp(){
    $('#signUp_btn').hide();
    var username, password, confirmPassword;

    username = $('#lm_username_reg').val();
  
    password = $('#password_input').val();
   

    //VERIFY USER REGISTRATION
    if (username != '' && confirmPassword != '' && password != '') {
        firebaseAddUser(username,password);
        
    }else{
        $('#signUp_btn').show();
        if (username == '' || password == '' || confirmPassword == '') {
            $('#register_btns .error').text('Input fields cannot be left blank');
            setTimeout(
                function(){
                    $('#register_btns .error').text('');
                },6000
            );
        }
    }
    
    

}
function firebaseAddUser(username,password){
    var client_id = username + password;
    firebase.firestore().collection("accounts").doc(client_id).set({
        username: username,
        password: password,
        balance: '0.00',
        date: 18042022
    })
    .then((docRef) => {
        console.log("ACCOUNT CREATED: ");
        //REGISTER_IP(client_id);
        move2Login();
        //APRIL 18 2022
        $('.signups_ui').hide();
        GET_IP_ADDRESS();
        //end of april
        $('.accountCreatedHides').hide();
        $('.accountSuccessCreate').removeClass('hide');
        $('.accountSuccessInfo').text('Your account has successfully been created. Login Now');
        $('.accountSuccessInfo').css('color','green');
        $('#verifyCapture').val('');
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
        alert('Failed to register user. Try again later');
        setTimeout(
            function(){
                location.reload();
            },3000
        );
    });
}

function registerUser(){
    $('#signUp_btn').hide();
    var username, password, confirmPassword;
    username = $('#lm_username_reg').val();
    password = $('#lm_password_reg').val();
   // var logins = $('#lm_username').val() + $('#lm_password').val();
    confirmPassword = $('#lm_password_confirm_reg').val();

    if (username != '' || password != '' || confirmPassword != '') {
        if (confirmPassword == password) {
            var docID = username + password;
            firebaseJoinUser(docID,username,password);
        }else{
            $('#signUp_btn').show();
            $('#register_btns .error').text('Password does not match. Try again');
            setTimeout(
                function(){
                    $('#register_btns .error').text('');
                },6000
            );
        }
    }else{
        $('#signUp_btn').show();
        $('#register_btns .error').text('Please fill all input fields and try again');
            setTimeout(
                function(){
                    $('#register_btns .error').text('');
                },6000
            );
    }
}

function firebaseJoinUser(docID, username,password){
    // Add a new document in collection "cities"
    console.log('GTT111');
    var db = firebase.firestore();
    db.collection("ACCOUNT").doc(docID).set({
        username: username,
        password: password,
        date: "JUNE23",
        balance: "0.00"
    })
    .then(() => {
        console.log("Document successfully written!");
        $('#signUp_btn').show();
       // M.toast({html: 'ACCOUNT SUCCESSFULLY CREATED.'});
       // $('.accCreated').text('Your account has been created, login now...');
       // move2Login();
       firebaseGetUser(docID);
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
        $('#signUp_btn').show();
    });
}
    

function logout(){
    var db = firebase.firestore();
    db.collection("FIREWALL").doc(LOGOUT_USER_ID).delete().then(() => {
        console.log("Document successfully deleted!");
        location.reload();
    }).catch((error) => {
        console.error("Error removing document: ", error);
        location.reload();
    });
}

var num = 0;
function showBalanceMore(){
    $('.balance__2').hide();
    if (num == 0) {
        $('.balance_2').fadeIn();
        num = 1;
    }else {
        $('.balance_2').hide();
        $('.balance_2').fadeOut();
        num = 0;
    }

   // $('.SEC').show();
    
}

function showBalanceMoree(){
    $('.balance_2').hide();
    if (num == 0) {
        $('.balance__2').fadeIn();
        num = 1;
    }else {
        $('.balance__2').hide();
        $('.balance__2').fadeOut();
        num = 0;
    }


    
}

function SHOW_NEWS(){
    $('.SEC').hide();

    $('.NEWS').show();
}

function GET_CURRENT_DATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var hr = d.getHours();
    var mins = d.getMinutes();
    
    var outputt = (day<10 ? '0' : '') + day+ '-' +
        (month<10 ? '0' : '') + month + '-' +
        d.getFullYear();

        var output = d.getFullYear() + '-' +
        (month<10 ? '0' : '') + month + '-' +
        (day<10 ? '0' : '') + day;

        TODAY_DATE=output;

        $('.cDate').text(TODAY_DATE);
        $('.cDate').text(TODAY_DATE);
        console.log('Todays date: ' + TODAY_DATE);

        
}

function DATABASE_DATE(){
    var d = new Date();

    var month = d.getMonth()+1;
    var day = d.getDate();
    var year = d.getFullYear();
    var fullYr = 
    (month<10 ? '0' : '') + month + '-' +
    (day<10 ? '0' : '') + day+ '-' +
    d.getFullYear();

    console.log('NB DATE::: '+ fullYr);
    $('.capsule_date').text(fullYr);
    
    var output = d.getFullYear() + '/' +
        (month<10 ? '0' : '') + month + '/' +
        (day<10 ? '0' : '') + day;
}