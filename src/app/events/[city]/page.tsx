import EventsList from "@/components/events-list";
import H1 from "@/components/h1";
import { Suspense } from "react";
import Loading from "./loading";
import { capitalize } from "@/lib/util";
import { Metadata } from "next";
import { useSearchParams } from "next/navigation";

type Props = {
  params: {
    city: string;
  };
};

type EventsPageProps = Props & {
  searchParams: { [key: string]: string | string[] | undefined };
};

// Function to dynamically update page title
export function generateMetadata({ params }: Props): Metadata {
  const city = params.city;

  // Dynamic page title depending on city or all events
  return {
    title: city === "all" ? "All Events" : `Events in ${capitalize(city)}`,
  };
}

export default async function EventsPage({
  params,
  searchParams,
}: EventsPageProps) {
  const city = params.city;
  const page = searchParams.page || 1;

  return (
    <main className="flex flex-col items-center py-24 px-[20px] min-h-[110vh]">
      <H1 className="mb-28">
        {/* Updates h1 depending on event location or all */}
        {city === "all" && "All Events"}
        {city !== "all" && `Events in ${capitalize(city)}`}
      </H1>
      {/* Adds loading indicator and displays skeleton */}
      <Suspense key={city + page} fallback={<Loading />}>
        <EventsList city={city} page={+page} />
      </Suspense>
    </main>
  );
}
