export default function Page({ params }: { params: { id: string } }) {
  return <main>Tour #{params.id}</main>;
}
