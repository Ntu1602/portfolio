export default function DashboardLayout() {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-900 text-white p-4">
        <nav className="space-y-3">
          <a href="/builder/dashboard" className="block">Dashboard</a>
          <a href="/dashboard/profile">Profile</a>
          <a href="/dashboard/about">About</a>
          <a href="/dashboard/experience">Experience</a>
          <a href="/dashboard/skills">Skills</a>
          <a href="/dashboard/projects">Projects</a>
          <a href="/portfolio/preview" className="block bg-purple-600 p-2 mt-4 rounded">
            Preview
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100"></main>
    </div>
  );
}
