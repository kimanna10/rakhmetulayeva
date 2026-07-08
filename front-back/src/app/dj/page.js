import Section from "@/components/layouts/Section";
import { getProjectsFromSheet } from "@/lib/data";

export default async function Dj() {
  const mixes = await getProjectsFromSheet("djsets");

  return (
    <Section title="DJ">
      <div className="space-y-10">
        {mixes.map((mix, idx) => (
          // Добавляем проверку, что mix не пустой
          <div key={mix.id || idx} className="space-y-3">
            {/* Заголовок с защитой: если пусто, выводим заглушку */}
            <h3 className="text-white lg:text-lg text-base">
              {mix.title || "Без названия"}
            </h3>

            {/* Плеер с защитой: если нет ссылки, не рисуем iframe вообще */}
            <div className="w-full h-[166px] overflow-hidden bg-black/40 rounded-md">
              {mix.url ? (
                mix.type === "youtube" ? (
                  <iframe
                    className="w-full h-full"
                    src={mix.url}
                    title={mix.title || "DJ Set"}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <iframe
                    className="w-full h-full"
                    src={mix.url}
                    frameBorder="0"
                    allow="autoplay"
                  />
                )
              ) : (
                <div className="flex items-center justify-center h-full text-neutral-500">
                  Ссылка отсутствует
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
