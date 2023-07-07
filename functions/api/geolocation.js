export function onRequest(context) {

  const { cf } = context.request;
  let lat = cf.latitude;
  let lng = cf.longitude;

  lat = parseFloat(lat).toFixed(5).toString();
  lng = parseFloat(lng).toFixed(5).toString();

  return new Response(JSON.stringify(
    {
      message: 'API is up and running',
      longitude: lng,
      latitude: lat
    }), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
