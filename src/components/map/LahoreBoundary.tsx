import { Polygon } from 'react-leaflet';
import { LAHORE_BOUNDARY } from '@/data/lahore-attractions';

export function LahoreBoundary() {
  return (
    <Polygon
      positions={LAHORE_BOUNDARY}
      pathOptions={{
        color: '#059669',
        weight: 2,
        dashArray: '5, 10',
        fillOpacity: 0.05,
        fillColor: '#059669',
      }}
    />
  );
}

