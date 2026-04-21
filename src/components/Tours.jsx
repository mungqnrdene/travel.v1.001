import React from "react";

const tours = [
  {
    id: 1,
    location: "Хятад",
    title: "Canton Fair 2026",
    days: "9 Өдөр",
    group: "10 хүн групп",
    season: "Бизнес аялал",
    accent: "from-amber-300 via-orange-400 to-rose-500",
  },
  {
    id: 2,
    location: "Хятад",
    title: "Жанжиажэ Аватар Аялал",
    days: "8 Өдөр",
    group: "20 хүн групп",
    season: "Байгалийн маршрут",
    accent: "from-emerald-300 via-teal-400 to-cyan-500",
  },
  {
    id: 3,
    location: "Хятад",
    title: "Шанхай Аялал (Диснейлэндтэй)",
    days: "4 Өдөр",
    group: "20 хүн групп",
    season: "Гэр бүлийн аялал",
    accent: "from-sky-300 via-blue-500 to-indigo-600",
  },
  {
    id: 4,
    location: "Турк",
    title: "Турк Аялал",
    days: "7 Өдөр",
    group: "15 хүн групп",
    season: "Соёлын маршрут",
    accent: "from-rose-300 via-fuchsia-500 to-violet-600",
  },
];

function TourCards() {
  return (
    <section
      id="travels"
      className="relative overflow-hidden bg-stone-950 px-4 py-16 sm:px-6 lg:px-8"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(14,165,233,0.12),_transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(251,191,36,0.12),_transparent_24%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
            <p className="text-xs uppercase tracking-[0.4em] text-sky-300 sm:text-sm">
            Онцлох аяллууд
          </p>
            <h2 className="mt-2 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Таны дараагийн аялал эндээс
          </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-stone-300 sm:text-base">
              Улирлын онцлох маршрутууд, группийн аялал, богино хугацааны бизнес
              trip-үүдийг нэг дороос сонго.
            </p>
        </div>
          <button className="whitespace-nowrap rounded-full bg-white px-4 py-2 text-sm font-semibold text-stone-950 transition hover:bg-stone-200">
          Бүгдийг үзэх →
          </button>
      </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {tours.map((tour) => (
          <div
            key={tour.id}
              className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/5 shadow-[0_25px_80px_rgba(0,0,0,0.28)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-white/20"
          >
              <div className={`relative h-48 bg-gradient-to-br ${tour.accent}`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.35),_transparent_26%)]" />
                <span className="absolute left-4 top-4 rounded-full bg-black/20 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {tour.location}
              </span>
                <span className="absolute bottom-4 left-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                  {tour.season}
                </span>
                <button className="absolute right-4 top-4 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur transition hover:bg-white/25">
                  Сагсанд хийх
              </button>
            </div>

              <div className="p-5">
                <h3 className="mb-3 min-h-[3.5rem] text-lg font-bold text-white">
                {tour.title}
              </h3>
                <div className="mb-5 flex flex-wrap gap-3 text-sm text-stone-300">
                  <span>{tour.days}</span>
                  <span>{tour.group}</span>
              </div>
                <div className="flex gap-2">
                  <button className="flex-1 rounded-xl border border-white/15 py-2 text-sm text-white transition hover:bg-white/10">
                  Дэлгэрэнгүй
                </button>
                  <button className="flex-1 rounded-xl bg-amber-400 py-2 text-sm font-semibold text-stone-950 transition hover:bg-amber-300">
                  Захиалах
                </button>
                </div>
              </div>
            </div>
        ))}
      </div>
      </div>
    </section>
  );
}

export default TourCards;
