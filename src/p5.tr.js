/*
    p5js Türkçe Wrapper
    Geliştiren: Mehmet Büber - mail@mehmetbuber.com - http://www.mehmetbuber.com
    Proje: http://p5js.mehmetbuber.com/
    p5js Resmi Site: http://p5js.org

    p5.js was created by Lauren McCarthy and is developed by a community of collaborators, with support from the Processing Foundation and NYU ITP. Identity and graphic design by Jerel Johnson.
*/

//-----------------------------------------------------------------------------------------
//Shapes
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//Shapes - 2D Primitives
//-----------------------------------------------------------------------------------------

//arc() -> yay()
function yay(x, y, genislik, yukseklik, baslangicAci, bitisAci, mod = null) {
    if (mod === "PASTA")
        mod = PIE
    if (mod === "KİRİŞ")
        mod = CHORD
    if (mod === "AÇIK")
        mod = OPEN

    arc(x, y, genislik, yukseklik, baslangicAci, bitisAci, mod);
}

//ellipse() -> elips()
function elips(x, y, genislik, yukseklik = null) {
    if (!yukseklik)
        yukseklik = genislik;
    ellipse(x, y, genislik, yukseklik);
}

//line() -> cizgi()
function cizgi(baslangicX, baslangicY, bitisX, bitisY) {
    line(baslangicX, baslangicY, bitisX, bitisY);
}

//point() -> nokta()
function nokta(x, y) {
    point(x, y);
}

//quad() -> dortgen()
function dortgen(x1, y1, x2, y2, x3, y3, x4, y4) {
    quad(x1, y1, x2, y2, x3, y3, x4, y4);
}

//rect() -> dikdortgen()
function dikdortgen(x, y, genislik, yukseklik, solUst = null, sagUst = null, sagAlt = null, solAlt = null) {
    rect(x, y, genislik, yukseklik, solUst, sagUst, sagAlt, solAlt);
}

//triangle() -> ucgen()
function ucgen(x1, y1, x2, y2, x3, y3) {
    triangle(x1, y1, x2, y2, x3, y3);
}

//-----------------------------------------------------------------------------------------
//Shapes - Attributes
//-----------------------------------------------------------------------------------------

//ellipseMode() -> elipsModu()
function elipsModu(mod) {
    if (mod === "YARIÇAP")
        ellipseMode(RADIUS);
    if (mod === "MERKEZ")
        ellipseMode(CENTER);
    if (mod === "KÖŞE")
        ellipseMode(CORNER);
    if (mod === "KÖŞELER")
        ellipseMode(CORNERS);
}

//smooth() -> keskin()
function keskin() {
    noSmooth();
}

//rectMode() -> dikdortgenModu()
function dikdortgenModu(mod) {
    if (mod === "YARIÇAP")
        rectMode(RADIUS);
    if (mod === "MERKEZ")
        rectMode(CENTER);
    if (mod === "KÖŞE")
        rectMode(CORNER);
    if (mod === "KÖŞELER")
        rectMode(CORNERS);
}

//smooth() -> yumusak()
function yumusak() {
    smooth();
}

//strokeCap() -> hatTipi()
function hatTipi(tip) {
    if (tip === "YUVARLAK")
        strokeCap(ROUND);
    if (tip === "KARE")
        strokeCap(SQUARE);
    if (tip === "ÇERÇEVE")
        strokeCap(PROJECT);
}

//strokeJoin() -> hatBirlesimi()
function hatBirlesimi(tip) {
    if (tip === "DÜZ")
        strokeJoin(MITER);
    if (tip === "EĞİMLİ")
        strokeJoin(BEVEL);
    if (tip === "YUVARLAK")
        strokeJoin(ROUND);
}

//strokeWeight() -> hatKalinligi()
function hatKalinligi(kalinlik) {
    strokeWeight(kalinlik)
}

//-----------------------------------------------------------------------------------------
//Shapes - Curves
//-----------------------------------------------------------------------------------------

