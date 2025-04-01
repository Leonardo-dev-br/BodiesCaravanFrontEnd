import Header from "../components/Header";

export default function ProfileUser() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center min-h-screen bg-blue-950">
        <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md flex flex-col gap-4">
          <h2 className="text-xl font-bold text-center text-gray-700">Perfil do Usuário</h2>

          <label className="flex flex-col text-gray-700">
            Nome:
            <input type="text" name="name" className="border border-gray-300 rounded p-2" required />
          </label>

          <label className="flex flex-col text-gray-700">
            Sobrenome:
            <input type="text" name="lastName" className="border border-gray-300 rounded p-2" required />
          </label>

          <label className="flex flex-col text-gray-700">
            Data de nascimento:
            <input type="date" name="birthday" className="border border-gray-300 rounded p-2" required />
          </label>

          <label className="flex flex-col text-gray-700">
            E-mail:
            <input type="email" name="email" className="border border-gray-300 rounded p-2" required />
          </label>

          <label className="flex flex-col text-gray-700">
            Senha:
            <input type="password" name="password" className="border border-gray-300 rounded p-2" required />
          </label>

          <button type="submit" className="bg-purple-700 text-white p-2 rounded hover:bg-purple-600 transition">
            Salvar
          </button>
        </form>
      </div>
    </>
  );
}
