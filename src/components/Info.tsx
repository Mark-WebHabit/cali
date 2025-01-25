import React from "react";

function Info({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <section className="absolute center-absolute w-[90vw] max-w-[800px] px-16 py-8 bg-white rounded-4xl">
      <p className="karma-regular text-5xl text-center">{title}</p>

      {children}
    </section>
  );
}

export default Info;
