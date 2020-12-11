import React, { useState, useCallback } from 'react';
import useUser from '../hooks/useUser';
import { login } from '../services/user.service';

const Login: React.FC = () => {
  const { handleSetUser } = useUser();

  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setId(e.target.value);
  }, [setId]);

  const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  }, [setPassword]);

  const handleLogin = useCallback(async () => {
    try {
      const user = await login(id, password);
      alert('로그인에 성공했어요.'); 
      setId('');
      setPassword('');
      handleSetUser(user);
    } catch (err) {
      alert('로그인에 실패했어요.');
    }
  }, [id, setId, password, setPassword, handleSetUser]);

  return (
    <div>
      <label htmlFor="id">아이디</label>
      <input id="id" type="text" value={id} onChange={handleChangeId} />
      <br />
      <label htmlFor="password">비밀번호</label>
      <input name="password" type="password" value={password} onChange={handleChangePassword} />
      <br />
      <button onClick={handleLogin}>로그인하기</button>
    </div>
  );
};

export default Login;
