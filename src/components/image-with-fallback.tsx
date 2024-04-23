'use client';

import Image from 'next/image';
import { useState } from 'react';

import { ClassValue } from 'clsx';

import { cn } from '@/utils/cn';

interface Props {
  srcList: string[];
  alt: string;
  className?: ClassValue;
  isPriority?: boolean;
}

export const ImageWithFallback = ({ srcList, alt, className, isPriority }: Props) => {
  const [index, setIndex] = useState(0);

  const onError = () => {
    if (index < srcList.length - 1) {
      setIndex(index + 1);
    }
  };

  return (
    <div
      className={cn('relative size-10 overflow-hidden rounded-full object-cover', className)}
    >
      {index < srcList.length ? (
        <Image
          key={index}
          fill
          priority={isPriority}
          src={srcList[index]}
          alt={alt}
          onError={onError}
        />
      ) : (
        <p>Failed to load image ...</p>
      )}
    </div>
  );
};
