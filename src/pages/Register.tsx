import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import weekmotion from '../assets/images/weekmotion.svg';
import { BASE_URL } from '../redux/function/url';
import Input from '../components/Input';
import customToast from '../util/toast';

export default function Register() {
  const [searchParams, setSearchParams] = useSearchParams({ view: 'signIn' });
  const navigate = useNavigate();
  const [signInInfo, setSignInInfo] = useState({
    id: '',
    pw: ''
  });
  const [signUpInfo, setSignUpInfo] = useState({
    id: '',
    verify_id: false,
    pw: '',
    verify_pw: '',
    name: '',
    tel: ''
  });

  const signInInfoOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignInInfo({
      ...signInInfo,
      [name]: value
    });
  };
  const signUpInfoOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setSignUpInfo({
      ...signUpInfo,
      [name]: value
    });
  };

  const signInRequest = async () => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        id: signInInfo.id,
        password: signInInfo.pw
      });
      if (response.status === 201) {
        localStorage.setItem('accessToken', response.data.data.accessToken);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        navigate('/scheduler');
      }
    } catch (error) {
      customToast.error('Error!');
    }
  };

  const checkIdRequest = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/user/check/id/${signUpInfo.id}`
      );
      if (response.data.data.duplication === false) {
        setSignUpInfo({ ...signUpInfo, verify_id: true });
        customToast.success('사용 가능한 아이디입니다.');
      } else {
        throw new Error('중복된 아이디가 존재합니다.');
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        customToast.error(error.message);
      }
    }
  };

  const signUpRequest = async () => {
    try {
      if (signUpInfo.verify_id && signUpInfo.pw === signUpInfo.verify_pw) {
        const response = await axios.post(`${BASE_URL}/user`, {
          id: signUpInfo.id,
          password: signUpInfo.pw,
          name: signUpInfo.name,
          email: undefined,
          phone: signUpInfo.tel
        });
        if (response.status === 201) {
          setSearchParams({ view: 'signIn' });
          customToast.success('회원가입이 완료되었어요!');
        }
      }
    } catch (error) {
      customToast.error('Error!');
    }
  };

  return (
    <section className="bg-mono-100 h-screen flex flex-col items-center px-4 mt-10">
      {/* TODO: Form 엘리먼트 적용 */}
      {/* {import.meta.env.DEV ? (
        <>
          <button onClick={() => setSearchParams({ view: 'signIn' })}>
            signIn
          </button>
          <button onClick={() => setSearchParams({ view: 'signUp' })}>
            signUp
          </button>
        </>
      ) : null} */}
      {searchParams.get('view') === 'signUp' ? (
        <>
          <article className="flex flex-col justify-center w-full">
            <h1 className="text-2xl text-mono-700 font-bold">회원가입</h1>
            <div className="mt-5 flex justify-between flex-wrap gap-2">
              <div className="flex justify-center items-center flex-grow">
                <div className="flex-grow">
                  <Input
                    type="text"
                    name="id"
                    label="ID"
                    placeholder="아이디를 입력하세요."
                    onChange={signUpInfoOnChange}
                    required={true}
                  ></Input>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <button
                  onClick={checkIdRequest}
                  className="w-[75px] h-10 rounded-full text-mono-100 bg-emotion-yellow border-emotion-yellow"
                >
                  확 인
                </button>
              </div>
            </div>
            <div className="mt-4">
              <Input
                type="password"
                name="pw"
                label="PASSWORD"
                placeholder="비밀번호를 입력하세요."
                onChange={signUpInfoOnChange}
                required={true}
              ></Input>
            </div>
            <div className="mt-4">
              <Input
                type="password"
                name="verify_pw"
                label="PASSWORD"
                placeholder="비밀번호를 다시 한번 입력하세요."
                onChange={signUpInfoOnChange}
                required={true}
              ></Input>
            </div>
            <div className="mt-4">
              <Input
                type="text"
                name="name"
                label="이름"
                placeholder="이름을 입력하세요."
                onChange={signUpInfoOnChange}
                required={true}
              ></Input>
            </div>
            <div className="mt-4">
              <Input
                type="email"
                name="email"
                label="EMAIL"
                placeholder="이메일을 입력하세요."
                onChange={signUpInfoOnChange}
                required={true}
              ></Input>
            </div>
            <div className="mt-4">
              <Input
                type="tel"
                name="tel"
                label="휴대폰 번호"
                placeholder="휴대폰 번호를 숫자만 입력해주세요."
                onChange={signUpInfoOnChange}
                required={true}
              ></Input>
            </div>
          </article>
          <div className="flex flex-col gap-4 mt-6 w-full">
            <button
              onClick={signUpRequest}
              className="btn btn-wide w-full rounded-full bg-emotion-yellow hover:bg-emotion-lightYellow border-emotion-yellow hover:border-emotion-lightYellow text-mono-100"
            >
              가입하기
            </button>
            <button
              onClick={() => setSearchParams({ view: 'signIn' })}
              className="btn btn-wide w-full rounded-full bg-mono-100 hover:bg-mono-100 border-emotion-yellow hover:border-emotion-yellow text-emotion-yellow"
            >
              돌아가기
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="py-4">
            <img src={weekmotion} alt="main_logo" />
          </div>
          <article className="form-control w-full">
            <h1 className="text-2xl text-mono-700 font-bold">로그인</h1>
            <div className="mt-5">
              <Input
                name="id"
                label="ID"
                type="text"
                placeholder="아이디를 입력하세요."
                onChange={signInInfoOnChange}
                required={true}
              ></Input>
            </div>
            <div className="mt-4">
              <Input
                name="pw"
                label="PASSWORD"
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={signInInfoOnChange}
                required={true}
              ></Input>
            </div>
          </article>
          <div className="flex flex-col gap-4 pt-10 w-full">
            <button
              onClick={signInRequest}
              className="btn w-full rounded-full bg-emotion-yellow hover:bg-emotion-lightYellow border-emotion-yellow hover:border-emotion-lightYellow text-mono-100"
            >
              로그인
            </button>
            <button
              onClick={() => setSearchParams({ view: 'signUp' })}
              className="btn w-full rounded-full bg-mono-100 hover:bg-mono-100 border-emotion-yellow hover:border-emotion-yellow text-emotion-yellow"
            >
              회원가입
            </button>
          </div>
        </>
      )}
    </section>
  );
}
