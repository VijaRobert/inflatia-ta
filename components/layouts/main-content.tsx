import { ReactElement } from "react";

export default function MainContent({ children }: { children: ReactElement }) {
  return (
    <>
      <div className="w-full">
        <div className="w-full max-w-7xl px-2 mx-auto">{children}</div>
      </div>
    </>
  );
}
