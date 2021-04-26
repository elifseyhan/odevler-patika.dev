// Kullanıcıdan isim isteme
var name = prompt("Adınız Nedir?");
document.getElementById("myName").innerHTML = name;

// Kullanıcıya saat bilgisi gösterme
function showTime(){
    //Date metoduyla saat, dakika, saniye, gün değerlerinin alınması
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.getDay();
    
    //Gün olarak alınan değerin string olarak gösterilmesi
    if(day == 1){
        day = "Pazartesi";
    }else if(day == 2){
        day = "Salı";
    }else if(day == 3){
        day = "Çarşamba";
    }else if(day == 4){
        day = "Perşembe";
    }else if(day == 5){
        day = "Cuma";
    }else if(day == 6){
        day = "Cumartesi";
    }else if(day == 7){
        day = "Pazar";
    }
    
    //Saat, dakika ve saniye değerlerinin 10'dan küçük olup olmadığının kontrolü
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    //Zaman değerlerinin birleştirilmesi ve HTML içerisinde gösterilmesi
    var dateTime = hours + ":" + minutes + ":" + seconds + " " + day;
    document.getElementById("myClock").innerHTML = dateTime;

    //Değerlerin her 1 saniyede bir yenilenmesi
    setTimeout(showTime, 1000);
}

showTime();