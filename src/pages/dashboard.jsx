import { useState } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import { Link } from "react-router-dom";


export default function Dashboard() {
  const [search, setSearch] = useState("");
  return (
    <div className="min-h-screen text-ink">
      <header className="border-b-2 border-black bg-white px-6 py-4 shadow-sm">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18cm] text-moss-600">Alumni Skill Tracer</p>
            <h1 className="text-xl font-bold font-display"> Dashboard</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-moss-700 font-medium text-ink/70">John Doe</span>
            <Link to="/login" className="font-semibold text-sm hover:underline">Sign out</Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-8 space-y-8">
        <div className="flex justify-between items-center bg-white p-4 rounded-lg border-2 border-black">
          <div className="w-72">
            <Input
              type="text"
              placeholder="Search skills, industries..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <Button variant="primary" size="md">Filter Results</Button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          <div className="rounded-lg border-2 border-black bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/60">Total Tracked</p>
            <p className="mt-2 text-3xl font-extrabold text-moss-700">69</p>
          </div>

          <div className="rounded-lg border-2 border-black bg-white p-5 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-wider text-ink/60">Top Skill</p>
            <p className="mt-2 text-2xl font-extrabold">React.js</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="rounded-lg border-2 border-black bg-white p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-bold font-display">Top In-demand Alumni skills</h2>
              <p className="text-sm text-ink/60">Based on verified alumni profiles</p>
            </div>

            <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>React.js & Frontend</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300"></div>
                    <div className="flex justify-between text-sm font-semibold">
                    <span>Node.js & Backend</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300"></div>
                    <div className="flex justify-between text-sm font-semibold">
                    <span>Data Science</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300"></div>
                    <div className="flex justify-between text-sm font-semibold">
                    <span>Cloud & DevOps</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300"></div>
                    <div className="flex justify-between text-sm font-semibold">
                    <span>UI/UX Design</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300"></div>
                  </div>
                </div>
            </div>
          

          <div className="rounded-lg border-2 border-black bg-white p-6 shadow-sm space-y-6">
            <div>
              <h2 className="text-lg font-bold font-display">Top Career Sectors</h2>
            </div>
            <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Financial Technology/Banking</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300">
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>Healthcare</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300">
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>E-Commerce & Retail</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300">
                  </div>
                  <div className="flex justify-between text-sm font-semibold">
                    <span>SaaS & Enterprise software</span>
                  </div>
                  <div className="h-3 w-full rounded-full bg-slate-100 border border-slate-300">
                  </div>
                </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}