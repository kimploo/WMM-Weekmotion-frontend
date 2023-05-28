import axios from 'axios';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../redux/function/url';

import calendar from '../assets/images/calendar.svg';
import { diary, diaryTag } from '../redux/types';
import { chipsColorPicker } from '../assets/customCSS/designSystem';
import format from 'date-fns/format';
import customToast from '../util/toast';

export default function DiaryPost({ params }: { params: string }) {
  const [post, setPost] = useState<diary>();

  const requestPost = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/diary/${params}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
      });
      setPost(response.data.data);
    } catch (error) {
      customToast.error('해당 일기를 불러오지 못했어요.');
    }
  };

  useEffect(() => {
    requestPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex gap-x-[11px] pb-4">
        <img src={calendar} alt="calendar_icon" />
        <p className="text-mono-700 text-2xl font-bold">
          {post
            ? `${format(new Date(post.modDate), 'yyyy.MM.dd')} 의 감정`
            : '감정'}
        </p>
      </div>
      <div className="flex gap-2">
        {post?.tags.map((item: diaryTag, index: number) => (
          <div
            key={index}
            className={chipsColorPicker(item.tag.tagCategorySeq)}
          >
            {item.tag.tagName}
          </div>
        ))}
      </div>
      <div className="text-mono-700 text-2xl font-bold py-4">{post?.title}</div>
      <div className="text-mono-700 text-base">{post?.contents}</div>
    </>
  );
}
