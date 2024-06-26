export default function Loading() {
  return (
    <div className="flex flex-col gap-5 p-5 animate-pulse">
      {[...Array(10)].map((_, index) => (
        <div key={index} className="flex gap-5 *:rounded-md">
          <div className="bg-neutral-400 size-28 " />
          <div className="flex flex-col gap-2 *:rounded-md">
            <div className="bg-neutral-400 h-5 w-40" />
            <div className="bg-neutral-400 h-5 w-20" />
            <div className="bg-neutral-400 h-5 w-10" />
          </div>
        </div>
      ))}
    </div>
  );
}
