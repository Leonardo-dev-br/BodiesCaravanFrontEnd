import Header from "../components/Header";

interface SearchHistoryProps {
  idSearchHistory: number;
  surveyDay: string;
  descHistory: string;
}

export default function SearchHistory({ idSearchHistory, surveyDay, descHistory }: SearchHistoryProps) {
  return (
    <>
        <Header />
        <div className="flex justify-center items-center min-h-screen bg-blue-900">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
              <h2 className="text-xl font-bold text-center text-gray-700">Histórico de Pesquisa</h2>

              <div className="flex flex-col text-gray-700">
                  <span className="font-semibold">ID:</span>
                  <p className="border border-gray-300 rounded p-2 bg-gray-200">{idSearchHistory}</p>
              </div>

              <div className="flex flex-col text-gray-700">
                  <span className="font-semibold">Data da Pesquisa:</span>
                  <p className="border border-gray-300 rounded p-2 bg-gray-200">{surveyDay}</p>
              </div>

              <div className="flex flex-col text-gray-700">
                  <span className="font-semibold">Descrição:</span>
                  <p className="border border-gray-300 rounded p-2 bg-gray-200">{descHistory}</p>
              </div>
          </div>
      </div>
    </>
  );
}
