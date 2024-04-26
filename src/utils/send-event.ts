import { sendGAEvent } from '@next/third-parties/google';

export const sendEvent = (event: string, value: string) => {
  if (process.env.NODE_ENV === 'production') {
    sendGAEvent({ event, value });
  }
};
