import React from 'react'
import "./EbookReview.css"
import JohnReviewImg from "../assets/images/JohnReview.jpg"

const EbookReview = () => {
  return (
    <div>
          <div className="EbookReview">
                    <div className="Review">
 
              <div className="ReviewLeft">
                    <h5>About instructor</h5>
                    <img src={JohnReviewImg} alt="" />
              </div>
              <div className="ReviewRight">
                    <div className="Rleft">
                              <h6>John Doe</h6>
                              <p>Лорем ипсум долор сит амет, пер цлита поссит ех, ат мунере фабулас петентиум сит. Иус цу цибо саперет сцрипсерит, нец виси муциус лабитур ид. Ет хис нонумес нолуиссе дигниссим. 

Chinese Lorem Ipsum: 側経意責家方家閉討店暖育田庁載社転線宇。得君新術治温抗添代話考振投員殴大闘北裁。品間識部案代学凰処済準世一戸刻法分。悼測済諏計飯利安凶断理資沢同岩面文認革。内警格化再薬方久化体教御決数詭芸得筆代。

Indian Lorem Ipsum: पढाए हिंदी रहारुप अनुवाद कार्यलय मुख्य संस्था सोफ़तवेर निरपेक्ष उनका आपके बाटते आशाआपस मुख्यतह उशकी करता। शुरुआत संस्था कुशलता मेंभटृ अनुवाद गएआप विशेष सकते परिभाषित लाभान्वित प्रति देकर समजते दिशामे प्राप्त जैसे वर्णन संस्थान निर्माता प्रव्रुति भाति चुनने उपलब्ध बेंगलूर अर्थपुर्ण 

Armeninian Lorem Ipsum: լոռեմ իպսում դոլոռ սիթ ամեթ, լաբոռե մոդեռաթիուս եթ հաս, պեռ ոմնիս լաթինե դիսպութաթիոնի աթ, վիս ֆեուգաիթ ծիվիբուս եխ. վիվենդում լաբոռամուս ելաբոռառեթ նամ ին.</p>
                              <div className="socialMedia">
                              <a href="/"><i class="ri-facebook-fill"></i></a>
                             <a href="/"> <i class="ri-twitter-fill"></i></a>
                              <a href="/"><i class="ri-linkedin-box-fill"></i></a>
                              </div>
                    </div>
                    <div className="Rright">
                              <h5>Ebook review</h5>
                              <span>0</span>
                              <p><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i><i class="ri-star-fill"></i></p>
                    </div>
              </div>

</div>
 </div>
</div>
  )
}

export default EbookReview