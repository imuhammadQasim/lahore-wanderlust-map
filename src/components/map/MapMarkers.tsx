import { Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import type { Attraction } from '@/data/lahore-attractions';
import { typeColors } from '@/data/lahore-attractions';
import { useMapStore } from '@/store/map-store';
import { Clock, MapPin, Star } from 'lucide-react';

function createIcon(type: Attraction['type'], isActive: boolean) {
  const color = typeColors[type];
  const size = isActive ? 36 : 28;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="${color}" stroke="white" stroke-width="1.5">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
    <circle cx="12" cy="10" r="3" fill="white" stroke="${color}" stroke-width="1.5"/>
  </svg>`;
  return L.divIcon({
    html: `<div class="${isActive ? 'marker-active' : ''}" style="display:flex;align-items:center;justify-content:center;">${svg}</div>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size],
    popupAnchor: [0, -size],
    className: '',
  });
}

interface MapMarkersProps {
  attractions: Attraction[];
}

export function MapMarkers({ attractions }: MapMarkersProps) {
  const { selectedAttraction, setSelectedAttraction } = useMapStore();

  return (
    <>
      {attractions.map((a) => (
        <Marker
          key={a.id}
          position={[a.lat, a.lng]}
          icon={createIcon(a.type, selectedAttraction?.id === a.id)}
          eventHandlers={{
            click: () => setSelectedAttraction(a),
          }}
        >
          <Popup>
            <div className="p-3 min-w-[200px]">
              <p className="text-sm font-semibold text-foreground">{a.name}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-relaxed">{a.description}</p>
              {a.hours && (
                <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span className="font-mono">{a.hours}</span>
                </div>
              )}
              {a.address && (
                <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>{a.address}</span>
                </div>
              )}
              {a.rating && (
                <div className="flex items-center gap-1 mt-1 text-xs">
                  <Star className="w-3 h-3 fill-heritage text-heritage" />
                  <span className="font-mono font-medium">{a.rating}</span>
                </div>
              )}
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

