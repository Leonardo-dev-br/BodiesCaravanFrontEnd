import Button from "./components/Button";
import Header from "./components/Header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex justify-center items-center min-h-screen">
        <section className="text-center max-w-lg p-6">
          <div>
            <h2 className="slogan">Inicie essa experiência  Ne(Ca)bulosa</h2>
          </div>
          <div className="border-t border-gray-700">
            <h1 className="subtitle-caravan text-3xl">Caravan Bodies</h1>
            <p className="text-lg mt-4">
            Descubra os mistérios do espaço com nosso sistema incrível! Ele te mostra exatamente onde estão os asteroides e cometas que passam pertinho da Terra. Fique sempre informado e embarque nessa aventura cósmica!
            </p>
          </div>
          <div> 
            <Button/>
          </div>
        </section>
      </main>
      <aside>
        <section>
          <h2>Cometas</h2>
          <p>Os cometas são restos congelados da formação do sistema solar compostos de poeira, rocha e gelo. Eles variam de alguns quilômetros a dezenas de quilômetros de largura, mas à medida que orbitam mais perto do Sol, aquecem e expelem gases e poeira em uma cabeça brilhante que pode ser maior que um planeta. Este material forma uma cauda que se estende por milhões de quilômetros.Os cometas são bolas de neve cósmicas de gases congelados, rochas e poeira que orbitam o Sol. Quando congelados, têm o tamanho de uma pequena cidade. Quando a órbita de um cometa o aproxima do Sol, ele aquece e expele poeira e gases em uma cabeça gigante e brilhante, maior do que a maioria dos planetas. A poeira e os gases formam uma cauda que se estende para longe do Sol por milhões de quilômetros. Provavelmente existem bilhões de cometas orbitando nosso Sol no Cinturão de Kuiper e na ainda mais distante Nuvem de Oort.</p>
        </section>
        <section>
          <h2>Asteroídes</h2>
          <p>Os asteróides, por vezes chamados de planetas menores, são restos rochosos e sem ar que sobraram da formação inicial do nosso sistema solar, há cerca de 4,6 mil milhões de anos.A maioria dos asteróides pode ser encontrada orbitando o Sol entre Marte e Júpiter, dentro do cinturão principal de asteróides. Os asteróides variam em tamanho, desde Vesta – o maior, com cerca de 329 milhas (530 quilómetros) de diâmetro – até corpos com menos de 33 pés (10 metros) de diâmetro. A massa total de todos os asteróides combinados é menor que a da Lua da Terra.  </p>
        </section>
      </aside>
      <footer>
        <section className="text-center p-4 bg-gray-800 text-white">
          <p>&copy; 2023 Caravan Bodies. Todos os direitos reservados. Criado por Leonardo Pimentel</p>
        </section>
      </footer>
    </>
  );
}
