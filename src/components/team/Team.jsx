import * as data from "../../data/data2023.json";
import Marquee from "../marqueeCards/Marquee";
import Card from "./Card";
export default function Team() {
  console.log(data.teamMembers[0]);

  return (
    <div className="">
      <Marquee direction="left">
        {data.teamMembers.map((members, index) => (
          <Card
            name={members.name}
            role={members.role}
            linkedin={members.linkedinUrl}
            github={members.githubUrl}
            twitter={members.twitterUrl}
            image={members.image}
            key={index}
          />
        ))}
      </Marquee>
    </div>
  );
}
