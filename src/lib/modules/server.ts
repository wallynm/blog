interface fetchApiPostsInterface {
  url: URL,
  fetch: any
}

interface fetchApiPostsCountInterface {
  url: URL,
  fetch: any
}

export const fetchApiPosts = async ({
  fetch,
  url
}: fetchApiPostsInterface) => {
  const postRes = await fetch(`${url.origin}/api/posts.json`)
  return await postRes.json()
}

export const fetchApiPostsCount = async ({
  fetch,
  url
}: fetchApiPostsCountInterface) => {
  const totalRes = await fetch(`${url.origin}/api/posts/count`)
  return await totalRes.json()
}
