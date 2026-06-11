import BodyTypeQuiz from '@/components/tools/BodyTypeQuiz';

export default function QuizPage({ params }: { params: { locale: string } }) {
  return <BodyTypeQuiz locale={params.locale} />;
}
