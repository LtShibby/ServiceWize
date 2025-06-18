interface FeatureCardProps {
  title: string;
  description: string;
  icon: any;
  iconBgColor: string;
  iconColor: string;
}

export default function FeatureCard({ 
  title, 
  description, 
  icon: Icon, 
  iconBgColor, 
  iconColor 
}: FeatureCardProps) {
  return (
    <div className="text-center p-6 rounded-lg hover:shadow-lg transition duration-300">
      <div className={`${iconBgColor} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}>
        <Icon className={`w-8 h-8 ${iconColor}`} />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
} 