//bezierPoint() -> bezierNoktasi()
function bezierNoktasi(x1, x2, x3, x4, zaman) {
    return bezierPoint(x1, x2, x3, x4, zaman);
}

//bazierTangent() -> bezierTegeti()
function bezierTegeti(x1, x2, x3, x4, zaman) {
    return bezierTangent(x1, x2, x3, x4, zaman);
}

//curve() -> egri()
function egri(x1, y1, x2, y2, x3, y3, x4, y4) {
    return curve(x1, y1, x2, y2, x3, y3, x4, y4);
}

//curveTightness() -> egriHassasligi()
function egriHassasligi(darlik) {
    curveTightness(darlik);
}
//curvePoint() -> egriNoktasi()
function egriNoktasi(x1, x2, x3, x4, zaman) {
    return curvePoint(x1, x2, x3, x4, zaman);
}

//curveTangent() -> bezierTegeti()
function egriTegeti(x1, x2, x3, x4, zaman) {
    return curveTangent(x1, x2, x3, x4, zaman);
}

//-----------------------------------------------------------------------------------------
//Shapes - Vertex
//-----------------------------------------------------------------------------------------

//beginContour() -> konturaBasla()
function konturaBasla() {
    beginContour();
}

//beginShape() -> sekleBasla()
function sekleBasla() {
    beginShape();
}

//bezierVertex() -> bezierNoktasi()
function bezierTepesi(x2, y2, x3, y3, x4, y4) {
    bezierVertex(x2, y2, x3, y3, x4, y4);
}

//bezierVertex() -> bezierNoktasi()
function egriTepesi(x, y) {
    curveVertex(x, y);
}

//beginContour() -> konturaBasla()
function konturuBitir() {
    endContour();
}

//endShape() -> sekliBitir()
function sekliBitir() {
    endShape();
}

//quadraticVertex() -> kareselTepe()
function kareselTepe(cx, cy, x3, y3) {
    quadraticVertex(cx, cy, x3, y3);
}

//vertex() -> tepe()
function tepe(x, y, z = 0) {
    vertex(x, y, z);
}

//-----------------------------------------------------------------------------------------
//Shapes - 3D Models
//-----------------------------------------------------------------------------------------

//TODO loadModel()

//-----------------------------------------------------------------------------------------
//Shapes - 3D Primitives
//-----------------------------------------------------------------------------------------

//plane() -> duzlem()
function duzlem(genislik, yukseklik, detayX, detayY) {
    plane(genislik, yukseklik, detayX, detayY);
}

//box() -> kutu()
function kutu(genislik, yukseklik = null, derinlik = null, detayX = null, detayY = null) {
    if (!yukseklik)
        yukseklik = genislik;
    if (!derinlik)
        derinlik = genislik;

    box(genislik, yukseklik, derinlik, detayX, detayY);
}

//sphere() -> kure()
function kure(yariCap, detayX = null, detayY = null) {
    sphere(yariCap, detayX, detayY);
}

//cylinder() -> silindir()
function silindir(yariCap, yukseklik, detayX = null, detayY = null) {
    cylinder(yariCap, yukseklik, detayX, detayY);
}

//cone() -> koni()
function koni(yariCap, yukseklik, detayX = null, detayY = null) {
    cone(yariCap, yukseklik, detayX, detayY);
}

//ellipsoid() -> elipsoid()
function elipsoid(yariCapX, yariCapY, yariCapZ, detayX = null, detayY = null) {
    ellipsoid(yariCapX, yariCapY, yariCapZ, detayX, detayY);
}

//torus() -> halka()
function halka(yaricap, tupYaricapi, detayX = null, detayY = null) {
    torus(yaricap, tupYaricapi, detayX, detayY);
}


//-----------------------------------------------------------------------------------------
//Color
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//Color - Creating & Reading
//-----------------------------------------------------------------------------------------

//alpha() -> alfa()
function alfa(renk) {
    return alpha(renk);
}

