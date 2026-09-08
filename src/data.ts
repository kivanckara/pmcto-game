export type Metrics={cash:number; revenue:number; quality:number; morale:number};
export type Choice={text:string;reaction:string;effects:Partial<Metrics>;grade:'good'|'questionable'|'disaster'};
export type Encounter={id:string;npc:string;role:string;prompt:string;choices:Choice[]};
export const encounters:Encounter[]=[
 {id:'button',npc:'Ece',role:'Ürün Tasarımcısı',prompt:'Checkout butonunu kullanıcı testiyle seçelim diyorum. Ama üç mavi arasında kayboldum.',choices:[
  {text:'İki net seçenekle A/B test yapalım.',reaction:'Veri! Sonunda toplantıda hissiyat dışında bir misafir var.',effects:{cash:-10,revenue:25,quality:10,morale:5},grade:'good'},
  {text:'Kurumsal mavi olsun; bugün yayına alalım.',reaction:'Hızlı karar. Kullanıcılar sevmezse maviyi biraz daha mavi yaparız.',effects:{revenue:12,quality:-4,morale:-3},grade:'questionable'},
  {text:'Butonu kaldırın, sezgisel olsun.',reaction:'Satın alma artık gerçek bir hazine avı.',effects:{revenue:-35,quality:-15,morale:-8},grade:'disaster'}]},
 {id:'deploy',npc:'Mert',role:'Backend Geliştirici',prompt:'Cuma 17:47. Release hazır gibi, ama ödeme testleri hâlâ kırmızı.',choices:[
  {text:'Kritik testleri bitirip kademeli çıkaralım.',reaction:'Hafta sonum ve production aynı anda kurtuldu.',effects:{cash:-8,revenue:18,quality:12,morale:8},grade:'good'},
  {text:'Bas gitsin; production dürüst test ortamıdır.',reaction:'Alarm kanalına şimdiden “günaydın” yazıyorum.',effects:{revenue:28,cash:-45,quality:-16,morale:-12},grade:'disaster'},
  {text:'Pazartesi sabahına ertele, küçük risk.',reaction:'Makul. Cuma akşamı ilk kez sadece çay deploy edeceğim.',effects:{revenue:-6,quality:7,morale:6},grade:'questionable'}]},
 {id:'report',npc:'Selin',role:'Product Owner',prompt:'Müşteriler sade bir rapor ekranı istiyor. “Excel olmasın” diye özellikle yazmışlar.',choices:[
  {text:'İhtiyacı doğrula, küçük bir MVP çıkar.',reaction:'Sade, ölçülebilir, işe yarar… Biraz şüpheli derecede mantıklı.',effects:{cash:-15,revenue:32,quality:9,morale:6},grade:'good'},
  {text:'Raporlara yapay zekâ ve blockchain ekle.',reaction:'Rapor gelmedi ama whitepaper 84 sayfa oldu.',effects:{cash:-55,revenue:18,quality:-10,morale:-9},grade:'disaster'},
  {text:'CSV dışa aktarımıyla talebi hızlı çöz.',reaction:'Romantik değil ama müşterinin pazartesisi kurtuldu.',effects:{cash:-5,revenue:15,quality:3,morale:2},grade:'questionable'}]},
 {id:'cloud',npc:'Can',role:'DevOps Mühendisi',prompt:'Bulut faturası ikiye katlandı. Test kümesi geceleri de boş boş ısınıyor.',choices:[
  {text:'Ölç, boş kaynakları zamanlayıp kapat.',reaction:'Grafikler yeşil. Finans ilk kez bana kalp emojisi attı.',effects:{cash:45,revenue:4,quality:5,morale:5},grade:'good'},
  {text:'Hepsini kapat; maliyet sıfır.',reaction:'Maliyet sıfır, müşteri sıfır. Matematik kusursuz.',effects:{cash:30,revenue:-70,quality:-20,morale:-15},grade:'disaster'},
  {text:'Bir sunucu daha aç, yük dağılır belki.',reaction:'Fatura artık dengeli: her satır pahalı.',effects:{cash:-35,quality:3,morale:-2},grade:'questionable'}]},
 {id:'roadmap',npc:'Selin',role:'Product Owner',prompt:'Bu çeyrekte üç büyük öncelik var. Ekip matematiksel olarak bir buçuk ekip.',choices:[
  {text:'En değerliyi seç, kalanını açıkça sırala.',reaction:'Roadmap küçüldü, nefes alma alanımız büyüdü.',effects:{revenue:22,quality:7,morale:12},grade:'good'},
  {text:'Hepsine başla; çeviklik paralelliktir.',reaction:'Üç iş başladı. Hiçbiri yalnız hissetmiyor; hiçbiri bitmiyor.',effects:{revenue:12,cash:-25,quality:-8,morale:-14},grade:'disaster'},
  {text:'Birini yap, birine prototip, birini beklet.',reaction:'Dengeli. Yalnız “beklet” sütununa premium isim bulalım.',effects:{cash:-8,revenue:18,quality:4,morale:4},grade:'questionable'}]},
 {id:'bug',npc:'Mert',role:'Backend Geliştirici',prompt:'Bazı müşteriler ödeme sonunda 500 görüyor. Destek ekibi nefesini tutmuş.',choices:[
  {text:'Etkisini ölç, hotfix ve geri dönüş planı hazırla.',reaction:'Loglar konuştu, kartlar geçti, destek yeniden nefes aldı.',effects:{cash:-12,revenue:35,quality:14,morale:7},grade:'good'},
  {text:'Hata mesajını gizle; hata görünmez.',reaction:'Ekran tertemiz. Banka hesabı da yakında öyle olacak.',effects:{revenue:-45,quality:-18,morale:-10},grade:'disaster'},
  {text:'Ödemeyi geçici sıraya al, sabah düzelt.',reaction:'Satış kaçmadı ama kuyruğa isim verdik: Hayri.',effects:{cash:-10,revenue:12,quality:-3,morale:-2},grade:'questionable'}]},
 {id:'meeting',npc:'Ece',role:'Ürün Tasarımcısı',prompt:'Bugün odaklanmamız gerek. Takvimimde boş kalan yedi dakikayı koruyorum.',choices:[
  {text:'15 dakika: karar, sahip, sonraki adım.',reaction:'Toplantı erken bitti. Bunun için bir kutlama toplantısı… şaka!',effects:{revenue:10,quality:5,morale:13},grade:'good'},
  {text:'Üç saatlik “vizyon hizalama” açalım.',reaction:'Vizyon hizalandı; omurgalar hizasını kaybetti.',effects:{cash:-18,quality:-3,morale:-13},grade:'disaster'},
  {text:'Asenkron not yazın, gerekirse buluşuruz.',reaction:'Sessizlik içinde karar aldık. Kurumsal paranormal aktivite.',effects:{revenue:7,quality:2,morale:6},grade:'questionable'}]},
 {id:'bigidea',npc:'Leyla',role:'CEO / Finans',prompt:'Yönetim kâr istiyor. Sunumda roket emojisi için de boşluk bıraktım.',choices:[
  {text:'Müşteri değerini artır, maliyeti ölçülü azalt.',reaction:'Hem gelir hem disiplin? Roket emojisini hak ettin.',effects:{cash:35,revenue:40,quality:8,morale:5},grade:'good'},
  {text:'Ürünü baştan yazalım; bu kez kusursuz.',reaction:'Gelir beklerken mimari diyagram gerçekten çok güzel oldu.',effects:{cash:-85,revenue:-25,quality:8,morale:-16},grade:'disaster'},
  {text:'Herkesi Chief yap, zamları sonra konuşuruz.',reaction:'Mutfağın yeni Chief Kettle Officer’ı gururlu.',effects:{cash:-10,revenue:2,morale:9,quality:-2},grade:'questionable'}]}
];
