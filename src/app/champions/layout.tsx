"use client";

const PostLayout = ({
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

export default PostLayout