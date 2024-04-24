export const getEnsNames = async (addresses: string[]): Promise<Record<string, string>> => {
  const queries = addresses.map((address) => `addresses[]=${address}`);
  const batches = getRequestBatches(queries);
  const promises = [];

  const batchesLength = batches.length;
  for (let i = 0; i < batchesLength; i++) {
    promises.push(
      fetch(`https://gitcoin.enstate.rs/bulk/a?${batches[i].join('&')}`)
        .then((res) => res.json())
        .then((res) => {
          const result: Record<string, string> = {};
          for (const response of res.response) {
            if (response.type === 'success') {
              result[response.address.toLowerCase()] = response.name;
            }
          }
          return result;
        }),
    );
  }

  const result = await Promise.all(promises);

  return result.reduce((acc, obj) => {
    return { ...acc, ...obj };
  }, {});
};

// There are thousands of addresses that need to be fetched
// Need to fetch in batches otherwise 414 -> enstate.rs expects 10
const BATCH_COUNT = 10;

const getRequestBatches = (queries: string[]) => {
  const totalCount = queries.length;
  const batches = [];
  for (let i = 0; i < totalCount; i += BATCH_COUNT) {
    const batch = queries.slice(i, i + BATCH_COUNT);
    batches.push(batch);
  }
  return batches;
};
