
import { CaseItem } from '@/types/case';

interface CaseCardProps {
  caseItem: CaseItem;
}

const CaseCard = ({ caseItem }: CaseCardProps) => {
  return (
    <div className="w-full flex-shrink-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 lg:p-12">
        {/* Imagem */}
        <div className="relative order-1 lg:order-1">
          <img 
            src={caseItem.image} 
            alt={caseItem.title}
            className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-2xl"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm font-medium">
              {caseItem.category}
            </span>
          </div>
        </div>

        {/* Conteúdo */}
        <div className="flex flex-col justify-center order-2 lg:order-2">
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-playfair font-bold text-gray-900 mb-3 lg:mb-4">
            {caseItem.title}
          </h3>
          <p className="text-gray-600 mb-4 lg:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed">
            {caseItem.description}
          </p>

          {/* Métricas */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:gap-4 mb-6 lg:mb-8">
            <div className="text-center bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-2 sm:p-3 lg:p-4">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-green-600 mb-1">
                {caseItem.results.revenue}
              </div>
              <div className="text-xs sm:text-sm text-green-700">Faturamento</div>
            </div>
            <div className="text-center bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-2 sm:p-3 lg:p-4">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-blue-600 mb-1">
                {caseItem.results.leads}
              </div>
              <div className="text-xs sm:text-sm text-blue-700">Leads</div>
            </div>
            <div className="text-center bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-2 sm:p-3 lg:p-4">
              <div className="text-lg sm:text-xl lg:text-2xl font-bold text-purple-600 mb-1">
                {caseItem.results.roi}
              </div>
              <div className="text-xs sm:text-sm text-purple-700">ROI</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseCard;
