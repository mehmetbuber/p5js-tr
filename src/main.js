// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain
// Code for: https://youtu.be/AaGK-fj-BAM

var y;
var oran = 20;

var yemek;

function setup() {
  tuvalOlustur(600, 600);
  y = new Yilan();
  saniyedeResim(10);
  konumSec();
}

function konumSec() {
  var sutun = asagi(width/oran);
  var satir = asagi(height/oran);
  yemek = vektorOlustur(asagi(rastgele(sutun)), asagi(rastgele(satir)));
  yemek.mult(oran); //TR Gelecek
}

function mousePressed() {
  y.toplam++;
}

function draw() {
  arkaPlan(51);

  if (y.ye(yemek)) {
    konumSec();
  }
  y.olum();
  y.guncelle();
  y.goster();

  doldur(255, 0, 100);
  dikdortgen(yemek.x, yemek.y, oran, oran);
}

function keyPressed() {
  console.log(tusKodu());
  if (tusKodu() === "YUKARI") { 
    y.yon(0, -1);
  } else if (tusKodu() === "AŞAĞI") { 
    y.yon(0, 1);
  } else if (tusKodu() === "SAĞ") { 
    y.yon(1, 0);
  } else if (tusKodu() === "SOL") { 
    y.yon(-1, 0);
  }
}

function Yilan() {
  this.x = 0;
  this.y = 0;
  this.xHizi = 1;
  this.yHizi = 0;
  this.toplam = 0;
  this.kuyruk = [];

  this.ye = function(konum) {
    var d = uzaklik(this.x, this.y, konum.x, konum.y);
    if (d < 1) {
      this.toplam++;
      return true;
    } else {
      return false;
    }
  }

  this.yon = function(x, y) {
    this.xHizi = x;
    this.yHizi = y;
  }

  this.olum = function() {
    for (var i = 0; i < this.kuyruk.length; i++) {
      var konum = this.kuyruk[i];
      var uzak = uzaklik(this.x, this.y, konum.x, konum.y);
      if (uzak < 1) {
        console.log('tekrar başlıyor');
        this.toplam = 0;
        this.kuyruk = [];
      }
    }
  }

  this.guncelle = function() {
    for (var i = 0; i < this.kuyruk.length - 1; i++) {
      this.kuyruk[i] = this.kuyruk[i + 1];
    }
    if (this.toplam >= 1) {
      this.kuyruk[this.toplam - 1] = vektorOlustur(this.x, this.y);
    }

    this.x = this.x + this.xHizi * oran;
    this.y = this.y + this.yHizi * oran;

    this.x = sinirla(this.x, 0, width - oran); 
    this.y = sinirla(this.y, 0, height - oran);
  }

  this.goster = function() {
    doldur(255);
    for (var i = 0; i < this.kuyruk.length; i++) {
      dikdortgen(this.kuyruk[i].x, this.kuyruk[i].y, oran, oran);
    }
    dikdortgen(this.x, this.y, oran, oran);
  }
}