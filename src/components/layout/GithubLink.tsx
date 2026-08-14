import { GithubIcon } from '@/components/icons/GithubIcon';
import { IconButton } from '@/components/ui/IconButton';
import { SITE } from '@/lib/site';

export function GithubLink() {
  return (
    <IconButton href={SITE.githubUrl} aria-label="GitHub 바로가기">
      <GithubIcon className="size-5" />
    </IconButton>
  );
}
