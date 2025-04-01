import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-screen bg-blue-950 text-white">
        <section className="text-center max-w-lg p-6">
          <h1 className="text-3xl font-bold">🚀 Explore o espaço sem sair da Terra! 🌍🔭</h1>
          <p className="text-lg mt-4">
            Quer saber quais asteroides e cometas estão passeando perto do nosso planeta? Nosso sistema te mantém informado
            em tempo real. Acompanhe o cosmos e descubra os segredos do universo—antes que ele venha bater na nossa porta! 🌠😆
          </p>
        </section>
      </main>
    </>
  );
}
