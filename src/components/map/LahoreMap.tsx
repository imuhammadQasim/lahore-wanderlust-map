import { useMemo, useEffect } from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { attractions, LAHORE_CENTER, LAHORE_ZOOM } from '@/data/lahore-attractions';
import { useMapStore } from '@/store/map-store';
import { LahoreBoundary } from './LahoreBoundary';
import { MapMarkers } from './MapMarkers';
import { FilterChips } from './FilterChips';
import { SearchInput } from './SearchInput';
import { DetailSidebar } from './DetailSidebar';

function getDistance(lat1: number, lng1: number, lat2: number, lng2: number) {
  const R = 6371;
  const dLat = ((lat2 - lat1) * Math.PI) / 180;
  const dLng = ((lng2 - lng1) * Math.PI) / 180;
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos((lat1 * Math.PI) / 180) * Math.cos((lat2 * Math.PI) / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function MapController() {
  const map = useMap();
  const { selectedAttraction } = useMapStore();

  useEffect(() => {
    if (selectedAttraction) {
      map.flyTo([selectedAttraction.lat, selectedAttraction.lng], 15, { duration: 0.8 });
    }
  }, [selectedAttraction, map]);

  return null;
}

export function LahoreMap() {
  const { activeFilters, searchQuery, selectedAttraction, showNearby } = useMapStore();

  const filteredAttractions = useMemo(() => {
    let result = attractions.filter((a) => activeFilters.includes(a.type));

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.address?.toLowerCase().includes(q)
      );
    }

    // If showing nearby, add nearby items of the selected type
    if (showNearby && selectedAttraction) {
      const nearby = attractions
        .filter((a) => a.type === showNearby)
        .map((a) => ({
          ...a,
          distance: getDistance(selectedAttraction.lat, selectedAttraction.lng, a.lat, a.lng),
        }))
        .sort((a, b) => a.distance - b.distance)
        .slice(0, 5);

      const nearbyIds = new Set(nearby.map((n) => n.id));
      result = [
        ...result.filter((a) => !nearbyIds.has(a.id)),
        ...nearby,
      ];
    }

    return result;
  }, [activeFilters, searchQuery, showNearby, selectedAttraction]);

  return (
    <div className="relative w-full h-screen">
      <MapContainer
        center={LAHORE_CENTER}
        zoom={LAHORE_ZOOM}
        className="w-full h-full"
        zoomControl={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://carto.com/">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <LahoreBoundary />
        <MapMarkers attractions={filteredAttractions} />
        <MapController />
      </MapContainer>

      {/* Top bar with search & filters */}
      <div className="absolute top-4 right-4 z-[1000] flex items-start gap-3 pointer-events-none transition-all duration-300"
           style={{ left: selectedAttraction ? '376px' : '16px' }}>
        <div className="pointer-events-auto flex flex-col gap-3 w-full max-w-md">
          <SearchInput />
          <FilterChips />
        </div>
      </div>

      {/* Detail Sidebar */}
      <DetailSidebar />
    </div>
  );
}
