export default function Header({title}:{title:string}) {
  return (
    <header className="sticky top-0 z-10 p-4 backdrop-blur"
            style={{background:"rgba(11,15,20,0.6)",borderBottom:"1px solid #1d2733"}}>
      <h1 className="text-2xl font-semibold">{title}</h1>
    </header>
  );
}
