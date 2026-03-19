import { Search } from 'lucide-react';
import { useMapStore } from '@/store/map-store';

export function SearchInput() {
  const { searchQuery, setSearchQuery } = useMapStore();

  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" strokeWidth={1.5} />
      <input
        type="text"
        placeholder="Search attractions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="h-10 w-full pl-9 pr-4 rounded-lg border-0 text-sm font-medium bg-card text-foreground placeholder:text-muted-foreground shadow-sm ring-1 ring-border focus:ring-2 focus:ring-primary focus:outline-none transition-shadow"
      />
    </div>
  );
}

