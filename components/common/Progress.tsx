import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { PingArrowImg } from '../../assets';

interface ProgressProps {
  totalPrice: number;
  goalPrice: number;
  amount?: number;
  isPing?: boolean;
}

export default function Progress(props: ProgressProps) {
  const { totalPrice, goalPrice, amount, isPing } = props;

  return (
    <Styled.Root>
      {isPing && (
        <Styled.Ping location={((totalPrice - goalPrice) / goalPrice) * 100}>
          <Styled.Box>{amount} 원</Styled.Box>
          <Image
            src={PingArrowImg}
            alt="툴팁화살표 이미지"
            width={10}
            height={6}
            placeholder="blur"
            blurDataURL="assets/arrow.svg"
            priority
          />
        </Styled.Ping>
      )}
      <Styled.Progressbar value={(totalPrice / goalPrice) * 100} max={100} />
      <Styled.ProgressLabel>총 {goalPrice}원</Styled.ProgressLabel>
    </Styled.Root>
  );
}
const Styled = {
  Root: styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
  `,
  Ping: styled.div<{ location: number }>`
    //transform: translateX(location);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-width: 5.2rem;
    margin-bottom: 1rem;
    margin-top: 1rem;
    height: 2.6rem;
  `,
  Box: styled.div`
    padding: 0.4rem 0.6rem;
    border-bottom: 0.4rem;
    background: #333;
    border-radius: 0.4rem;
    border: 0;
    box-shadow: 0.2rem 0.6rem 1.2rem 0rem rgba(0, 0, 0, 0.12), 0rem 0rem 0.4rem 0rem rgba(0, 0, 0, 0.12);
    text-align: center;
    color: white;
    font-size: 0.9rem;
    line-height: 1.8rem;
    letter-spacing: -0.06rem;
  `,
  Progressbar: styled.progress`
    height: 0.7rem;
    width: 100%;
    border-radius: 0.5rem;
    &::-webkit-progress-bar {
      background: #dadada;
      border-radius: 0.5rem;
    }
    &::-webkit-progress-value {
      background: #030b0d;
      border-radius: 0.5rem;
    }
  `,
  ProgressLabel: styled.label`
    width: 100%;
    text-align: right;
    font-size: 0.9rem;
    line-height: 1.8rem;
    color: #707070;
  `,
};
