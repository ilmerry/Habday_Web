import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '../../components/common/Layout';

export default function Lading() {
  const [funderName, setFunderName] = useState<string>('000');
  return (
    <Layout buttons={['네이버로 시작하기']} link="HABDAY가 처음이세요?">
      <Styled.Emoji>🎁</Styled.Emoji>
      <Styled.Message>{funderName}님의 펀딩에 참여해보세요!</Styled.Message>
    </Layout>
  );
}

const Styled = {
  Emoji: styled.h1`
    text-align: center;
    text-shadow: 0rem 0.4rem 0.4rem 0rem rgba(0, 0, 0, 0.25);
    font-size: 12rem;
    font-weight: 500;
  `,
  Message: styled.h2`
    margin-top: 3.4rem;
    text-align: center;
    font-size: 2.1rem;
    font-weight: 500;
  `,
};