//blue() -> mavi()
function mavi(renk) {
    return blue(renk);
}

//brightness() -> parlaklik()
function parlaklik(renk) {
    return brightness(renk);
}

//brightness() -> parlaklik()
function parlaklik(renk) {
    return brightness(renk);
}

//color() -> renk()
function renk(kirmizi, yesil = null, mavi = null, alfa = null) {
    if (alfa != null)
        return color(kirmizi, yesil, mavi, alfa);
    else {
        if (mavi != null)
            return color(kirmizi, yesil, mavi);
        else {
            if (yesil != null)
                return color(kirmizi, yesil);
            else
                return color(kirmizi);
        }
    }
}

//green() -> yesil()
function yesil(renk) {
    return green(renk);
}

//red() -> kirmizi()
function kirmizi(renk) {
    return red(renk);
}

//saturation() -> doygunluk()
function doygunluk(renk) {
    return saturation(renk);
}

//-----------------------------------------------------------------------------------------
//Color - Setting
//-----------------------------------------------------------------------------------------

//background() -> arkaPlan()
function arkaPlan(kirmizi, yesil = null, mavi = null, alfa = null) {
    if (alfa)
        background(kirmizi, yesil, mavi, alfa);
    else {
        if (mavi)
            background(kirmizi, yesil, mavi);
        else {
            if (yesil)
                background(kirmizi, yesil);
            else
                background(kirmizi);
        }
    }
}

//clear() -> temizle()
function temizle() {
    clear();
}

//colorMode() -> renkModu()
function renkModu(mode, max1 = null, max2 = null, max3 = null, maxA = null) {
    if (maxA)
        colorMode(mode, max1, max2, max3, maxA);
    else {
        if (max1)
            colorMode(mode, max1);
        else
            colorMode(mode);
    }
}

//fill() -> doldur()
function doldur(kirmizi, yesil = null, mavi = null, alfa = null) {
    if (alfa)
        fill(kirmizi, yesil, mavi, alfa);
    else {
        if (mavi)
            fill(kirmizi, yesil, mavi);
        else {
            if (yesil)
                fill(kirmizi, yesil);
            else
                fill(kirmizi);

        }
    }
}

//noFill() -> bos()
function bos() {
    noFill();
}

//noStroke() -> hatYok()
function hatYok() {
    noStroke();
}

//stroke() -> renkModu()
function renkModu(v1, v2 = null, v3 = null, alfa = null) {
    if (alfa)
        stroke(v1, v2, v3, alfa);
    else {
        if (v2)
            stroke(v1, v2);
        else
            stroke(v1);
    }
}

//-----------------------------------------------------------------------------------------
//Rendering
//-----------------------------------------------------------------------------------------

//createCanvas() -> tuvalOlustur()
function tuvalOlustur(genislik, yukseklik, renderer = null) {
    createCanvas(genislik, yukseklik, renderer);
}

//resizeCanvas() -> tuvaliBoyutlandir()
function tuvaliBoyutlandir(genislik, yukseklik, anindaDegistir = null) {
    resizeCanvas(genislik, yukseklik, anindaDegistir);
}

//noCanvas() -> tuvalYok()
function tuvalYok() {
    noCanvas();
}

//createGraphics() -> grafikOlustur()
function grafikOlustur(genislik, yukseklik, renderer = null) {
    return createGraphics(genislik, yukseklik, renderer);
}

//blendMode() -> karisimModu()
function karisimModu(mod) {
    blendMode(mod);
}

//-----------------------------------------------------------------------------------------
//Math
//-----------------------------------------------------------------------------------------

//createVector() -> vektorOlustur()
function vektorOlustur(x = 0, y = 0, z = 0) {
    return createVector(x, y, z);
}

//abs() -> mutlak()
function mutlak(sayi) {
    return abs(sayi);
}

//ceil() -> yukari()
function yukari(sayi) {
    return ceil(sayi);
}

//constrain() -> sinirla()
function sinirla(sayi, enAz, enFazla) {
    return constrain(sayi, enAz, enFazla);
}

