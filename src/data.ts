export type Metrics = { cash: number; revenue: number; quality: number; morale: number };
export type Choice = { text: string; reaction: string; effects: Partial<Metrics>; grade: 'good' | 'questionable' | 'disaster' };
export type Encounter = { id: string; npc: string; role: string; prompt: string; choices: Choice[] };

/** E-Para A.Ş.'nin tamamen kurmaca ve özellikle absürt iş günü. */
export const encounters: Encounter[] = [
  { id: 'qr-pigeon', npc: 'Tuğba', role: 'Ürün Tasarımcısı', prompt: 'E-Para cüzdanının QR kodu güvercin fotoğrafına benzeyince kullanıcılar ekmek kırıntısı yolluyor.', choices: [
    { text: 'Okunabilirliği test edip QR tasarımını sadeleştir.', reaction: 'Harika. Güvercinler üzgün ama ödemeler artık kasaya konuyor.', effects: { cash: -10, revenue: 25, quality: 10, morale: 5 }, grade: 'good' },
    { text: 'Güvercine papyon çiz; premium görünsün.', reaction: 'Premium güvercin hazır. Finans dünyası buna hazır mı, bilmiyorum.', effects: { revenue: 12, quality: -4, morale: 2 }, grade: 'questionable' },
    { text: 'QR’ı kaldır; IBAN’ı ezberlesinler.', reaction: 'Yirmi altı hane. Kullanıcı bağlılığı artık kelimenin tam anlamıyla zorunlu.', effects: { revenue: -35, quality: -15, morale: -8 }, grade: 'disaster' }
  ] },
  { id: 'friday-transfer', npc: 'Sinan', role: 'Backend Geliştirici', prompt: 'Cuma 17:47. Anlık para transferi hazır ama test hesabı az önce kendi kendine simit aldı.', choices: [
    { text: 'Kritik testleri bitirip kademeli aç.', reaction: 'Simit vakası izole edildi. Susamlar production’a ulaşmadı.', effects: { cash: -8, revenue: 18, quality: 12, morale: 8 }, grade: 'good' },
    { text: 'Bas gitsin; para zaten hareketi sever.', reaction: 'Para hareket etti. Nereye gittiğini pazartesi öğreneceğiz.', effects: { revenue: 28, cash: -45, quality: -16, morale: -12 }, grade: 'disaster' },
    { text: 'Pazartesiye ertele, hafta sonu simidi izle.', reaction: 'Temkinli. Test hesabı şu an çay sipariş etmeye çalışıyor.', effects: { revenue: -6, quality: 7, morale: 6 }, grade: 'questionable' }
  ] },
  { id: 'wallet-report', npc: 'Öykü', role: 'Product Owner', prompt: 'Esnaf müşteriler para akışı raporu istiyor. Şu an uygulama sadece “bol kazançlar” diyor.', choices: [
    { text: 'İhtiyacı doğrula, sade rapor MVP’si çıkar.', reaction: 'Rakamlar göründü. “Bol kazançlar” mesajını yine de manevi destek olarak tuttum.', effects: { cash: -15, revenue: 32, quality: 9, morale: 6 }, grade: 'good' },
    { text: 'Her işleme yapay zekâ burç yorumu ekle.', reaction: 'Havale gecikti çünkü Merkür ters işlemdeymiş.', effects: { cash: -55, revenue: 18, quality: -10, morale: -9 }, grade: 'disaster' },
    { text: 'Şimdilik düzgün bir CSV ver.', reaction: 'Romantik değil, ama muhasebeciler mutluluktan filtre açtı.', effects: { cash: -5, revenue: 15, quality: 3, morale: 2 }, grade: 'questionable' }
  ] },
  { id: 'cloud-atm', npc: 'Berke', role: 'DevOps Mühendisi', prompt: 'Bulut faturası ikiye katlandı. “Sanal ATM” sunucusu geceleri gerçekten nakit sayma sesi çıkarıyor.', choices: [
    { text: 'Kullanımı ölç, boş kaynakları zamanla.', reaction: 'Fatura düştü. Sunucu artık sadece mesai saatinde şıkırdıyor.', effects: { cash: 45, revenue: 4, quality: 5, morale: 5 }, grade: 'good' },
    { text: 'Tüm sunucuları kapat; maliyet sıfır.', reaction: 'Maliyet sıfır. E-Para’nın “e” kısmı da gitti.', effects: { cash: 30, revenue: -70, quality: -20, morale: -15 }, grade: 'disaster' },
    { text: 'Bir sunucu daha aç; yalnız kalmasın.', reaction: 'Artık iki sunucu beraber para sayıyor. Fatura sosyalleşti.', effects: { cash: -35, quality: 3, morale: -2 }, grade: 'questionable' }
  ] },
  { id: 'roadmap', npc: 'Funda', role: 'Ürün Müdürü', prompt: 'Roadmap’te temassız ödeme, görünmez kart ve telepatik POS var. Ekipte üç buçuk kişi kaldı.', choices: [
    { text: 'En değerliyi seç, kalanını açıkça sırala.', reaction: 'Temassız ödeme kaldı. Telepatik POS düşüncelerimizde yaşayacak.', effects: { revenue: 22, quality: 7, morale: 12 }, grade: 'good' },
    { text: 'Hepsine başla; çeviklik aynı anda koşmaktır.', reaction: 'Üç ürün başladı, ekip görünmez karta dönüştü.', effects: { revenue: 12, cash: -25, quality: -8, morale: -14 }, grade: 'disaster' },
    { text: 'Birini yap, birini prototiple, birini rüyaya bırak.', reaction: 'Telepatik POS artık resmî olarak “rüya backlog”unda.', effects: { cash: -8, revenue: 18, quality: 4, morale: 4 }, grade: 'questionable' }
  ] },
  { id: 'ghost-payment', npc: 'Can', role: 'Finans & Uyum', prompt: 'Bir müşteri hayalet adına e-para hesabı açmış. Kimlik fotoğrafında sadece perde sallanıyor.', choices: [
    { text: 'Hesabı durdur, uyum kontrolü başlat.', reaction: 'Hayalet itiraz etti ama ıslak imza veremedi.', effects: { cash: -12, revenue: 20, quality: 14, morale: 7 }, grade: 'good' },
    { text: 'Paranormal müşteriler yeni segmentimiz olsun.', reaction: 'Aktif kullanıcı arttı; yaşayan kullanıcı oranı düştü.', effects: { revenue: 35, quality: -18, morale: -10 }, grade: 'disaster' },
    { text: 'Limiti ₺99 yap, vaka çözülene kadar izle.', reaction: 'Hayalet şimdi mikro ödeme yapıyor. Risk küçük, ürperti orta.', effects: { revenue: 8, quality: -3, morale: -2 }, grade: 'questionable' }
  ] },
  { id: 'meeting', npc: 'Tuğba', role: 'Ürün Tasarımcısı', prompt: 'E-Para kartının “bip” sesini seçmek için 48 kişilik toplantı daveti geldi.', choices: [
    { text: 'Üç sesi kullanıcıyla test edip karar ver.', reaction: 'Kazanan net: “bip”. “Möö” sesi şaşırtıcı biçimde ikinci.', effects: { revenue: 10, quality: 5, morale: 13 }, grade: 'good' },
    { text: 'Üç saatlik Sonic Branding Zirvesi yap.', reaction: 'Kimse sesi seçmedi ama artık herkes yankı konusunda uzman.', effects: { cash: -18, quality: -3, morale: -13 }, grade: 'disaster' },
    { text: 'Varsayılan bip kalsın, notu asenkron paylaş.', reaction: 'Sessizce karar aldık. İronik olarak bip gayet yüksek.', effects: { revenue: 7, quality: 2, morale: 6 }, grade: 'questionable' }
  ] },
  { id: 'bigidea', npc: 'Can', role: 'Finans & Uyum', prompt: 'E-Para kâr etmeli. Yönetim sunumuna koymak için dev bir altın kumbara da kiraladım.', choices: [
    { text: 'Müşteri değerini artır, maliyeti ölçülü azalt.', reaction: 'Hem gelir hem disiplin! Kumbara onaylarcasına şıngırdadı.', effects: { cash: 35, revenue: 40, quality: 8, morale: 5 }, grade: 'good' },
    { text: 'Tüm ödeme altyapısını baştan yazalım.', reaction: 'Para beklerken mimari diyagram gerçekten çok zengin görünüyor.', effects: { cash: -85, revenue: -25, quality: 8, morale: -16 }, grade: 'disaster' },
    { text: 'Herkesi Chief Para Officer yap.', reaction: 'Ofis bitkisinin kartviziti basıldı. Zam talebi de geldi.', effects: { cash: -10, revenue: 2, morale: 9, quality: -2 }, grade: 'questionable' }
  ] }
];
