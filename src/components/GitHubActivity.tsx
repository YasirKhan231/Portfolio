"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, Github, RotateCw } from "lucide-react";

type Day = { date: string; count: number; level: number };
type Activity = { contributions: Day[] };

function isActivity(value: unknown): value is Activity {
  if (
    !value ||
    typeof value !== "object" ||
    !("contributions" in value) ||
    !Array.isArray(value.contributions)
  )
    return false;
  return (
    value.contributions.length > 0 &&
    value.contributions.every((day: unknown) => {
      if (!day || typeof day !== "object") return false;
      const item = day as Record<string, unknown>;
      return (
        typeof item.date === "string" &&
        /^\d{4}-\d{2}-\d{2}$/.test(item.date) &&
        Number.isFinite(Date.parse(item.date)) &&
        typeof item.count === "number" &&
        Number.isInteger(item.count) &&
        item.count >= 0 &&
        typeof item.level === "number" &&
        Number.isInteger(item.level) &&
        item.level >= 0 &&
        item.level <= 4
      );
    })
  );
}

export default function GitHubActivity() {
  const [year, setYear] = useState("last");
  const [years, setYears] = useState<number[]>([]);
  const [days, setDays] = useState<Day[]>([]);
  const [status, setStatus] = useState<"loading" | "ready" | "error">(
    "loading",
  );
  const [retry, setRetry] = useState(0);
  const [selected, setSelected] = useState<Day | null>(null);

  useEffect(() => {
    const current = new Date().getFullYear();
    setYears([current, current - 1, current - 2, current - 3]);
  }, []);
  useEffect(() => {
    const controller = new AbortController();
    let disposed = false;
    const timeout = setTimeout(() => controller.abort(), 12000);
    setStatus("loading");
    setSelected(null);
    async function load() {
      try {
        const response = await fetch(
          `https://github-contributions-api.jogruber.de/v4/YasirKhan231?y=${year}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("Activity unavailable");
        const data: unknown = await response.json();
        if (!isActivity(data)) throw new Error("Invalid activity data");
        if (!disposed) {
          setDays(
            [...data.contributions].sort((a, b) =>
              a.date.localeCompare(b.date),
            ),
          );
          setStatus("ready");
        }
      } catch {
        if (!disposed) setStatus("error");
      } finally {
        clearTimeout(timeout);
      }
    }
    void load();
    return () => {
      disposed = true;
      clearTimeout(timeout);
      controller.abort();
    };
  }, [year, retry]);

  const total = days.reduce((sum, day) => sum + day.count, 0);
  const activeDays = days.filter((day) => day.count > 0).length;
  const bestDay = days.reduce((max, day) => Math.max(max, day.count), 0);
  const offset = days.length
    ? new Date(`${days[0].date}T00:00:00Z`).getUTCDay()
    : 0;
  const cells: (Day | null)[] = [...Array<null>(offset).fill(null), ...days];
  const weeks = Array.from(
    { length: Math.ceil(cells.length / 7) },
    (_, index) => cells.slice(index * 7, index * 7 + 7),
  );
  let lastMonth = -1;
  const months = weeks.map((week) => {
    const day = week.find((item) => item && Number(item.date.slice(8)) <= 7);
    if (!day) return "";
    const date = new Date(`${day.date}T00:00:00Z`);
    const month = date.getUTCMonth();
    if (month === lastMonth) return "";
    lastMonth = month;
    return date.toLocaleDateString("en", { month: "short", timeZone: "UTC" });
  });

  return (
    <div className="activity-card">
      <div className="activity-header">
        <a
          href="https://github.com/YasirKhan231"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
          <span>
            <strong>YasirKhan231</strong>
            <small>Building in the open</small>
          </span>
          <ArrowUpRight size={17} />
        </a>
        <label className="year-select">
          <span className="sr-only">Contribution period</span>
          <select
            value={year}
            onChange={(event) => setYear(event.target.value)}
          >
            <option value="last">Last 12 months</option>
            {years.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
      {status === "loading" && (
        <div className="activity-placeholder" role="status">
          <RotateCw className="loading-icon" size={24} />
          <p>Loading GitHub contributions…</p>
        </div>
      )}
      {status === "error" && (
        <div className="activity-placeholder" role="status">
          <Github size={28} />
          <p>GitHub activity is temporarily unavailable.</p>
          <button
            className="text-link"
            onClick={() => setRetry((value) => value + 1)}
          >
            Try again <RotateCw size={15} />
          </button>
          <a
            href="https://github.com/YasirKhan231?tab=overview"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            View contributions on GitHub <ArrowUpRight size={15} />
          </a>
        </div>
      )}
      {status === "ready" && (
        <>
          <div className="activity-stats">
            <div>
              <strong>{total.toLocaleString()}</strong>
              <span>contributions</span>
            </div>
            <div>
              <strong>{activeDays}</strong>
              <span>active days</span>
            </div>
            <div>
              <strong>{bestDay}</strong>
              <span>most in one day</span>
            </div>
          </div>
          <div
            className="calendar-scroll"
            tabIndex={0}
            role="region"
            aria-label="GitHub contribution calendar; scroll horizontally on smaller screens"
          >
            <div className="calendar">
              <div className="weekday-labels" aria-hidden="true">
                <span>Mon</span>
                <span>Wed</span>
                <span>Fri</span>
              </div>
              <div className="calendar-weeks">
                {weeks.map((week, index) => (
                  <div
                    className="calendar-week"
                    key={week.find(Boolean)?.date ?? index}
                  >
                    <span className="month-label">{months[index]}</span>
                    {week.map((day, dayIndex) =>
                      day ? (
                        <button
                          type="button"
                          key={day.date}
                          className={`contribution-cell level-${day.level}`}
                          tabIndex={
                            day.date ===
                            (selected?.date ?? days[days.length - 1]?.date)
                              ? 0
                              : -1
                          }
                          title={`${day.count} contributions on ${day.date}`}
                          aria-label={`${day.count} contributions on ${day.date}`}
                          onPointerEnter={() => setSelected(day)}
                          onFocus={() => setSelected(day)}
                          onClick={() => setSelected(day)}
                          onKeyDown={(event) => {
                            const directions: Record<string, number> = {
                              ArrowLeft: -7,
                              ArrowRight: 7,
                              ArrowUp: -1,
                              ArrowDown: 1,
                            };
                            const delta = directions[event.key];
                            if (delta === undefined) return;
                            event.preventDefault();
                            const buttons = Array.from(
                              event.currentTarget
                                .closest(".calendar-weeks")
                                ?.querySelectorAll<HTMLButtonElement>(
                                  "button",
                                ) ?? [],
                            );
                            const next =
                              buttons.indexOf(event.currentTarget) + delta;
                            buttons[
                              Math.max(0, Math.min(buttons.length - 1, next))
                            ]?.focus();
                          }}
                        />
                      ) : (
                        <span key={`empty-${dayIndex}`} />
                      ),
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="calendar-footer">
            <p role="status">
              {selected
                ? `${selected.count} contributions · ${new Date(`${selected.date}T00:00:00Z`).toLocaleDateString("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" })}`
                : "Hover, tap, or focus a day to explore."}
            </p>
            <div
              className="calendar-legend"
              aria-label="Contribution intensity from less to more"
            >
              <span>Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <i key={level} className={`contribution-cell level-${level}`} />
              ))}
              <span>More</span>
            </div>
          </div>
        </>
      )}
      <div className="activity-source">
        <span>Public profile activity · Updates hourly</span>
        <a
          href="https://github.com/grubersjoe/github-contributions-api"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribution data <ArrowUpRight size={12} />
        </a>
      </div>
    </div>
  );
}
