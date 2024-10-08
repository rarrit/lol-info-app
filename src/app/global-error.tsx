// global-error.tsx
"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-[9999] bg-[#111] flex items-center justify-center">
      <div className="min-w-[400px] bg-error">
        <h2 className="text-[20px] mb-[20px] text-center">어머 에러가 발생했네요!</h2>
        <p className="text-center text-[rgba(85,85,85,1)]">{error.message}</p>
        <div className="btnArea flex items-center justify-center gap-[10px] mt-[40px]">
          <button onClick={reset} className="flex flex-1 justify-center rounded-[10px] bg-black py-[20px]">다시 시도하기</button>          
          <Link href="/" className="flex flex-1 justify-center rounded-[10px] bg-black py-[20px]">메인으로 이동하기</Link>
        </div>        
      </div>
    </div>
  );
}
