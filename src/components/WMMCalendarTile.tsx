import DontKnowEmojiIcon from '../items/DontKnowEmojiIcon';
import NegativeEmojiIcon from '../items/NegativeEmojiIcon';
import PositiveEmojiIcon from '../items/PositiveEmojiIcon';

interface Props {
  positive?: boolean;
  negative?: boolean;
  dontKnow?: boolean;
}

export default function WMMCalendarTile({
  positive = true,
  negative = true,
  dontKnow = true
}: Props) {
  return (
    <div className="flex items-center">
      {positive ? <PositiveEmojiIcon></PositiveEmojiIcon> : null}
      {negative ? <NegativeEmojiIcon></NegativeEmojiIcon> : null}
      {dontKnow ? <DontKnowEmojiIcon></DontKnowEmojiIcon> : null}
    </div>
  );
}
