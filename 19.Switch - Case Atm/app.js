/*

    1-Bakiye Görüntüleme 
    2-Para Çekme 
    3-Para Yatırma
    4-Çıkış

*/

    
    let bakiye =3000;
    let yeniSatir = "\r\n";
    let metin=("1-Bakiye Görüntüleme"+yeniSatir+"2-Para Çekme"+yeniSatir+"3-Para Yatırma"+yeniSatir+"4-Çıkış");

    let deger=(prompt(metin));

    switch(deger) {

        case "1" :
            alert("Bakiyeniz : "+bakiye);
            break;

        case "2" :
            let cekilecekTutar = (prompt("Çekilecek Tutarı Giriniz : "));
            if(cekilecekTutar<=bakiye) {
            bakiye=bakiye-cekilecekTutar;
            alert("Çekilen Tutar : "+cekilecekTutar+yeniSatir+"Güncel Bakiyeniz : "+bakiye);
            } else {
            alert("Limit Yetersiz"+yeniSatir+"Çekilecek Tutar : "+cekilecekTutar+yeniSatir+"Bakiyeniz : "+bakiye);
            } 
            break;

        case "3" :
            let yatirilacakTutar =Number(prompt("Yatırılacak Tutarı Giriniz : "));
            bakiye=bakiye+yatirilacakTutar;
            alert("Yatırılan Tutar : "+yatirilacakTutar+yeniSatir+"Güncel Bakiye : "+bakiye);
            break;

        case "4" :
            alert("Sistemden Çıkış Yapılmıştır");
            break;

        default :
            alert("Lütfen 1 ile 4 Arasında Bir Seçim Yapınız");
            break;



    }