//dist() -> uzaklik()
function uzaklik(x1, y1, z1, x2, y2 = null, z2 = null) {
    if (z2)
        return dist(x1, y1, z1, x2, y2, z2);
    else
        return dist(x1, y1, z1, x2);
}

//exp() -> eUzeri()
function eUzeri(sayi) {
    return exp(sayi);
}

//floor() -> asagi()
function asagi(sayi) {
    return floor(sayi);
}

//lerp() -> dogrusal()
function dogrusal(baslangic, bitis, oran) {
    return lerp(baslangic, bitis, oran);
}

//mag() -> buyukluk()
function buyukluk(x, y) {
    return mag(x, y);
}

//map() -> oranla()
function oranla(deger, baslangic1, bitis1, baslangic2, bitis2) {
    return map(deger, baslangic1, bitis1, baslangic2, bitis2);
}

//pow() -> ussu()
function ussu(sayi, ussu) {
    return pow(sayi, ussu)
}

//round() -> yuvarla()
function yuvarla(sayi) {
    return round(sayi)
}

//sq() -> karesi()
function karesi(sayi) {
    return sq(sayi)
}

//sqrt() -> karekoku()
function karekoku(sayi) {
    return sqrt(sayi)
}

//degrees() -> derece()
function derece(radyan) {
    degrees(radyan)
}

//radians() -> radyan()
function radyan(derece) {
    radians(derece)
}

//angleMode() -> aciModu()
function aciModu(mod) {
    if (mod === "DERECE")
        angleMode(DEGREES)
    if (mod === "RADYAN")
        angleMode(RADIANS)
}

//random() -> rastgele()
function rastgele(ilk, son) {
    if (son)
        return random(ilk, son);
    else
        return random(ilk);
}

//randomGaussian() -> rastgeleGaussian()
function rastgeleGaussian(ortalama, standartSapma) {
    randomGaussian(ortalama, standartSapma);
}

//randomSeed() -> rastgeleTohumu()
function rastgeleTohumu(sayi) {
    randomSeed(sayi);
}

//-----------------------------------------------------------------------------------------
//Environment
//-----------------------------------------------------------------------------------------

//print() -> yaz()
function yaz(degisken) {
    print(degisken);
}

//frameCount -> resimSayisi()
function resimSayisi() {
    return frameCount;
}

//focused() -> ekranda()
function ekranda() {
    return focused;
}

//cursor() -> imlec()
function imlec(tip, x = null, y = null) {
    var type = ARROW;
    if (tip == "OK")
        type = ARROW;
    if (tip == "ARTI")
        type = CROSS;
    if (tip == "EL")
        type = HAND;
    if (tip == "TAŞI")
        type = MOVE;
    if (tip == "METİN")
        type = TEXT;

    if (y)
        return cursor(type);
    else
        return cursor(type, [x], [y])
}

//frameRate() -> saniyedeResim()
function saniyedeResim(sayi) {
    if (sayi)
        return frameRate(sayi);
    else
        return frameRate();
}

//noCursor() -> imlecYok()
function imlecYok() {
    noCursor();
}

//displayWidth -> ekranGenisligi()
function ekranGenisligi() {
    return displayWidth;
}

//displayHeight -> ekranBoyu()
function ekranBoyu() {
    return displayHeight;
}

//windowWidth -> pencereGenisligi()
function pencereGenisligi() {
    return windowWidth;
}

//windowHeight -> pencereBoyu()
function pencereBoyu() {
    return windowHeight;
}

//windowResized() -> yenidenBoyutlandi()
function yenidenBoyutlandi() {
    return windowResized();
}

//width -> genislik()
function genislik() {
    return width;
}

//height -> boy()
function boy() {
    return height;
}

//fullscreen() -> tamEkran()
function tamEkran(durum = null) {
    if (durum)
        return fullscreen(durum);
    else
        return fullscreen();
}

