export default function DisclaimerPage({ params }: { params: { locale: string } }) {
  const locale = params.locale;
  const isZh = locale === 'zh';

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">
        {isZh ? '健康免责声明' : 'Health Disclaimer'}
      </h1>

      <div className="prose max-w-none text-gray-700 space-y-6">
        <p>
          {isZh
            ? 'TaoHeal 平台提供的所有内容仅供健康信息和教育目的，不构成医疗建议、诊断或治疗。'
            : 'All content on TaoHeal is for informational and educational purposes only and does not constitute medical advice, diagnosis, or treatment.'}
        </p>

        <p>
          {isZh
            ? '在使用本平台内容前，请咨询您的医生或其他合格医疗专业人员。不要因为本平台内容而忽视专业医疗建议或延迟寻求治疗。'
            : 'Before using any content from this platform, please consult your doctor or other qualified medical professionals. Do not disregard professional medical advice or delay seeking treatment.'}
        </p>

        <p>
          {isZh
            ? '如有任何健康疑虑，请立即就医。'
            : 'If you have any health concerns, please seek medical attention immediately.'}
        </p>

        <p>
          {isZh
            ? '本平台不对用户因使用或依赖本平台内容而产生的任何直接或间接损失负责。'
            : 'The platform is not responsible for any direct or indirect losses arising from your use or reliance on the platform content.'}
        </p>
      </div>
    </div>
  );
}
