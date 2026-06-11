export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">🌿</span>
              <span className="text-xl font-bold">TaoHeal</span>
            </div>
            <p className="text-gray-400 text-sm">
              Traditional Chinese Medicine Wellness Platform
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Knowledge</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/zh/knowledge" className="hover:text-white transition-colors">Articles</a></li>
              <li><a href="/zh/tools/body-type-quiz" className="hover:text-white transition-colors">Body Type Quiz</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/zh/community" className="hover:text-white transition-colors">Discussion</a></li>
              <li><a href="/zh/about" className="hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><a href="/zh/legal/disclaimer" className="hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="/zh/legal/privacy" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/zh/legal/terms" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© 2026 TaoHeal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
