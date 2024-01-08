import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="absolute flex items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex-col">
      <p className='text-heading3-bold mb-[50px] text-[50px] text-light-1 max-xs:hidden'>Movie<span className="text-primary-500">.Leak</span></p>
        <SignIn />
      <p className='text-heading3-bold mt-[50px] text-[50px] text-light-1 max-xs:hidden'>Movie<span className="text-primary-500">.Leak</span></p>
    </div>
  );
}