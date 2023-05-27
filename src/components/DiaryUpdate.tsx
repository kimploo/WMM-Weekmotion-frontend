import { toast } from '@kimploo/react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { btnYellow } from '../assets/customCSS/designSystem';
import { BASE_URL } from '../redux/function/url';
import { diary } from '../redux/types';

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
      toast('해당 일기를 불러오지 못했어요.');
    }
  };
  // 업데이트 동작 안됨
  //   const editPost = async () => {
  //     try {
  //       if (updateInfo.title.length === 0 || updateInfo.note.length === 0) {
  //         throw new Error('수정된 내용이 없어요.');
  //       }
  //       const response = await axios.patch(
  //         `${BASE_URL}/diary/${Number(params)}`,
  //         {
  //           title: updateInfo.title.length === 0 ? post?.title : updateInfo.title,
  //           contents:
  //             updateInfo.note.length === 0 ? post?.contents : updateInfo.note,
  //           calendarYn: post?.calendarYn,
  //           tags: [
  //             {
  //               seq: 1,
  //               tagSeq: 10,
  //               type: 'D'
  //             },
  //             {
  //               seq: 1,
  //               tagSeq: 1,
  //               type: 'D'
  //             },
  //             {
  //               seq: 2,
  //               tagSeq: 16,
  //               type: 'D'
  //             }
  //           ]
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //           }
  //         }
  //       );
  //       if (post?.calendarYn === 'Y') navigate(`/${post.seq}`);
  //       if (post?.calendarYn === 'N') navigate(`/trash/${post.seq}`);
  //     } catch (error) {
  //       toast.error(error.message);
  //     }
  //   };

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
  }, []);

  useEffect(() => {
    console.log(updateInfo);
  }, [updateInfo]);

  return (
    <div>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        className="input input-bordered bg-mono-100 text-mono-700"
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
        className="textarea textarea-bordered h-1/2 bg-mono-100 text-mono-700 resize-none mb-5"
        placeholder="일기 내용을 작성해주세요."
        onChange={textAreaOnChange}
        defaultValue={post?.contents}
        required
      />
      <button className={btnYellow}>수정하기</button>
    </div>
  );
}
