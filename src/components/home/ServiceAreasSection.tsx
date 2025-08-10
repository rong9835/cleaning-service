import { CheckIcon } from '@heroicons/react/20/solid';

export default function ServiceAreasSection() {
  const serviceAreas = {
    'South/\nSouth-Western Sydney': [
      'Liverpool',
      'Campbelltown',
      'Bankstown',
      'Fairfield',
      'Hurstville',
      'Canterbury',
      'Sutherland',
      'Kogarah',
      'Casula',
      'Revesby',
    ],
    'Western/\nCentral Sydney': [
      'Parramatta',
      'Blacktown',
      'Penrith',
      'Westmead',
      'Castle Hill',
      'Ryde',
      'Baulkham Hills',
      'Homebush',
      'Wentworthville',
      'Kellyville',
    ],
    'Eastern/\nNorthern Sydney': [
      'Bondi',
      'Manly',
      'Chatswood',
      'North Sydney',
      'Randwick',
      'Cronulla',
      'Mosman',
      'Double Bay',
      'Maroubra',
      'Hornsby',
    ],
  };

  return (
    <section id="ServiceArea" className="py-16">
      <div className="w-full max-w-sm sm:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-12 text-gray-900">
          Sydney Cleaning Service Areas
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(serviceAreas).map(([region, areas]) => (
            <div key={region} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-6 text-gray-900 whitespace-pre-line border-b border-gray-200 pb-4">
                {region}
              </h3>
              <ul className="space-y-3">
                {areas.map((area) => (
                  <li key={area} className="flex items-center">
                    <CheckIcon className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
