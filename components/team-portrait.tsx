import Image from 'next/image';
import type { TeamMember } from '@/data/team';

export function TeamPortrait({
  member,
  large = false,
}: {
  member: TeamMember;
  large?: boolean;
}) {
  if (member.image) {
    return (
      <div
        className={`team-portrait-frame${large ? ' team-portrait-frame-large' : ''}`}
        aria-hidden="true"
      >
        <Image
          className="team-portrait"
          src={member.image}
          alt=""
          width={large ? 180 : 72}
          height={large ? 180 : 72}
          sizes={large ? '(max-width: 640px) 112px, 148px' : '72px'}
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
