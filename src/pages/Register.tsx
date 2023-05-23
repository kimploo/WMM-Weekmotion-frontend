import weekmotion from '../assets/images/weekmotion.svg';

export default function Register() {
  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center">
      <div>
        <img src={weekmotion} />
      </div>
      <article className="form-control w-1/2">
        <h1 className="text-2xl text-mono-700 font-bold">로그인</h1>
        <label htmlFor="id" className="label">
          <span className="label-text">ID</span>
        </label>
        <input
          type="text"
          name="id"
          placeholder="아이디를 입력하세요."
          className="input input-bordered bg-mono-100 text-mono-700"
        />
        <label htmlFor="pw" className="label">
          <span className="label-text">PASSWORD</span>
        </label>
        <input
          type="password"
          name="pw"
          placeholder="비밀번호를 입력하세요."
          className="input input-bordered bg-mono-100 text-mono-700"
        />
      </article>
      <div className="flex flex-col gap-4 py-4 w-1/2">
        <button className="btn btn-wide w-full rounded-full bg-emotion-yellow hover:bg-emotion-lightYellow border-emotion-yellow hover:border-emotion-lightYellow text-mono-100">
          로그인
        </button>
        <button className="btn btn-wide w-full rounded-full bg-mono-100 hover:bg-mono-100 border-emotion-yellow hover:border-emotion-yellow text-emotion-yellow">
          회원가입
        </button>
      </div>
    </section>
  );
}
