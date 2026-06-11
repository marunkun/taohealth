import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">TaoHeal</h3>
            <p className="text-sm">用自然方式找回健康</p>
            <p className="text-sm mt-1 text-gray-400">No Tox, All TCM</p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">导航</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/zh/knowledge" className="hover:text-green-400 transition">知识库</Link></li>
              <li><Link href="/zh/tools/body-type-quiz" className="hover:text-green-400 transition">体质测试</Link></li>
              <li><Link href="/zh/community" className="hover:text-green-400 transition">社区</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">法律</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/zh/legal/disclaimer" className="hover:text-green-400 transition">健康免责声明</Link></li>
              <li><Link href="/zh/legal/privacy" className="hover:text-green-400 transition">隐私政策</Link></li>
              <li><Link href="/zh/legal/terms" className="hover:text-green-400 transition">服务条款</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm text-gray-500">
          © 2026 TaoHeal · 健康免责声明 · 隐私政策 · 服务条款
        </div>
      </div>
    </footer>
  );
}