//pixelDensity() -> pixelYogunlugu()
function pixelYogunlugu(sayi = null) {
    if (sayi)
        return pixelDensity(sayi);
    else
        return pixelDensity();
}

//displayDensity() -> ekranYogunlugu()
function ekranYogunlugu() {
    return displayDensity();
}


//-----------------------------------------------------------------------------------------
//Environment
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//Acceleration
//-----------------------------------------------------------------------------------------

//deviceOrientation -> cihazOryantasyonu()
function cihazOryantasyonu() {
    if (deviceOrientation === LANDSCAPE)
        return "YATAY";
    else if (deviceOrientation === PORTRAIT)
        return "DİKEY";
    else
        return deviceOrientation;
}

//accelerationX -> ivmeX()
function ivmeX() {
    return accelerationX;
}

//accelerationY -> ivmeY()
function ivmeY() {
    return accelerationY;
}

//accelerationZ -> ivmeZ()
function ivmeZ() {
    return accelerationZ;
}

//paccelerationX -> oncekiIvmeX()
function oncekiIvmeX() {
    return paccelerationX;
}

//paccelerationY -> oncekiIvmeY()
function oncekiIvmeY() {
    return paccelerationY;
}

//paccelerationZ -> oncekiIvmeZ()
function oncekiIvmeZ() {
    return paccelerationZ;
}

//rotationX -> donusX()
function donusX() {
    return rotationX;
}

//rotationY -> donusY()
function donusY() {
    return rotationY;
}

//rotationZ -> donusZ()
function donusZ() {
    return rotationZ;
}

//pRotationX -> oncekiDonusX()
function oncekiDonusX() {
    return pRotationX;
}

//pRotationY -> oncekiDonusY()
function oncekiDonusY() {
    return pRotationY;
}

//pRotationZ -> oncekiDonusZ()
function oncekiDonusZ() {
    return pRotationZ;
}

//setMoveThreshold() -> hareketEsigiBelirle()
function hareketEsigiBelirle(sayi) {
    setMoveThreshold(sayi);
}

//setShakeThreshold() -> sallamaEsigiBelirle()
function sallamaEsigiBelirle(sayi) {
    setShakeThreshold(sayi)
}

//deviceMoved() -> cihazHareketEtti()
function cihazHareketEtti() {
    return deviceMoved();
}

//deviceTurned() -> cihazCevrildi()
function cihazCevrildi() {
    return deviceTurned();
}

//deviceShaken() -> cihazSallandi()
function cihazSallandi() {
    return deviceShaken();
}

//-----------------------------------------------------------------------------------------
//Keyboard
//-----------------------------------------------------------------------------------------

//keyIsPressed -> tusaBasildi()
function tusaBasildi() {
    return keyIsPressed;
}

//key -> tus()
function tus() {
    return key;
}

//keyCode -> tusKodu()
function tusKodu() {
    if (keyCode === 38)
        return "YUKARI";
    else if (keyCode === 37)
        return "SOL";
    else if (keyCode === 40)
        return "AŞAĞI";
    else if (keyCode === 39)
        return "SAĞ";
    else
        return keyCode;

}

//keyIsDown() -> tusaBasili()
function tusaBasili(tus) {
    if (tus === "YUKARI")
        return keyIsDown(UP_ARROW);
    else if (tus === "AŞAĞI")
        return keyIsDown(DOWN_ARROW);
    else if (tus === "SOL")
        return keyIsDown(LEFT_ARROW);
    else if (tus === "SAĞ")
        return keyIsDown(RIGHT_ARROW);
    else
        return keyIsDown(tus);
}

//-----------------------------------------------------------------------------------------
//Mouse
//-----------------------------------------------------------------------------------------

//mouseX -> mouseX()
function mouseX() {
    return mouseX;
}

//mouseY -> mouseY()
function mouseY() {
    return mouseY;
}

//pmouseX -> oncekiMouseX()
function oncekiMouseX() {
    return pmouseX;
}

//pmouseY -> oncekiMouseY()
function oncekiMouseY() {
    return pmouseY;
}

