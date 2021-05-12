import { Component, OnInit } from '@angular/core';
import {Feature} from '../feature'

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent implements OnInit {

  constructor() { }
  

  ngOnInit(): void {
    
  }

  features: Feature[] = [
    {title: 'İhtiyacınıza Özel Arayüz', text:'Denge Smart ile paket yazılım almazsınız. Tam olarak işletmenizin ihtiyaçlarına özel hazırlanmış bir sisteme sahip olursunuz. Böylece kafa karışıklığı yaratacak detayların olmadığı kişiselleştirilebilen bir ara yüze sahip olmanın konforunu yaşayabilirsiniz.'},
    {title: 'Her İşletmeye Uygun', text:'En büyüğünden en küçüğüne her türlü işletmeye kendi ihtiyacına göre çözüm sunan Denge Smart’ta yüzlerce farklı özelliği dilediğiniz an, sorunsuz kullanabilmenin rahatlığını yaşarsınız.'},
    {title: 'Hızlı Güncelleme', text:'Sektörün dinamiklerine ve çağın hızına yetişmek önemli. İhtiyaçlarınız değişirse sisteminiz de hızla değişip yenilenir ve size aynı hızla uyum sağlar.'},
    {title: 'Kolay Kurulum', text:'Telefon ve tabletinize kolayca indirip rahatça kullanabilirsiniz. Kurulumu bu kadar basit!'},
    {title: 'Yatırım maliyeti yok!', text:'Sadece aylık kira ücretiyle; sunucu, yedekleme, güvenlik yatırımı yapmadan, bakım ve servis derdi düşünmeden sadece işinize odaklanabilirsiniz.'}
    
  ]

  

}
