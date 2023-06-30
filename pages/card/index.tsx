import React from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';

export default function Card() {
  return (
    <Layout buttons={['다음에 입력', '카드 추가하기']}>
      <Styled.Title>결제정보를 입력해주세요</Styled.Title>
      <Styled.Form>
        <Styled.InputContainer>
          <Styled.Label>카드번호</Styled.Label>
          <Styled.Input placeholder="0000 - 0000 - 0000 - 0000" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>카드 유효기간</Styled.Label>
          <Styled.Input placeholder="YYYY - MM" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>생년월일</Styled.Label>
          <Styled.Input placeholder="6자리" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>비밀번호</Styled.Label>
          <Styled.Input placeholder="앞 2자리" />
        </Styled.InputContainer>
        <Styled.InputContainer>
          <Styled.Label>카드별칭</Styled.Label>
          <Styled.Input placeholder="6자리" />
        </Styled.InputContainer>
        <Styled.Message>* 본인 명의의 카드만 입력 가능합니다.</Styled.Message>
      </Styled.Form>
    </Layout>
  );
}

const Styled = {
  Title: styled.h1`
    margin-top: 10.5rem;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
    letter-spacing: -0.03rem;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    width: 31.2rem;
    margin-top: 6.1rem;
  `,
  InputContainer: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 4.7rem;
    padding: 0 1.2rem;
    border: 0.1rem solid #ededed;
    border-top: 0;
    &:first-child {
      border-top: 0.1rem solid #ededed;
    }
  `,
  Label: styled.label`
    color: #444;
    font-size: 1.2rem;
    line-height: 3rem;
  `,
  Input: styled.input`
    width: 20.3rem;
    height: 3rem;
    border: 0;
    font-size: 1.2rem;
    line-height: 3rem;
    &::placeholder {
      color: #c4c4c4;
    }
  `,
  Message: styled.p`
    color: #c4c4c4;
    font-size: 1rem;
    line-height: 2rem;
    letter-spacing: -0.1rem;
  `,
};
