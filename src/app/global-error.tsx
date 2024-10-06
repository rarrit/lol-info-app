"use client";

// error 처리
import { useRouter } from "next/navigation";
import { startTransition, useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  const { refresh } = useRouter();
  // react 18 에서 생긴 메서드 => startTransition()
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 flex items-center justify-center">
      <div className="">
        <h2>어머 에러가 발생했네요!</h2>
        <p>{error.message}</p>
        <button onClick={() => 
        startTransition(() => {
          refresh();
          reset();
        })}>다시 시도하기</button>
      </div>
    </div>
  );
}