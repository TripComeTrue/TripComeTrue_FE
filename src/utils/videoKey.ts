const videoKey = (videoUrl: string) => {
  const key = videoUrl.split('/').reverse()[0];

  return key;
};

export default videoKey;
