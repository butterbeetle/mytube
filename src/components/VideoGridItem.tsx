import formatDuration from "@/utils/formatDuration";
import { formatTimeAgo } from "@/utils/formatTimeAgo";
import Image from "next/image";

type VideoGridItemProps = {
  id: string;
  title: string;
  channel: {
    id: string;
    name: string;
    profileUrl: string;
  };
  views: number;
  postedAt: Date;
  duration: number;
  thumbnailUrl: string;
  videoUrl: string;
};

const VIEW_FORMATTER = new Intl.NumberFormat(undefined, {
  notation: "compact",
});

export default function VideoGridItem({
  id,
  channel,
  duration,
  postedAt,
  thumbnailUrl,
  title,
  videoUrl,
  views,
}: VideoGridItemProps) {
  return (
    <div className="flex flex-col gap-2">
      <a href={`/watch?v=${id}`} className="relative aspect-video">
        <Image
          fill
          src={thumbnailUrl}
          alt="thumbnail"
          className="block w-full h-full object-cover rounded-xl"
        />
        <div className="absolute bottom-1 right-1 text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </div>
      </a>
      <div className="flex gap-2">
        <a href={`/@${channel.id}`} className="flex-shrink-0">
          <Image
            className="rounded-full"
            src={channel.profileUrl}
            width={48}
            height={48}
            alt="profile"
          />
        </a>
        <div className="flex flex-col">
          <a href={`/watch?v=${id}`} className="font-bold">
            {title}
          </a>
          <a href={`/@${channel.id}`} className="text-secondary text-sm">
            {channel.name}
          </a>
          <div className="text-secondary text-sm">
            {VIEW_FORMATTER.format(views)} Views • {formatTimeAgo(postedAt)}
          </div>
        </div>
      </div>
    </div>
  );
}
