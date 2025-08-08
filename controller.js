


function saveNewsCapsule(capsule){
    var news, datenb;

    if (news != '') {
        news = $('#info_'+capsule).text();
        datenb = $('#date_'+capsule).val();

        if (news != '') {
            add_to_database(capsule,news,datenb);
        } else {
            alert('Fields cannot be blank');
        }
    }

  

    console.log('News: '+ news);
    console.log('Date: '+ datenb);
}


function add_to_database(capsule, news, date){
    $('.save_btn_field').hide();
    $('.preloader-wrapper').css('display','block');
    firebase.firestore().collection("NEWS").doc(capsule).set({
        news: news,
        date: date
    })
    .then((docRef) => { 
        console.log("NEWS CREATED: ");
        $('.preloader-wrapper').css('display','none');
        $('.save_btn_field').show();
    })
    .catch((error) => {
        console.error("ERROR CREATING NEWS: ", error);
        $('.preloader-wrapper').css('display','none');
        $('.save_btn_field').show();
    });
}

function get_news_db(loop){
    var docRef = firebase.firestore().collection("NEWS").doc(loop);

        docRef.get().then((doc) => {
            if (doc.exists) {
                console.log("NEWS:", doc.data());
                //$('#capsule_date_'+loop).text(doc.data().date);
                $('#capsule_news_'+loop).text(doc.data().news);

                $('#date_'+loop).val(doc.data().date);
                $('#info_'+loop).text(doc.data().news);
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document for: !");
                //CANT FIND USER - CREATE A NEW ACCOUNT OR TRY AGAIN WITH THE CORRECT LOGINS
                
            }
        }).catch((error) => {
            console.log("Error getting document for: ", error);
        });
}

function ADMIN(){
    var username = $('#lm_username').val();

    if(username == 'ADMINISTRATOR' || username == '1106'){
        $('.CONTROL_PANEL_MASTER').removeClass('hide');
        openAll();
    }
}