import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-screen">
        <section className="text-center max-w-lg p-6">
          <div>
            <h2>Inicie essa experiência  Ne(Ca)bulosa</h2>
          </div>
          <h1 className="text-3xl font-bold">Asteroid Caravan</h1>
          <p className="text-lg mt-4">
          Descubra os mistérios do espaço com nosso sistema incrível! Ele te mostra exatamente onde estão os asteroides e cometas que passam pertinho da Terra. Fique sempre informado e embarque nessa aventura cósmica!
          </p>
        </section>
      </main>
    </>
  );
}
