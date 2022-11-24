const getPathImage = (imageName) => {
  return new URL(`../img/${imageName}.png`, import.meta.url).href
}


export { getPathImage }