export default function TermsPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const isZh = locale === 'zh';

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isZh ? '服务条款' : 'Terms of Service'}
      </h1>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          {isZh
            ? '欢迎使用 TaoHeal。使用本平台即表示您同意以下条款。'
            : 'Welcome to TaoHeal. By using this platform, you agree to the following terms.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '1. 内容使用' : '1. Content Usage'}
        </h2>
        <p>
          {isZh
            ? '本平台内容仅供个人学习和参考，不得用于商业目的。'
            : 'Content on this platform is for personal learning and reference only and may not be used for commercial purposes.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '2. 用户责任' : '2. User Responsibility'}
        </h2>
        <p>
          {isZh
            ? '用户需为自己的行为负责，不得发布违法、虚假或有害内容。'
            : 'Users are responsible for their own actions and may not post illegal, false, or harmful content.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '3. 知识产权' : '3. Intellectual Property'}
        </h2>
        <p>
          {isZh
            ? '本平台的所有内容，包括文字、图片、设计，均受版权保护。'
            : 'All content on this platform, including text, images, and design, is protected by copyright.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '4. 免责声明' : '4. Disclaimer'}
        </h2>
        <p>
          {isZh
            ? '本平台按"现状"提供，不对内容的准确性、完整性或及时性做任何保证。'
            : 'The platform is provided "as is" and we make no warranties about the accuracy, completeness, or timeliness of the content.'}
        </p>
      </div>
    </div>
  );
}
