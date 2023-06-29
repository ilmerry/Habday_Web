import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';

export default function Fund() {
  const [hostname, setHostname] = useState<string>('000');
  const [buyername, setBuyername] = useState<string>('');
  const [goalPrice, setGoalPrice] = useState<number>(700000);
  const [totalPrice, setTotalPrice] = useState<number>(320000);
  const [amount, setAmount] = useState<number>();
  return (
    <Layout buttons={['다음']}>
      <Styled.Title>000 님에게</Styled.Title>
      <Styled.Form>
        <Styled.Label>보내는 분 성함</Styled.Label>
        <Styled.Input id="buyer" type="text" onChange={(e) => setBuyername(e.currentTarget.value)} />
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>펀딩 금액</Styled.Label>
        <Styled.Input
          id="amount"
          type="number"
          //max={`${goalPrice - totalPrice}`}
          placeholder={`최대 ${goalPrice - totalPrice}원까지 가능해요`}
          onChange={(e) => setAmount(parseInt(e.currentTarget.value))}
        />
      </Styled.Form>
      <div>
        <label>응원 메시지</label>
        <textarea />
      </div>
      <div>
        <label>
          카드 결제
          <span>
            <button>카드 추가</button>
          </span>
        </label>
        <select>
          <option>KB국민 9393</option>
          <option>KB국민 9393</option>
          <option>KB국민 9393</option>
        </select>
      </div>
      <div>
        <label>할부개월</label>
        <select>
          <option>일시불</option>
        </select>
      </div>
    </Layout>
  );
}

const Styled = {
  Title: styled.h1`
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-width: 31.3rem;
    margin-top: 3rem;
  `,
  Label: styled.label`
    color: #444;
    font-size: 1.4rem;
    font-weight: 600;
  `,
  Input: styled.input`
    display: flex;
    width: 100%;
    height: 3.9rem;
    padding: 1rem 1.4rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    font-size: 1.4rem;
    color: #444;
  `,
};
