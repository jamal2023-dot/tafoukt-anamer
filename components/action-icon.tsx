import { BookOpen, HandHeart, Leaf, Palette, Trophy } from 'lucide-react';
import type { ActionPole } from '@/data/actions';

const icons = {
  trophy: Trophy,
  book: BookOpen,
  palette: Palette,
  heart: HandHeart,
  leaf: Leaf,
};

export function ActionIcon({
  name,
  size = 24,
}: {
  name: ActionPole['icon'];
  size?: number;
}) {
  const Icon = icons[name];
  return <Icon size={size} aria-hidden="true" />;
}