//winMouseX -> pencereMouseX()
function pencereMouseX() {
    return winMouseX;
}

//winMouseY -> pencereMouseY()
function pencereMouseY() {
    return winMouseY;
}

//winMouseX -> oncekiPencereMouseX()
function oncekiPencereMouseX() {
    return winMouseX;
}

//winMouseY -> oncekiPencereMouseY()
function oncekiPencereMouseY() {
    return winMouseY;
}

//mouseButton -> mouseButonu()
function mouseButonu() {
    if (mouseButton === LEFT)
        return "SOL";
    else if (mouseButton === RIGHT)
        return "SAĞ";
    else if (mouseButton === CENTER)
        return "ORTA";
    else
        return mouseButton;
}

//mousePressed -> mouseBasildi()
function mouseBasildi() {
    return mousePressed;
}

//-----------------------------------------------------------------------------------------
//Touch
//-----------------------------------------------------------------------------------------

//touches -> dokunuslar()
function dokunuslar() {
    return touches;
}

//-----------------------------------------------------------------------------------------
//Transform
//-----------------------------------------------------------------------------------------

//rotate -> cevir()
function cevir(radyan) {
    rotate(radyan);
}

//rotateX -> cevirX()
function cevirX(radyan) {
    rotateX(radyan);
}

//rotateY -> cevirY()
function cevirY(radyan) {
    rotateY(radyan);
}

//rotateZ -> cevirZ()
function cevirZ(radyan) {
    rotateZ(radyan);
}

//scale -> oranla()
function oranla(oran, x = null, y = null) {
    if (y)
        scale(oran, x, y);
    else
        scale(oran);
}

//shearX -> kesX()
function kesX(radyan) {
    shearX(radyan);
}

//shearY -> kesY()
function kesY(radyan) {
    shearY(radyan);
}

//translate -> tasi()
function tasi(x, y, z = null) {
    if (z)
        translate(x, y, z);
    else
        translate(x, y);
}

//-----------------------------------------------------------------------------------------
//Typography
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//Attributes
//-----------------------------------------------------------------------------------------

//textAlign -> metinHizala()
function metinHizala(hiza) {
    if (hiza === "SOL")
        hiza = LEFT
    else if (hiza === "SAĞ")
        hiza = RIGHT
    else if (hiza === "MERKEZ")
        hiza = CENTER;
    else
        var hiza = LEFT;
    textAlign(hiza);
}

//textLeading -> metinBoslugu()
function metinBoslugu(bosluk) {
    textLeading(bosluk);
}

//textSize -> metinBoyu()
function metinBoyu(bosluk) {
    textSize(boyut);
}
//textStyle -> metinTipi()
function metinTipi(tip) {
    if (tip === "NORMAL")
        tip = NORMAL
    else if (tip === "EĞİK")
        tip = ITALIC
    else if (tip === "KALIN")
        tip = BOLD;
    else
        var tip = NORMAL;
    textStyle(tip);
}

//textWidth -> metinGenisligi()
function metinGenisligi(bosluk) {
    textWidth(boyut);
}

//textAscent -> ustMetin()
function ustMetin() {
    return textAscent();
}

//textDescent -> altMetin()
function altMetin() {
    return textDescent();
}

//-----------------------------------------------------------------------------------------
//Loading & Displaying
//-----------------------------------------------------------------------------------------

//loadFont -> fontYukle()
function fontYukle(font, fonksiyon = null) {
    if (fonksiyon)
        loadFont(font, fonksiyon)
    else
        loadFont(font);
}

//text -> metin()
function metin(metin, x, y, x2 = null, y2 = null) {
    if (y2)
        text(metin, x, y, x2, y2);
    else
        text(metin, x, y);
}

//textFont -> metinFontu()
function metinFontu(font, boyut = null) {
    if (boyut)
        textFont(font, boyut);
    else {
        if (font)
            textFont(font);
        else
            textFont();
    }
}

