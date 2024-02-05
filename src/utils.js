export const getImageUrl = (path) => {
  console.log("path of the image is",path);
  return new URL(`../assests/${path}`, import.meta.url).href;
};
