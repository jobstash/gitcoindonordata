import { Application } from '@/core/types';

export const getPropsFromApplications = (applications: Application[]) => {
  let estimatedFunds = 0;
  const projects = [];
  let logo: string | undefined;
  let banner: string | undefined;
  let inputValue = '';

  for (const application of applications) {
    const {
      amountUSD,
      projectId,
      roundId,
      metadata: {
        application: {
          project: { id, title, logoImg, bannerImg },
        },
      },
    } = application;
    estimatedFunds += amountUSD;
    projects.push({ id, title, projectId, roundId, amountUSD });

    if (!inputValue) inputValue = title;
    if (logoImg && !logo) logo = logoImg;
    if (bannerImg && !bannerImg) banner = bannerImg;
  }

  return {
    estimatedFunds: estimatedFunds.toFixed(2),
    logo,
    banner,
    projects,
    inputValue,
  };
};
