export default function Card({
  venueName,
  imgSrc,
}: {
  venueName: string;
  imgSrc: string;
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg w-64 p-4">
      <img src={imgSrc} className="rounded-md" />
      <h3 className="mt-2 font-bold">{venueName}</h3>
    </div>
  );
}
