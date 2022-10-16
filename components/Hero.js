import Link from 'next/link';

const Hero = () => {
  return (
    <div className="bg-[#111111] h-screen w-full relative py-8">
      <div className="mx-[180px] flex flex-col justify-between items-start h-full">
        <div className="flex flex-row justify-between items-center text-2xl w-full">
          <Link href="#">
            <span className="font-light font-inter">NA.</span>
          </Link>
          <div className="flex flex-row space-x-5 text-[18px] items-center">
            <Link href="#" className="">
              <span className="font-extralight font-inter">Projects</span>
            </Link>
            <Link href="#">
              <span className="font-extralight font-inter">Resume</span>
            </Link>
            <Link href="#">
              <span className="font-extralight font-inter">Contact</span>
            </Link>
            <div>c</div>
          </div>
        </div>
        <div className="flex flex-col space-y-7 text-white">
          <h3 className="leading-[24px] text-justify font-extralight font-[inter] text-[18px]">
            Hey, I&apos;m
          </h3>
          <h1 className="text-transparent font-medium font-[mulish] text-8xl leading-[120px] bg-clip-text bg-gradient-to-r from-[#9845E8] via-[#33D2FF] to-[#DD5789]">
            Naman Agrawal
          </h1>
          <h3 className="leading-[24px] text-justify font-extralight font-[inter] text-[18px]">
            I&apos;m a software engineer based in Toronto, Canada and also a
            communication and journalism student. I enjoy creating things that
            live on the internet, whether that be websites, applications, or
            anything in between. I have been freelancing for a year now while
            studying at the university and I&apos;ve manage to gain a decent
            amount of experience and valuable knowledge from all different kinds
            of fields throughout my projects/work.
          </h3>
        </div>
        <div className="">
          <ul className="flex flex-row space-x-2">
            <li className="border-2 border-cyan-500 w-48 h-14 rounded flex flex-row justify-center items-center font-extralight">
              <span>Email</span>
            </li>
            <li className="border-2 border-purple-500 w-48 h-14 rounded flex flex-row justify-center items-center font-extralight">
              <span>LinkedIn</span>
            </li>
            <li className="border-2 border-orange-500 w-48 h-14 rounded flex flex-row justify-center items-center font-extralight">
              <span>Twitter</span>
            </li>
            <li className="border-2 border-pink-500 w-48 h-14 rounded flex flex-row justify-center items-center font-extralight">
              <span>Github</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Hero;
