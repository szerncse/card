import React from 'react'

function Content() {

const contentItem = [
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/19/1019_whatsnew.jpg",
        "title" : "블러드시티7",
        "desc" : "스페셜 워크"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/18/01.jpg",
        "title" : "카카오 선물하기에",
        "desc" : "바오패밀리가 떳다!"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/13/whatsnew.jpg",
        "title" : "스마트예약",
        "desc" : "굿즈#"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/18/06.jpg",
        "title" : "푸바오의",
        "desc" : "뚠빵 마들렌"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/12/04.jpg",
        "title" : "SWEET CAFE OPEN",
        "desc" : "팔굿 솜카페"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/06/1.png",
        "title" : "2023 호러메이즈 리턴즈",
        "desc" : "극강의 공포를 체험하라"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/10/04/06.jpg",
        "title" : "더헬스와함께",
        "desc" : "땡스 기빙 파티"
    },
    {
        "img" : "https://wwwcdn.everland.com/web/everland/main/whats_new/__icsFiles/thumbnail/2023/09/06/06.jpg",
        "title" : "감성 충만 콘서트",
        "desc" : "FALL in Garden Concert"
    },
]


  return (
    <>
    <div className="max-w-7xl mx-auto flex flex-wrap 
    justify-between px-[2%]">
    
       {
        contentItem.map((e,i)=>{
            return(
            <div className='basis-[49%] md:basis-[23.5%]'>
                <img className='w-full' src= {e.img} alt="블러드시티7" title={e.title} aria-label={e.desc} aria-hidden="true"/>
                <p>{e.title}</p>
                <span>{e.desc}</span>
            </div>
            )
        })
       }
        </div>
      
    </>
  )
}

export default Content