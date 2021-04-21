
function Ad()
{
    var name=prompt("Adınız Nedir ??");
    document.getElementById("isim").innerText=name;
}











function Tarih(){

    var tarih = new Date();

    var gun=(tarih.getDay()).toString();
    
    var saat=tarih.getHours();
    var dakika=tarih.getMinutes();
    var saniye=tarih.getSeconds();

    if(gun==1)
{
    gun="Pazartesi";

}

else if(gun==2)
{
    gun="Salı";

}

else if(gun==3)
{
    gun="Çarşamba";

}

else if(gun==4)
{
    gun="Perşembe";

}

else if(gun==5)
{
    gun="Cuma";

}

else if(gun==6)
{
    gun="Cumartesi";

}

else if(gun==7)
{
    gun="Pazar";

}


if(saat<10)
{
    saat=("0"+(saat.toString()));

}







if(dakika<10)
{
    dakika=("0"+(dakika.toString()));

}


if(saniye<10)
{
    saniye=("0"+(saniye.toString()));

}

var TamTarih= (saat+":"+dakika+":"+saniye+" " +gun);

document.getElementById("saat").innerText=TamTarih;
//document.write(gun+"<br> "+saat+":"+dakika+":"+saniye);

setInterval(Tarih,1000);

}

Tarih();
Ad();





