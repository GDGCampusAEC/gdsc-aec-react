import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";
export default function Card({
  name,
  image,
  role,
  linkedin,
  github,
  twitter,
  colour,
}) {
  console.log(colour);
  const className = `flex flex-col m-6 justify-center gap-2 items-center shadow-[0px_0px_15px_2px_rgba(0,0,0,0.17)] border-b-8 border-b-[${colour}] border-solid
  w-[18rem] h-[22rem] shrink-0`;

  return (
    <div className={className}>
      <img
        className="text-[#1C1C1C] rounded-[31.25rem] w-[11.25rem] h-[11.25rem]"
        src={image}
        alt="Meh"
      />
      <h1 className="text-[#1C1C1C] text-[1.625rem] not-italic font-medium leading-[normal]">
        {name}
      </h1>
      <h2 className="text-neutral-500 text-[1.375rem] not-italic font-medium leading-[normal]">
        {role}
      </h2>
      <div className="flex flex-row gap-[2rem] justify-center">
        <a href={linkedin}>
          <FaLinkedin size="2rem" />
        </a>
        <a href={github}>
          <FaGithub size="2rem" />
        </a>
        <a href={twitter}>
          <FaTwitter size="2rem" />
        </a>
      </div>
    </div>
  );
}
