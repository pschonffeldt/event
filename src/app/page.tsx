import H1 from "@/components/h1";
// import SearchForm from "@/components/search-form";
import Link from "next/link";
import Image from "next/image";

type Area = {
  id: number;
  name: string;
  district: string;
  city: string;
  slug: string;
};

const areas: Area[] = [
  {
    id: 1,
    name: "Zona America",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-america",
  },
  {
    id: 2,
    name: "Zona Santa Cruz",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-santa-cruz",
  },
  {
    id: 3,
    name: "Zona Centro",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-centro",
  },
  {
    id: 4,
    name: "Zona International",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-international",
  },
  {
    id: 5,
    name: "Zona Aurora",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-aurora",
  },
  {
    id: 6,
    name: "Zona San Antonio",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-san-antonio",
  },
  {
    id: 7,
    name: "Zona Armendariz",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-armendariz",
  },
  {
    id: 8,
    name: "Zona Rosedal",
    district: "Miraflores",
    city: "Lima",
    slug: "zona-rosedal",
  },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center px-3 pt-36">
      <H1>Encuentra cocheras en Miraflores</H1>
      <p className="mb-12 mt-7 text-2xl lg:text-3xl opacoty-75">
        Conecta con dueños de cocheras y{" "}
        <span className="font-bold text-accent italic underline">olvídate</span>{" "}
        de dar vueltas buscando dónde estacionar.
      </p>

      {/* <SearchForm /> */}
      {/* District availability */}
      <section className="mt-4 flex gap-x-4 text-sm text-white/50">
        <h2>Distritos habilitadas:</h2>
        <div className="space-x-2 font-semibold">
          <Link href="/cocheras/lima">Lima</Link>
        </div>
      </section>

      <section className="flex flex-row gap-10 justify-center pt-5">
        {/* container for mapped areas */}
        <div className="flex flex-wrap max-w-[1100px] gap-10 justify-center w-1/2">
          {areas.map((area) => (
            <div
              key={area.id}
              className="flex flex-wrap justify-center content-center"
            >
              <button
                className="bg-white/20 text-lg capitalize bg-blur mt-5
              min-w-[200px] lg:mt-auto w-[200px] rounded-md border-white/10 border-2 sm:w-full py-2 state-effects"
              >
                <Link
                  href={`/cocheras/${area.city}`}
                  className="text-m font-bold text-white "
                >
                  {area.name}
                </Link>
              </button>
            </div>
          ))}
        </div>

        {/* container for title box */}
        <div className="relative h-[400px] w-1/2">
          <Image
            src="/map.png"
            alt="Mapa de zonas en Miraflores"
            fill
            className="object-contain p-4 rounded-lg"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </div>
      </section>
    </main>
  );
}
