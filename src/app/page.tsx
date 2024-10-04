import Link from "next/link";


export default function Home() {
  return (
    <div className="champion-layout h-[100vh] bg-lol01 bg-cover py-[44px] bg-center">
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-box group">
          <p 
            className="text-[14px] mb-[10px]"
            style={{
              textShadow: ".1px .1px 3px rgb(40, 40, 241, 1)",
            }}
          >Meet your own champion</p>
          <Link href="/champions" className="flex justify-center bg-[rgba(11,11,11,1)] rounded-[8px] shadow-custom py-[5px] group-hover:bg-[rgba(40,40,241,1)]">go</Link>
        </div>
      </div>
    </div>
  );
}
