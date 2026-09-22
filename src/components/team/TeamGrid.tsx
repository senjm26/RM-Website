import type { Subteam } from "@/content/site";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

export function TeamGrid({ subteams }: { subteams: Subteam[] }) {
  return (
    <div className="flex flex-col gap-16">
      {subteams.map((subteam) => (
        <div key={subteam.name}>
          <div className="mb-6">
            <h2 className="text-2xl font-black uppercase tracking-tight text-brand-red">
              {subteam.name}
            </h2>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {subteam.members.map((member) => (
              <TeamMemberCard key={`${subteam.name}-${member.name}`} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
