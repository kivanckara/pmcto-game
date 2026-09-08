# CTO: Product Olma Simülatörü

Türkçe, yaklaşık beş dakikalık, 16-bit esintili bir ofis karar oyunu. CTO olarak ofiste dolaşın, ekibin işine (ölçülü biçimde) karışın ve şirketi gün sonuna çıkarın.

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim paketi için `npm run build`; yerel paket önizlemesi için `npm run preview` kullanılır.

## Kontroller

- **WASD / ok tuşları:** hareket
- **E / Boşluk:** yakındaki çalışanla konuşma
- **Fare / dokunma:** karar seçme
- **Escape:** duraklatma
- Mobilde sanal yön tuşları ve konuşma düğmesi otomatik görünür.

## Yeni karşılaşma eklemek

`src/data.ts` içindeki `encounters` dizisine benzersiz bir `id`, mevcut bir NPC adı, soru ve 2–3 seçenek ekleyin. Her seçenek tepki metni, `cash`, `revenue`, `quality`, `morale` etkileri ve `good`, `questionable` veya `disaster` derecesi taşır. Aynı NPC birden fazla karşılaşmaya sahip olabilir; oyun bunları dosyadaki sırayla sunar.

Görseller Canvas ile, sesler Web Audio API ile çalışma anında üretilir; harici varlık veya servis kullanılmaz.
