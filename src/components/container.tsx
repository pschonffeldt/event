type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: ContainerProps) {
  return (
    // <div className="flex flex-col w-full min-h-screen mx-auto bg-white/[2%]">
    // <div className="flex flex-col w-full min-h-screen mx-auto bg-[#32415A]">
    <div className="flex flex-col w-full min-h-screen mx-auto bg-[#32415A]">
      {children}
    </div>
  );
}
