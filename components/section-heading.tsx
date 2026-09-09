import type { ReactNode } from 'react';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  action,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  action?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div>
        <p className="eyebrow">
          <span />
          {eyebrow}
        </p>
        <h2>{title}</h2>
      </div>
      <div className="section-heading-side">
        {intro ? <p>{intro}</p> : null}
        {action}
      </div>
    </div>
  );
}
