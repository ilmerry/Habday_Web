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
        <Styled.Ping>
          <Styled.Box>{amount}</Styled.Box>
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
    align-items: center;
    width: 100%;
  `,
  Ping: styled.div``,
  Box: styled.div`
    border-bottom: 0.4rem;
    background: var(--light-ui-09, #333);
  `,
  Progressbar: styled.progress`
    height: 0.7rem;
    width: 100%;
    margin-top: 3rem;
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
