export default function PrivacyPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const isZh = locale === 'zh';

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isZh ? '隐私政策' : 'Privacy Policy'}
      </h1>

      <div className="prose max-w-none text-gray-700 space-y-4">
        <p>
          {isZh
            ? 'TaoHeal 尊重并保护所有用户的个人隐私。'
            : 'TaoHeal respects and protects the privacy of all users.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '1. 信息收集' : '1. Information Collection'}
        </h2>
        <p>
          {isZh
            ? '我们仅在您主动提供的情况下收集信息，包括邮箱地址（用于订阅）和体质测试结果（如果您选择保存）。'
            : 'We only collect information when you voluntarily provide it, including email addresses (for subscriptions) and body type quiz results (if you choose to save).'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '2. 信息使用' : '2. Information Usage'}
        </h2>
        <p>
          {isZh
            ? '您的信息仅用于发送平台相关内容和改进用户体验。'
            : 'Your information is only used to send platform-related content and improve user experience.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '3. 信息保护' : '3. Information Protection'}
        </h2>
        <p>
          {isZh
            ? '我们采取合理的安全措施保护您的个人信息，包括数据加密和访问控制。'
            : 'We take reasonable security measures to protect your personal information, including data encryption and access control.'}
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          {isZh ? '4. Cookie 使用' : '4. Cookie Usage'}
        </h2>
        <p>
          {isZh
            ? '我们使用 Cookie 来记住您的语言偏好设置。'
            : 'We use cookies to remember your language preference settings.'}
        </p>
      </div>
    </div>
  );
}
