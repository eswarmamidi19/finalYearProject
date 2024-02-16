import Link from "next/link";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <div className="flex justify-around w-full">
        <Link href={"/forms/test"}>Circular</Link>
        <Link href={"/forms/guestfeedback"}>guestfeedback</Link>
        <Link href={"/forms/budget"}>budget</Link>
      </div>
      {children}
    </div>
  );
};

export default layout;
