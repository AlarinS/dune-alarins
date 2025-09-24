import dict from "../../i18n/dictionary.ru.json";

// Очень простой t(): t("key","Фолбэк")
export function t(key: string, fallback?: string) {
  return (dict as Record<string,string>)[key] ?? (fallback ?? key);
}

// Нормализуем вход (и EN, и RU) -> RU
const statusMap: Record<string,string> = {
  "Done": t("status_done","Готово"),
  "Готово": t("status_done","Готово"),
  "In Progress": t("status_in_progress","В работе"),
  "В работе": t("status_in_progress","В работе"),
  "Not Started": t("status_not_started","Не начато"),
  "Не начато": t("status_not_started","Не начато")
};

const typeMap: Record<string,string> = {
  "Cover page": t("type_cover_page","Титульная страница"),
  "Table of contents": t("type_table_of_contents","Оглавление"),
  "Narrative": t("type_narrative","Нарратив"),
  "Technical content": t("type_technical","Техническое содержание"),
  "Legal": t("type_legal","Юридическое"),
  "Visual": t("type_visual","Визуализация"),
  "Planning": t("type_planning","Планирование"),
  "Financial": t("type_financial","Финансы"),
  "Plain language": t("type_plain","Простым языком"),

  // RU-вход — отразим на RU-выход
  "Титульная страница": t("type_cover_page","Титульная страница"),
  "Оглавление": t("type_table_of_contents","Оглавление"),
  "Нарратив": t("type_narrative","Нарратив"),
  "Техническое содержание": t("type_technical","Техническое содержание"),
  "Юридическое": t("type_legal","Юридическое"),
  "Визуализация": t("type_visual","Визуализация"),
  "Планирование": t("type_planning","Планирование"),
  "Финансы": t("type_financial","Финансы"),
  "Простым языком": t("type_plain","Простым языком")
};

export function mapStatus(s: string){ return statusMap[s] ?? s; }
export function mapType(s: string){ return typeMap[s] ?? s; }
