import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex gap-4 items-center text-dark">
      <div className="w-16 rounded-full overlow-hidden border border-dark">
        <Image
          src="/profile-img.png"
          alt="Profile"
          width={100}
          height={100}
          clasName="w-full h-auto rounded-full"
        />
      </div>
      <span className="font-bold text-xl"> Profile Name</span>
    </Link>
  );
};

export default Logo;
