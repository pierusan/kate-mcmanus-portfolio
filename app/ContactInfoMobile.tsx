export function ContactInfoMobile({ className }: { className?: string }) {
  return (
    <ul className={`flex flex-col gap-8 bg-bg-surface ${className}`}>
      <li>
        <div className="h-[20rem] w-full rounded-md bg-green-200" />
      </li>
    </ul>
  );
}
