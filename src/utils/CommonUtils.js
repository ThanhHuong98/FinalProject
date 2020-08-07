
export const checkYoutubeUrl = (url) => {
  const indexOfYoutube = url.indexOf('youtube');
  return indexOfYoutube !== -1;
};

export const extractVideoIdFromYoutubeUrl = (url) => {
    console.log(url);
  const lastSlashIndex = url.lastIndexOf('/');
  console.log(lastSlashIndex);
  return url.substring(lastSlashIndex + 1);
};
