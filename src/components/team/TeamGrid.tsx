import type { Subteam } from "@/content/site";
import { TeamMemberCard } from "@/components/team/TeamMemberCard";

export function TeamGrid({ subteams }: { subteams: Subteam[] }) {
  return (
    <div className="flex flex-col gap-16">
      {subteams.map((subteam) => (
        <div key={subteam.name}>
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="h-px w-5 bg-brand-red" />
              <span className="text-xs font-bold uppercase tracking-widest text-brand-red">
                {subteam.eyebrow}
              </span>
            </div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-brand-black dark:text-brand-white">
              {subteam.name}
            </h2>
            <span className="rounded-full bg-brand-grey-100 px-3 py-1 text-xs font-semibold text-brand-grey-500 dark:bg-brand-grey-900 dark:text-brand-grey-300">
              {subteam.members.length} {subteam.members.length === 1 ? "member" : "members"}
            </span>
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
