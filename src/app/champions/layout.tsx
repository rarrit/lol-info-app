
export const metadata = {
  title: 'LOL INFO APP - 챔피언 리스트 페이지',
  description: '리그오브레전드 챔피언 리스트 페이지입니다.',
};

const ChampionLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  
  return (
    <>
      <div className="champion-layout">
        {children}      
      </div>      
    </>
  )
  
}

export default ChampionLayout