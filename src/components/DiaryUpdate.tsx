import { toast } from '@kimploo/react-toastify';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { btnYellow, chipsColorPicker } from '../assets/customCSS/designSystem';
import { BASE_URL } from '../redux/function/url';
import { diary, diaryTag } from '../redux/types';
import customToast from '../util/toast';
import Input from './Input';
import Textarea from './Textarea';
import editIcon from '../assets/images/edit.svg';

export default function DiaryUpdate({ params }: { params: string }) {
  const navigate = useNavigate();
  const [isEdit, setIsEdit] = useState<boolean>(true);
  const [post, setPost] = useState<diary>();
  const [updateInfo, setUpdateInfo] = useState({
    title: '' as string,
    note: '' as string
  });

  const handleEditButton = () => {
    setIsEdit(!isEdit);
  };

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
      <div className="flex gap-2 mt-4">
        {post?.tags.map((item: diaryTag, index: number) => (
          <div
            key={index}
            className={chipsColorPicker(item.tag.tagCategorySeq)}
          >
            {item.tag.tagName}
          </div>
        ))}
        {/* TODO: 감정 수정 아이콘 필요 */}
        <img src={editIcon} alt="edit-icon" />
      </div>
      <div className="mt-4">
        <Input
          type="text"
          name="title"
          id="title"
          label="Title"
          placeholder="제목을 작성해주세요."
          onChange={titleOnChange}
          defaultValue={post?.title}
          required
          disabled={!isEdit}
        ></Input>
      </div>
      <Textarea
        name="note"
        id="textarea"
        label="Note"
        placeholder="일기 내용을 작성해주세요."
        onChange={textAreaOnChange}
        defaultValue={post?.contents}
        required
        disabled={!isEdit}
      ></Textarea>
      <div className="mt-10">
        <button className={btnYellow} onClick={handleEditButton}>
          {isEdit ? '수정 완료' : '수정하기'}
        </button>
      </div>
    </div>
  );
}
