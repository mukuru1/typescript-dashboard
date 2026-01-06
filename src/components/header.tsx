export default function Header() {
  return (
    <header className="flex items-center justify-between px-20 py-6 border-b">
      <a className="font-bold text-lg">ABA English</a>

      <ul className="flex gap-7 text-sm">
        <li>Courses</li>
        <li>Pricing</li>
        <li>Method</li>
        <li>Certificates</li>
        <li>Resources</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="flex gap-3">
        <button className="text-sm">Login</button>
        <button className="bg-black text-white px-4 py-2 rounded-full text-sm">
          Sign Up
        </button>
      </div>
    </header>
  );
}
