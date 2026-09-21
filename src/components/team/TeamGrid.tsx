import type { Subteam } from "@/content/site";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

export function TeamGrid({ subteams }: { subteams: Subteam[] }) {
  return (
    <div className="flex flex-col gap-16">
      {subteams.map((subteam) => (
        <div key={subteam.name}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2.5">
              <span className="h-px w-6 bg-brand-red" />
              <span className="text-base font-bold uppercase tracking-widest text-brand-red">
                {subteam.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white">
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
