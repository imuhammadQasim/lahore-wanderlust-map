import { motion, AnimatePresence } from 'framer-motion';
import { useMapStore } from '@/store/map-store';
import { typeColors, typeLabels } from '@/data/lahore-attractions';
import { X, Clock, MapPin, Star, UtensilsCrossed, Hotel } from 'lucide-react';

export function DetailSidebar() {
  const { selectedAttraction, setSelectedAttraction, setShowNearby, showNearby } = useMapStore();

  return (
    <AnimatePresence>
      {selectedAttraction && (
        <motion.div
          initial={{ x: -360, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -360, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="absolute top-0 left-0 bottom-0 w-[360px] z-[1000] bg-card/95 backdrop-blur-md shadow-card overflow-hidden flex flex-col"
          style={{ boxShadow: 'var(--card-shadow)' }}
        >
          {/* Header */}
          <div className="p-5 border-b border-border">
            <div className="flex items-start justify-between">
              <div className="flex-1 pr-3">
                <span
                  className="inline-block px-2 py-0.5 rounded text-[10px] font-semibold uppercase tracking-wider mb-2"
                  style={{
                    background: typeColors[selectedAttraction.type] + '18',
                    color: typeColors[selectedAttraction.type],
                  }}
                >
                  {typeLabels[selectedAttraction.type]}
                </span>
                <h2 className="text-lg font-semibold tracking-tight text-foreground leading-tight" style={{ textWrap: 'balance' }}>
                  {selectedAttraction.name}
                </h2>
              </div>
              <button
                onClick={() => setSelectedAttraction(null)}
                className="p-1.5 rounded-md hover:bg-secondary transition-colors"
              >
                <X className="w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
              </button>
            </div>

            {/* Meta */}
            <div className="flex flex-wrap gap-3 mt-3">
              {selectedAttraction.rating && (
                <div className="flex items-center gap-1 text-xs">
                  <Star className="w-3.5 h-3.5 fill-heritage text-heritage" />
                  <span className="font-mono font-medium">{selectedAttraction.rating}</span>
                </div>
              )}
              {selectedAttraction.hours && (
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="w-3.5 h-3.5" strokeWidth={1.5} />
                  <span className="font-mono">{selectedAttraction.hours}</span>
                </div>
              )}
            </div>
            {selectedAttraction.address && (
              <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>{selectedAttraction.address}</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto sidebar-scroll p-5 space-y-4">
            <p className="text-sm text-foreground leading-relaxed">
              {selectedAttraction.description}
            </p>

            {selectedAttraction.history && (
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-2">History</h3>
                <p className="text-sm text-foreground leading-relaxed">{selectedAttraction.history}</p>
              </div>
            )}

            {/* Nearby Actions */}
            {selectedAttraction.type === 'heritage' && (
              <div className="space-y-2 pt-2">
                <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Find Nearby</h3>
                <div className="flex gap-2">
                  <button
                    onClick={() => setShowNearby(showNearby === 'food' ? null : 'food')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: showNearby === 'food' ? '#059669' : 'hsl(210 20% 96%)',
                      color: showNearby === 'food' ? 'white' : 'hsl(224 71% 4%)',
                    }}
                  >
                    <UtensilsCrossed className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Restaurants
                  </button>
                  <button
                    onClick={() => setShowNearby(showNearby === 'hotel' ? null : 'hotel')}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-medium transition-all"
                    style={{
                      background: showNearby === 'hotel' ? '#4F46E5' : 'hsl(210 20% 96%)',
                      color: showNearby === 'hotel' ? 'white' : 'hsl(224 71% 4%)',
                    }}
                  >
                    <Hotel className="w-3.5 h-3.5" strokeWidth={1.5} />
                    Hotels
                  </button>
                </div>
              </div>
            )}

            {/* Coordinates */}
            <div className="pt-2 border-t border-border">
              <p className="text-xs font-mono text-muted-foreground tabular-nums">
                {selectedAttraction.lat.toFixed(4)}°N, {selectedAttraction.lng.toFixed(4)}°E
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

