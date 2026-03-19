import { useMapStore } from '@/store/map-store';
import { typeLabels, typeColors, type AttractionType } from '@/data/lahore-attractions';
import { Landmark, UtensilsCrossed, Hotel } from 'lucide-react';

const typeIcons: Record<AttractionType, React.ElementType> = {
  heritage: Landmark,
  food: UtensilsCrossed,
  hotel: Hotel,
};

const types: AttractionType[] = ['heritage', 'food', 'hotel'];

export function FilterChips() {
  const { activeFilters, toggleFilter } = useMapStore();

  return (
    <div className="flex gap-2">
      {types.map((type) => {
        const Icon = typeIcons[type];
        const isActive = activeFilters.includes(type);
        const color = typeColors[type];
        return (
          <button
            key={type}
            onClick={() => toggleFilter(type)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-150"
            style={{
              background: isActive ? color : 'rgba(255,255,255,0.85)',
              color: isActive ? 'white' : 'hsl(224 71% 4%)',
              backdropFilter: 'blur(12px)',
              boxShadow: isActive
                ? `0 2px 8px ${color}40`
                : '0 0 0 1px rgba(0,0,0,.08), 0 1px 3px rgba(0,0,0,.06)',
            }}
          >
            <Icon className="w-3.5 h-3.5" strokeWidth={1.5} />
            {typeLabels[type]}
          </button>
        );
      })}
    </div>
  );
}
