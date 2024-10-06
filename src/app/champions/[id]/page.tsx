import { RIOT_BASE_URL } from "@/app/api/apiKey";
import { ChampionDetail } from "@/app/types/Champion";
import { getChampionDetail, getLatestVersionUrl } from "@/app/utils/serverApi";
import Image from "next/image";
import Link from "next/link";

const ChampionsPage = async ({ params } : { params: { id: string }}) => {
  const champion = await getChampionDetail(params.id);
  const latestVersion = await getLatestVersionUrl();

  if (!champion) {
    // 챔피언이 존재하지 않을 경우 처리
    return <div>챔피언을 찾을 수 없습니다.</div>;
  }
  
  const championKey = Object.keys(champion)[0];
  const championDetail: ChampionDetail = champion[championKey]; // 챔피언의 상세 정보
  const championSkins = championDetail.skins;

  return (
    <div id="championDetail" className="h-full pb-[60px]">      
      <div 
        className="detail-top relative pt-[44px]"
        style={{
          backgroundImage: `url('${RIOT_BASE_URL}/cdn/img/champion/splash/${championDetail.id}_0.jpg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div 
          className="absolute top-0 left-0 w-full h-[90%] z-[1]"
          style={{
            backgroundImage: `url('${RIOT_BASE_URL}/cdn/img/champion/splash/${championDetail.id}_0.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            filter: "blur(15px)"
          }}
        ></div>
        <div 
          className="absolute top-0 left-0 w-full h-full z-[2]"
          style={{
            backgroundImage: `url('${RIOT_BASE_URL}/cdn/img/champion/splash/${championDetail.id}_0.jpg')`,
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[rgba(0,0,0,.5)] z-[3]"></div>
        <div className="relative z-20 flex justify-center w-full h-full flex max-w-[1440px] m-auto px-[30px] pt-[15%] pb-[20%] gap-[10px]">
          <div className="tBox w-full max-w-[600px]">
            <h1 className="flex flex-col justify-center items-center">                     
              <p className="text-[40px] font-bold bg-icon01 bg-no-repeat bg-[length:50px] bg-top pt-[60px]">{championDetail.name}</p>
              <span className="text-[13px] shadow-custom-white bg-[#111] rounded-[10px] mt-[5px] mb-[15px] py-[5px] px-[15px]">{championDetail.title}</span>
            </h1>        
            <p 
              className="text-center text-[14px] break-keep"
              style={{
                textShadow: ".1px .1px 3px rgb(241, 215, 40, .8)",
              }}
            >{championDetail.blurb}</p>
          </div>
        </div>            
      </div>
      <div className="w-full max-w-[1600px] m-auto px-[30px]">    
        <div className="infoBox flex items-stretch gap-[20px] mt-[40px] max-t:flex-col">
          <div className="w-[calc(50%-10px)] bg-[#111] shadow-custom rounded-[10px] p-[30px] max-t:w-full">
            <h2 className="text-[24px] font-medium mb-[10px] pb-[5px] border-b border-[rgba(255,255,255,.4)]">Info</h2>
            <div className="infoBox">
              <dl className="flex items-center gap-[5px]">
                <dt className="w-[100px]">Attack</dt>
                <dd className="w-[calc(100%-100px)] bg-[#222] rounded-[10px]">
                  <span 
                    className={`relative flex h-[5px] bg-[rgba(241,40,40,1)] rounded-[10px]`}
                    style={{
                      width: `${championDetail.info.attack * 10}%`
                    }}
                  ></span>
                </dd>
              </dl>
              <dl className="flex items-center gap-[5px]">
                <dt className="w-[100px]">Defense</dt>
                <dd className="w-[calc(100%-100px)] bg-[#222] rounded-[10px]">
                  <span 
                    className={`flex h-[5px] bg-[rgba(108,241,40,1)] rounded-[10px]`}
                    style={{
                      width: `${championDetail.info.defense * 10}%`
                    }}
                  ></span>
                </dd>
              </dl>
              <dl className="flex items-center gap-[5px]">
                <dt className="w-[100px]">Magic</dt>
                <dd className="w-[calc(100%-100px)] bg-[#222] rounded-[10px]">
                  <span 
                    className="flex h-[5px] bg-[rgba(47,40,241,1)] rounded-[10px]"
                    style={{
                      width: `${championDetail.info.magic * 10}%`
                    }}
                  ></span>
                </dd>
              </dl>
              <dl className="flex items-center gap-[5px]">
                <dt className="w-[100px]">Difficulty</dt>
                <dd className="w-[calc(100%-100px)] bg-[#222] rounded-[10px]">
                  <span 
                    className="flex w-[${championDetail.info.difficulty * 10}%] h-[5px] bg-[rgba(241,238,40,1)] rounded-[10px]"
                    style={{
                      width: `${championDetail.info.difficulty * 10}%`
                    }}
                  ></span>
                </dd>
              </dl>
            </div>
          </div>
          <div className="w-[calc(50%-10px)] bg-[#111] shadow-custom rounded-[10px] p-[30px] max-t:w-full">      
            <h2 className="text-[24px] font-medium mb-[10px] pb-[5px] border-b border-[rgba(255,255,255,.4)]">Skills<span className="text-[12px] text-[rgba(255,255,255,.3)] ml-[10px]">(마우스를 올리면 상세 정보를 확인할 수 있습니다.)</span></h2>
            <ul className="flex items-start gap-[10px] max-m:flex-wrap">              
              {
                championDetail.spells.map(spell => {
                  return (
                    <li key={spell.id} className="flex flex-1 flex-col items-center justify-start gap-[5px] max-m:flex-none max-m:w-[calc(50%-10px)]">
                      <div>
                        <Image 
                          src={`${RIOT_BASE_URL}/cdn/${latestVersion}/img/spell/${spell.id}.png`} 
                          className="m-auto rounded-[5px] shadow-custom-white"
                          width={50}
                          height={50}
                          alt={spell.id ? spell.id : "챔피언 이미지"} 
                        />     
                        <p className="text-[14px] mt-[10px] text-center font-bold">
                          {spell.name}
                        </p>                 

                      </div>
                      <div className="text-[13px] text-center text-[rgba(199,199,199,1)] line-clamp-2">
                        {spell.description}
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
        <div className="infoBox mt-[20px]">
          <div className="w-full bg-[#111] shadow-custom rounded-[10px] p-[30px]">
            <h2 className="text-[24px] font-medium mb-[10px] pb-[5px] border-b border-[rgba(255,255,255,.4)]">Skins</h2>
            <div className="skinList flex flex-wrap items-center gap-[10px]">
              {            
                championSkins.map(skin => {
                  console.log("skin", skin);
                  return (
                    <div key={skin.id} className="relative flex flex-col items-center w-[calc(33.333%-10px)] py-[10%] max-t:w-full max-t:py-[30%] max-m:w-full max-m:py-[30%]">
                      <Image
                        src={`${RIOT_BASE_URL}/cdn/img/champion/splash/${championDetail.id}_${skin.num}.jpg`}
                        layout="fill"
                        alt={skin.id}
                        className="rounded-lg shadow-lg"
                      />
                      <p className="absolute top-[5px] right-[5px] z-20 min-w-[120px] flex items-center justify-center p-[8px] font-medium bg-black bg-opacity-70 rounded-[10px]">{skin.name}</p>
                    </div>
                  );
                })
              }
            </div>
          </div>          
        </div>
        <div className="btnArea flex items-center justify-center mt-[30px] mb-[60px] group">
          <Link href={"/champions"} className="bg-[#131313] shadow-custom rounded-[10px] px-[40px] py-[20px] group-hover:bg-[rgba(40,40,241,1)]">목록으로 돌아가기</Link>
        </div>
      </div>
    </div>
  )
}

export default ChampionsPage
