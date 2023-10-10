export default async function swDev() {
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  const response = await navigator.serviceWorker.register(swUrl);
  return response;
}
