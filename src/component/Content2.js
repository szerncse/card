import React from 'react'

function Content2() {
    
    const contentItemtwo = [
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/10/20/EL_editorspick_1020_01.jpg",
            "link": "https://youtu.be/hehIqKKmHCA?si=DGY9-sfbMRIPKlsF",
            "title" : "아기기린 마루",
            "desc" : "마루의 성장일기"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/10/18/02.jpg",
            "title" : "쌍둥이 아기판다",
            "desc" : "100일 특집"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/10/04/03.jpg",
            "title" : "에버랜드 블러드시키",
            "desc" : "1인칭 시점"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/09/20/1.jpg",
            "title" : "가을하늘 눈부신",
            "desc" : "해피땡스기빙 테마송 M/V"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/10/20/EL_editorspick_1020_01.jpg",
            "title" : "아기기린 마루",
            "desc" : "마루의 성장일기"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/10/18/02.jpg",
            "title" : "쌍둥이 아기판다",
            "desc" : "100일 특집"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/10/04/03.jpg",
            "title" : "에버랜드 블러드시키",
            "desc" : "1인칭 시점"
        },
        {
            "img" : "https://wwwcdn.everland.com/web/everland/main/editors_pick/__icsFiles/thumbnail/2023/09/20/1.jpg",
            "title" : "가을하늘 눈부신",
            "desc" : "해피땡스기빙 테마송 M/V"
        },
        
    ]
    
  return (
    <>
  <div className="max-w-7xl mx-auto flex flex-wrap 
    justify-between px-[2%]">
    {
        contentItemtwo.map((e,i)=>{
            return(
                <div className="basis-[49%] md:basis-[23.5%] ">
                    <a href={e.link}>
                    <img className='w-full rounded-full' src= {e.img} alt={e.title} title={e.title} aria-label={e.desc} aria-hidden="true"/></a>
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

export default Content2