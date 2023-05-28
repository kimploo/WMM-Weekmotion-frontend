import { toast } from '@kimploo/react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { btnYellow } from '../assets/customCSS/designSystem';
import { BASE_URL } from '../redux/function/url';
import { diary } from '../redux/types';
import customToast from '../util/toast';

export default function DiaryUpdate({ params }: { params: string }) {
  const navigate = useNavigate();
  const [post, setPost] = useState<diary>();
  const [updateInfo, setUpdateInfo] = useState({
    title: '' as string,
    note: '' as string
  });

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

  const titleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUpdateInfo({
      ...updateInfo,
      [name]: value
    });
  };

  const textAreaOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setUpdateInfo({
      ...updateInfo,
      [name]: value
    });
  };

  useEffect(() => {
    requestPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="h-screen">
      <label htmlFor="title" className="label">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="input input-bordered w-full bg-mono-100 text-mono-700"
        placeholder="제목을 작성해주세요."
        onChange={titleOnChange}
        defaultValue={post?.title}
        required
      />
      <label htmlFor="note" className="label">
        Note
      </label>
      <textarea
        name="note"
        id="textarea"
        className="textarea textarea-bordered w-full h-1/2 bg-mono-100 text-mono-700 resize-none mb-5"
        placeholder="일기 내용을 작성해주세요."
        onChange={textAreaOnChange}
        defaultValue={post?.contents}
        required
      />
      <button className={btnYellow}>수정하기</button>
    </div>
  );
}
