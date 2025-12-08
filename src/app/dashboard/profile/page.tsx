
export default function DashboardLayout() {
  return (
    <div className="flex">
      <aside className="w-64 h-screen bg-gray-900 text-white p-4">
        <nav className="space-y-3">
          <a href="/dashboard" className="block ">Dashboard</a>
          <a href="/dashboard/profile" className="block bg-purple-600 p-2 mt-4 rounded">Profile</a>
          <a href="/dashboard/about" className="block">About</a>
          <a href="/dashboard/experience" className="block">Experience</a>
          <a href="/dashboard/skills" className="block">Skills</a>
          <a href="/dashboard/projects" className="block" >Projects</a>
          <a href="/portfolio/preview" className="block bg-purple-600 p-2 mt-4 rounded">
            Preview
          </a>
        </nav>
      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        <div className="text-white">Profile</div>
      </main>
    </div>
  );
}
