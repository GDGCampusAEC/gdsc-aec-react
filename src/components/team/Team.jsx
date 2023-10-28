import * as data from "../../data/data2023.json";
import Card from "./Card";
export default function Team() {
  console.log(data.teamMembers[0]);
  return (
    <div className="flex 6flex-row justify-evenly">
      <Card
        name={data.teamMembers[0].name}
        role={data.teamMembers[0].role}
        linkedin={data.teamMembers[0].linkedinUrl}
        github={data.teamMembers[0].githubUrl}
        twitter={data.teamMembers[0].twitterUrl}
        image={data.teamMembers[0].image}
      />
    </div>
  );
}
