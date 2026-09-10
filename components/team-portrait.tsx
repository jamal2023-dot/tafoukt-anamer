import Image from 'next/image';
import type { TeamMember } from '@/data/team';

export function TeamPortrait({ member }: { member: TeamMember }) {
  if (member.image) {
    return (
      <div className="team-portrait-frame" aria-hidden="true">
        <Image
          className="team-portrait"
          src={member.image}
          alt=""
          width={72}
          height={72}
          sizes="72px"
          style={{
            objectPosition: member.imagePosition ?? 'center',
            transform: member.imageScale
              ? `scale(${member.imageScale})`
              : undefined,
            transformOrigin: member.imagePosition ?? 'center',
          }}
        />
      </div>
    );
  }

  return (
    <div className="avatar-monogram" aria-hidden="true">
      {member.name.fr
        .split(' ')
        .map((name) => name[0])
        .join('')}
    </div>
  );
}
