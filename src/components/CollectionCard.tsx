import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { type Collection } from '@/lib/supabase'

interface CollectionCardProps {
  collection: Collection
  onViewProducts: (collectionId: string) => void
}

export const CollectionCard = ({ collection, onViewProducts }: CollectionCardProps) => {
  return (
    <Card className="glass-card hover-glow bg-card/50 border-white/10 overflow-hidden group cursor-pointer" onClick={() => onViewProducts(collection.id)}>
      <CardContent className="p-0">
        <div className="aspect-[4/3] bg-black/40 overflow-hidden relative">
          {collection.image ? (
            <img 
              src={collection.image} 
              alt={collection.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-muted-foreground text-sm font-mono">
              NO IMAGE
            </div>
          )}
          {collection.featured && (
            <span className="absolute top-3 left-3 bg-accent text-accent-foreground text-xs px-2 py-1 font-mono font-bold tracking-wider">
              FEATURED
            </span>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-foreground font-bold text-lg line-clamp-1 uppercase tracking-wider mb-2">
            {collection.name}
          </h3>
          
          {collection.description && (
            <p className="text-muted-foreground text-xs mb-4 line-clamp-2 font-mono">
              {collection.description}
            </p>
          )}
          
          <Button 
            variant="outline" 
            className="w-full border-white/20 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent font-mono text-xs tracking-wider"
          >
            EXPLORE
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}