import DontKnowEmojiIcon from '../items/DontKnowEmojiIcon';
import NegativeEmojiIcon from '../items/NegativeEmojiIcon';
import PositiveEmojiIcon from '../items/PositiveEmojiIcon';
import { TagCategorySeq, diary } from '../redux/types';
import { TileArgs } from 'react-calendar/dist/cjs/shared/types';
import isSameDMY from '../util/date/isSameDMY';
import { toDate } from 'date-fns';

interface Props {
  diaries: diary[];
  tileArgs: TileArgs;
}

export default function WMMCalendarTile({ diaries, tileArgs }: Props) {
  return (
    <div className="flex items-center justify-center flex-wrap">
      {diaries
        .map((diary: diary) => {
          if (isSameDMY(tileArgs.date, new Date(diary.regDate))) {
            return diary.tags.map((tag) => {
              if (tag.tag.tagCategorySeq === TagCategorySeq.POSITIVE) {
                return <PositiveEmojiIcon key={tag.tag.seq} />;
              }

              if (tag.tag.tagCategorySeq === TagCategorySeq.NEGATIVE) {
                return <NegativeEmojiIcon key={tag.tag.seq} />;
              }

              if (tag.tag.tagCategorySeq === TagCategorySeq.ETC) {
                return <DontKnowEmojiIcon key={tag.tag.seq} />;
              }
            });
          }
        })
        .flat()
        .slice(0, 3)}
    </div>
  );
}
