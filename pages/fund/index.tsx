import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';
import Progress from '../../components/common/Progress';
import { selectBoxImg } from '../../assets';
import Image from 'next/image';

export default function Fund() {
  const [hostname, setHostname] = useState<string>('000');
  const [buyername, setBuyername] = useState<string>('');
  const [goalPrice, setGoalPrice] = useState<number>(700000);
  const [totalPrice, setTotalPrice] = useState<number>(320000);
  const [amount, setAmount] = useState<number>(goalPrice - totalPrice || 0);
  const [message, setMessage] = useState<string>('');
  return (
    <Layout buttons={['다음']}>
      <Styled.Title>000 님에게</Styled.Title>
      <Styled.Form>
        <Styled.Label>보내는 분 성함</Styled.Label>
        <Styled.Input id="buyer" type="text" onChange={(e) => setBuyername(e.currentTarget.value)} />
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>펀딩 금액</Styled.Label>
        <Progress goalPrice={goalPrice} totalPrice={totalPrice} isPing amount={amount} />
        <Styled.Input
          id="amount"
          type="number"
          //max={`${goalPrice - totalPrice}`}
          placeholder={`최대 ${goalPrice - totalPrice}원까지 가능해요`}
          onChange={(e) => setAmount(parseInt(e.currentTarget.value))}
        />
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>응원 메시지</Styled.Label>
        <Styled.Textarea />
        <Styled.Maxline>{message.length || 0}/60</Styled.Maxline>
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>
          카드 결제
          <Styled.AddCardButton>카드 추가</Styled.AddCardButton>
        </Styled.Label>
        <Styled.Select>
          <option>KB국민 9393</option>
          <option>KB국민 9393</option>
          <option>KB국민 9393</option>
        </Styled.Select>
      </Styled.Form>
      <Styled.Form>
        <Styled.Label>할부개월</Styled.Label>
        <Styled.SelectDisabled>
          <option>일시불</option>
        </Styled.SelectDisabled>
      </Styled.Form>
    </Layout>
  );
}

const Styled = {
  Title: styled.h1`
    margin-top: 5rem;
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
    display: flex;
    justify-content: space-between;
    align-items: center;
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
  Textarea: styled.textarea`
    width: 100%;
    height: 17.5rem;
    padding: 1rem 1.4rem;
    margin-top: 1rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    font-size: 1.4rem;
    line-height: 3rem;
    color: #444;
    resize: none;
  `,
  Maxline: styled.p`
    color: #c4c4c4;
    font-size: 1.4rem;
    line-height: 3rem;
    align-self: flex-end;
  `,
  AddCardButton: styled.button`
    width: 6rem;
    height: 2rem;
    border-radius: 0.2rem;
    border: 0.1rem solid #8e8e8e;
    color: #444;
    font-size: 1rem;
    line-height: 1rem;
    text-align: center;
  `,
  Select: styled.select`
    display: flex;
    width: 100%;
    height: 3.9rem;
    margin-top: 1.15rem;
    padding: 0.45rem 1.4rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    color: #444;
  `,
  SelectDisabled: styled.select`
    display: flex;
    width: 100%;
    height: 3.9rem;
    margin-top: 1.15rem;
    margin-bottom: 6.4rem;
    padding: 0.45rem 1.4rem;
    border-radius: 0.5rem;
    border: 0.1rem solid #8e8e8e;
    background: #ececec;
    color: #444;
    pointer-events: none;
  `,
};
