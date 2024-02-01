import { Link } from "react-router-dom";

const IntroDescriptions = () => {
  return (
    <div className="text-box">
      <h4>King Job haqqında</h4>
      <p>
        Biz King Job olaraq, işlərinizi daha asanlaşdırmaq və vaxtınıza qənaət etmək üçün yeni bir yol aça bilməyimizə sevinirik !
      </p>
      <ul>
        <li>kingjob.pro iş və ya işçi axtaranların onlayn platformasıdır.</li>
        <li>kingjob.pro 2023-cü ildə fəaliyyətə başlayaraq əmək bazarında ölkənin ən yaxşı iş axtarma platformasına çevrilmişdir.</li>
      </ul>
      <br />
      <p>Əgər siz də keyfiyyətli namizədlər axtarırsınızsa və mövcud iş fəaliyyətinizi daha da gücləndirmək istəyirsinizsə, bizim platformamıza qoşulmağa dəvət edirik.
       <br /> <Link to="/register">Qeydiyyat Et</Link>
      </p>
      
      {/* <p>
        kingjob.pro onlayn platformasında iş elanlarına müraciət etdiyiniz zaman mütləq geri dönüş cavabı alacaqsınız.<br />
        Saxta elanların olmaması.<br />
        Vaxtı keçmiş elanların silinməsi.
      </p> */}
      <br /><br />
      <h4>Biz nə təklif edirik?</h4>
      <ul>
        <li style={{marginBottom:20}}> <b>Təkmilləşdirilmiş idarə paneli :</b> Hesabınıza daxil olaraq vakansiya paylaşa və müraciətlərinizi rahat idarə edə bilərsiniz.</li>
        <li style={{marginBottom:20}}><b>Müraciətlərin avtomatik sıralanması :</b> Gələn müraciətlər sistem tərəfindən ən yaxşıdan ən pisə doğru faiz dərəcəsi ilə sıralanır.</li>
        <li style={{marginBottom:20}}><b>Tapşırıq İdarəetmə :</b> Namizədlərin biliklərini yoxlamaq üçün tapşırıqlar yaradıb və onlara yönləndirə bilərsiniz.</li>
        <li style={{marginBottom:20}}><b>Daxili mesajlaşma sistemi :</b> Müraciətçilərinizə platformamız üzərindən mesaj göndərə bilərsiniz.</li>
        <li><b>Bircə Kliklə geri dönüş :</b> Müraciətçilərinizi seçən zaman, statuslar dəyişdikcə avtomatlaşdırılmış e-mail sistemi vasitəsilə müraciətçilərə geri dönüş olur.</li>
      </ul>

      <br /><br />
      <h4>Məqsədimiz</h4>
      <ul>
        <li>İşsiz insanların özlərinə ən uyğun işi tapması</li>
        <li>Şirkətlərin doğru namizədlərini axtarması</li>
      </ul>

      <Link to="/register" style={{width:150, display: "block", margin: "auto", marginTop:50}}>King Job'a Qoşulun.</Link>
    </div>
  );
};

export default IntroDescriptions;