//-----------------------------------------------------------------------------------------
//IO
//-----------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------
//Input
//-----------------------------------------------------------------------------------------

//loadJSON -> jsonYukle()
function jsonYukle(json, jsonAyarlari = null, dataTipi = null, fonksiyon = null, hataFonksiyonu = null) {
    if (hataFonksiyonu)
        loadJSON(json, jsonAyarlari, dataTipi, fonksiyon, hataFonksiyon);
    else {
        if (fonksiyon)
            loadJSON(json, jsonAyarlari, dataTipi, fonksiyon);
        else {
            if (dataTipi)
                loadJSON(json, jsonAyarlari, dataTipi);
            else {
                if (jsonAyarlari)
                    loadJSON(json, jsonAyarlari);
                else {
                    loadJSON(json);
                }
            }
        }
    }
}

//loadStrings -> stringYukle()
function stringYukle(dosya, fonksiyon = null, hataFonksiyonu = null) {
    if (hataFonksiyonu)
        loadStrings(dosya, fonksiyon, hataFonksiyonu);
    else {
        if (fonksiyon)
            loadStrings(dosya, fonksiyon);
        else
            loadStrings(dosya);
    }
}

//loadTable -> tabloYukle()
function tabloYukle(dosya, ayarlar = null, fonksiyon = null, hataFonksiyonu = null) {
    if (hataFonksiyonu)
        loadTable(dosya, ayarlar, fonksiyon, hataFonksiyonu);
    else {
        if (fonksiyon)
            loadTable(dosya, ayarlar, fonksiyon);
        else {
            ;
            if (ayarlar)
                loadTable(dosya, ayarlar);
            else
                loadTable(dosya);
        }
    }
}


//loadXML -> xmlYukle()
function xmlYukle(dosya, fonksiyon = null, hataFonksiyonu = null) {
    if (hataFonksiyonu)
        loadXML(dosya, fonksiyon, hataFonksiyonu);
    else {
        if (fonksiyon)
            loadXML(dosya, fonksiyon);
        else
            loadXML(dosya);
    }
}

//-----------------------------------------------------------------------------------------
//Output
//-----------------------------------------------------------------------------------------

//save -> kaydet()
function kaydet(objeYaDaDosya = null, dosya = null, ayarlar = null) {
    if (ayarlar)
        save(dosya, fonksiyon, hataFonksiyonu);
    else {
        if (dosya)
            save(dosya, fonksiyon);
        else {
            if (objeYaDaDosya)
                save(dosya);
            else
                save();
        }
    }
}

//saveJson -> jsonKaydet()
function jsonKaydet(json, dosyaAdi, optimizeEt = null) {
    if (optimizeEt)
        saveJson(json, dosyaAdi, optimizeEt);
    else
        saveJson(json, dosyaAdi);
}

//saveString -> stringKaydet()
function stringKaydet(liste, dosyaAdi) {
    saveString(json, dosyaAdi);
}

//saveTable -> tabloKaydet()
function tabloKaydet(json, dosyaAdi, ayarlar = null) {
    if (ayarlar)
        saveTable(json, dosyaAdi, ayarlar);
    else
        saveTable(json, dosyaAdi);
}

//day -> gun()
function gun() {
    return day();
}

//hour -> saat()
function saat() {
    return hour();
}

//minute -> dakika()
function dakika() {
    return minute();
}

//millis -> miliSaniye()
function miliSaniye() {
    return millis();
}

//month -> ay()
function ay() {
    return month();
}

//second -> saniye()
function saniye() {
    return second();
}

//year -> yil()
function yil() {
    return year();
}

//-----------------------------------------------------------------------------------------
//Image
//-----------------------------------------------------------------------------------------

//createImage -> resimOlustur()
function resimOlustur(genislik, boy) {
    createImage(genislik, boy);
}

