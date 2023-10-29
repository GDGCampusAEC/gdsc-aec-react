import * as data from "../../data/data2023.json";
import Marquee from "../marqueeCards/Marquee";
import Card from "./Card";
import ourTeam from "../../assets/ourTeam.png";
export default function Team() {
  console.log(data.teamMembers[0]);
  const colourChoices = ["#EA4335", "#34A853", "#4285F4", "#FBBC05"];
  return (
    <div
      style={{ display: "flex", alignItems: "center", flexDirection: "column" }}
    >
      <img src={ourTeam} alt="Our Team" />
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
            colour={colourChoices[index % 4]}
          />
        ))}
      </Marquee>
    </div>
  );
}
