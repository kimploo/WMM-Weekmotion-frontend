import { useParams } from 'react-router-dom';
import DiaryUpdate from '../components/DiaryUpdate';

export default function EditPost() {
  const params = useParams();
  return (
    <section className="bg-mono-100 h-screen flex flex-col px-5">
      <DiaryUpdate params={params.id || '0'} />
    </section>
  );
}