//saveCanvas -> tuvalKaydet()
function tuvalKaydet(seciliTuval, dosyaAdi, uzanti) {
    if (uzanti)
        saveCanvas(seciliTuval, dosyaAdi, uzanti);
    else {
        if (dosyaAdi)
            saveCanvas(seciliTuval, dosyaAdi);
        else {
            if (seciliTuval)
                saveCanvas(seciliTuval);
            else
                saveCanvas();
        }
    }
}

//saveFrames -> resimleriKaydet()
function resimleriKaydet(dosyaAdi, uzanti, sure, saniyedeResim, fonksiyon = null) {
    if (fonksiyon)
        saveFrames(dosyaAdi, uzanti, sure, saniyedeResim, fonksiyon);
    else
        saveFrames(dosyaAdi, uzanti, sure, saniyedeResim);
}

//-----------------------------------------------------------------------------------------
//Loading & Displaying
//-----------------------------------------------------------------------------------------

//loadImage -> resimYukle()
function resimYukle(dosya, fonksiyon = null, hataFonksiyonu = null) {
    if (hataFonksiyonu)
        loadImage(dosya, fonksiyon, hataFonksiyonu);
    else {
        if (fonksiyon)
            loadImage(dosya, fonksiyon);
        else
            loadImage(dosya);
    }
}

//image -> resim()
function resim(img, x, y, genislik, boy, sx, sy, dikdortgenGenisligi = null, dikdortgenBoyu = null) {
    if (dikdortgenBoyu)
        image(img, x, y, genislik, boy, sx, sy, dikdortgenGenisligi, dikdortgenBoyu);
    else {
        if (sy)
            image(img, x, y, genislik, boy, sx, sy);
        else {
            if (boy)
                image(img, x, y, genislik, boy);
            else
                image(img, x, y);
        }
    }
}

//tint -> ton()
function ton(kirmizi, yesil = null, mavi = null, genislik = null, alfa = null) {
    if (alfa)
        tint(kirmizi, yesil, mavi, genislik, alfa);
    else {
        if (yesil)
            tint(kirmizi, yesil);
        else
            tint(kirmizi);
    }
}
//noTint -> tonYok()
function tonYok() {
    noTint();
}

//imageMode -> resimModu()
function resimModu(mod) {
    if (mod === "KÖŞE")
        imageMode(CORNER);
    else if (mod === "KÖŞELER")
        imageMode(CORNERS);
    else if (mod === "MERKEZ")
        imageMode(CENTER);
}

//-----------------------------------------------------------------------------------------
//Pixels
//-----------------------------------------------------------------------------------------

//pixels -> pixeller()
function pixeller() {
    return pixels;
}

//copy -> kopyala()
function kopyala(resim, ustSolX, ustSolY, resimGenisligi, resimBoyu, hedefX, hedefY, hedefGenisligi, hedefBoyu) {
    return copy(resim, ustSolX, ustSolY, resimGenisligi, resimBoyu, hedefX, hedefY, hedefGenisligi, hedefBoyu);
}

//filter -> filtrele()
function filtrele(filtreTipi, filtreDegiskeni) {
    if (filtreDegiskeni)
        filter(filtreTipi, filtreDegiskeni);
    else
        filter(filtreTipi);
}
//get -> pixelRengi()
function pixelRengi(x, y, genislik, boy) {
    if (boy)
        get(x, y, genislik, boy);
    else {
        if (y)
            get(x, y);
        else
            get();
    }
}

//loadPixels -> pixelYukle()
function pixelYukle() {
    loadPixels();
}

//set -> pixelBelirle()
function pixelBelirle(x, y, renk) {
    set(x, y, renk);
}

//updatePixels -> pixelGuncelle()
function pixelGuncelle(x, y, genislik, boy) {
    if (boy)
        updatePixels(x, y, genislik, boy);
    else {
        if (y)
            updatePixels(x, y);
        else
            updatePixels();
    }
}

//-----------------------------------------------------------------------------------------
//Pixels
//-----------------------------------------------------------------------------------------

//updatePixels -> pixelGuncelle()
function ekle(liste, deger) {
    append(liste, deger);
}
