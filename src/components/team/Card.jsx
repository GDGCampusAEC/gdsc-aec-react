export default function Card({ name, image, role, linkedin, github, twitter }) {
  console.log(role.name);
  return (
    <div className="flex flex-col justify-center  w-[18.875rem] h-[24.4375rem] shrink-0">
      <div className="">{role}</div>
      <img
        className="text-[#1C1C1C] text-[1.625rem] not-italic font-medium leading-[normal]"
        src={image}
        alt="Meh"
      />
      <h1>{name}</h1>
      <h2>{role}</h2>
      <div className="flex flex-row justify-center">
        <a href={linkedin}>
          <img src="" />
        </a>
        <a href={github}>
          <img src="" />
        </a>
        <a href={twitter}>
          <img src="" />
        </a>
      </div>
    </div>
  );
}
