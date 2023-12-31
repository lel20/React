import { Botons } from "@/components/productos/Botons";
export default function page() {
  return (
    <div className="container mx-auto flex justify-center">
      <form className="shadow-xl border-separate px-4 rounded w-2/5 mt-4" action="">
        <div className="mb-4">
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="email"
            id="email"
            type="email"
            placeholder="Ingrese su correo electrónico"
          />
          <input className="my-3 border rounded w-full py-2 px-2 focus:outline-none focus:shadow-lg"
            name="password"
            id="password"
            type="password"
            placeholder="Ingrese su contraseña"
          />
        </div>
        <div className="mb-3 flex justify-center">
          <Botons
            bg="bg-blue-500 w-full"
            link="/signin"
            name="Iniciar Sesión"
          />
        </div>

      </form>
    </div>
  );
}
