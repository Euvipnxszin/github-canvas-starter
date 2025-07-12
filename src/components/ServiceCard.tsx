
import { CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  shortDescription: string;
  features: string[];
  detailedInfo: string;
  color: string;
  buttonColor: string;
  additionalFeatures?: string[];
}

const ServiceCard = ({ 
  icon, 
  title, 
  shortDescription, 
  features, 
  detailedInfo, 
  color, 
  buttonColor,
  additionalFeatures = []
}: ServiceCardProps) => {
  const allFeatures = [...features, ...additionalFeatures];
  
  return (
    <div className="bg-white rounded-2xl p-8 shadow-lg hover-lift border border-gray-100 group hover:border-purple-200 transition-all duration-500">
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      
      <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4 group-hover:text-purple-600 transition-colors duration-300">
        {title}
      </h3>
      
      <p className="text-gray-600 mb-6 leading-relaxed text-lg">
        {shortDescription}
      </p>
      
      <div className="space-y-3 mb-6">
        <h4 className="font-bold text-gray-900 mb-3">Principais benefícios:</h4>
        {features.slice(0, 2).map((feature, featureIndex) => (
          <div key={featureIndex} className="flex items-center">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            <span className="text-gray-700">{feature}</span>
          </div>
        ))}
      </div>

      <Dialog>
        <DialogTrigger asChild>
          <Button className={`w-full ${buttonColor} text-white font-semibold py-3 px-6 rounded-xl btn-hover`}>
            Mais Informações
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${color} flex items-center justify-center mb-4`}>
              {icon}
            </div>
            <DialogTitle className="text-2xl font-playfair font-bold text-gray-900">
              {title}
            </DialogTitle>
            <DialogDescription className="text-lg text-gray-600 leading-relaxed">
              {detailedInfo.includes('\n\n') ? (
                <div>
                  <div className="font-bold text-xl text-gray-900 mb-4">
                    {detailedInfo.split('\n\n')[0]}
                  </div>
                  <div>
                    {detailedInfo.split('\n\n')[1]}
                  </div>
                </div>
              ) : (
                detailedInfo
              )}
            </DialogDescription>
          </DialogHeader>
          
          <div className="mt-6">
            <h4 className="font-bold text-gray-900 mb-4 text-lg">O que está incluso:</h4>
            <div className="space-y-3">
              {allFeatures.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={`mt-8 p-4 ${buttonColor === 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' ? 'bg-gradient-to-r from-orange-50 to-red-50 border-orange-200' : 'bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200'} rounded-xl border`}>
            <p className="text-center text-gray-700 font-medium">
              {buttonColor === 'bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600' 
                ? 'Interessado neste serviço? Entre em contato conosco para uma consulta personalizada!'
                : 'Interessado neste serviço? Entre em contato conosco para uma demonstração!'
              }
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ServiceCard;
