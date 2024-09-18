import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between min-h-screen max-w-sm mx-auto">
      <div className="my-auto flex flex-col items-center gap-2">
        <span className="text-9xl">🥕</span>
        <h2 className="text-4xl">당근</h2>
        <h2 className="text-2xl">당근마켓에 온걸 환영해요</h2>
      </div>
      <div className="flex flex-col items-center gap-3 w-full">
        <Link
          href={"/create-account"}
          className="w-full bg-orange-500 text-white text-center rounded-md text-lg font-medium hover:bg-orange-400 transition-colors"
        >
          시작하기
        </Link>
        <div>
          <span>이미 계정이 있나요?</span>
          <Link href={"/login"}>로그인</Link>
        </div>
      </div>
    </main>
  );
}
