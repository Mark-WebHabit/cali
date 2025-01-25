function Title({ text }: { text: string }) {
  return (
    <div className="flex my-4 items-center px-4 gap-4 max-w-[1400px] mx-auto">
      <hr className="border-2 flex-1 border-[var(--choco)] max-w-[1400px] " />
      <h1 className="text-4xl text-center karma-bold">{text}</h1>
      <hr className="border-2 flex-1 border-[var(--choco)] max-w-[1400px] " />
    </div>
  );
}

export default Title;
