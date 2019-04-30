export const serialize = (query) => {
  if (!query) {
    return;
  }

  const searchParams = new URLSearchParams();
  Object.keys(query).forEach((key) => searchParams.append(key, query[key]));

  return searchParams.toString();
};
