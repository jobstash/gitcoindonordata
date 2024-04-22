export const fulfilledPromises = async <T>(promises: Promise<T>[]) =>
  (await Promise.allSettled(promises))
    .filter((r) => r.status === 'fulfilled')
    .map((r) => (r as PromiseFulfilledResult<T>).value)
    .flat();
