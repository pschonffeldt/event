import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { Metadata } from "next";
import { z } from "zod";

type Props = {
  params: { city: string };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

// Slug helper function to turn kebab case to something more readable lol
function slugToTitle(slug: string) {
  return slug
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export function generateMetadata({ params }: Props): Metadata {
  const { city } = params;
  const label =
    city === "todas"
      ? "Todas las cocheras"
      : `Cocheras en ${slugToTitle(city)}`;
  return { title: label };
}

const pageNumberSchema = z.coerce.number().int().positive().optional();

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const { city } = params;
  const parsed = pageNumberSchema.safeParse(searchParams.page);
  if (!parsed.success) throw new Error("Invalid page number");

  const label =
    city === "todas"
      ? "Todos las cocheras"
      : `Cocheras en ${slugToTitle(city)}`;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">{label}</H1>
      <Suspense key={city + parsed.data} fallback={<Loading />}>
        <EventsList city={city} page={parsed.data} />
      </Suspense>
    </main>
  );
}
