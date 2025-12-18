import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { HeadlessProductCard } from "@/components/headless/HeadlessProductCard"
import type { Product } from "@/lib/supabase"

/**
 * EDITABLE UI COMPONENT - ProductCardUI
 * 
 * Este componente solo maneja la presentación del ProductCard.
 * Toda la lógica viene del HeadlessProductCard.
 * 
 * PUEDES MODIFICAR LIBREMENTE:
 * - Colores, temas, estilos
 * - Textos e idioma
 * - Layout y estructura visual
 * - Animaciones y efectos
 * - Agregar features visuales (hover effects, etc.)
 */

interface ProductCardUIProps {
  product: Product
}

export const ProductCardUI = ({ product }: ProductCardUIProps) => {
  return (
    <HeadlessProductCard product={product}>
      {(logic) => (
        <Card className="glass-card hover-glow bg-card/50 border-white/10 overflow-hidden group">
          <CardContent className="p-0">
            <Link to={`/products/${logic.product.slug}`} className="block">
              <div className="aspect-square bg-black/40 overflow-hidden relative">
                {(logic.matchingVariant?.image || (logic.product.images && logic.product.images.length > 0)) ? (
                  <img
                    src={(logic.matchingVariant?.image as any) || logic.product.images![0]}
                    alt={logic.product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    No image
                  </div>
                )}

                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-1">
                  {logic.discountPercentage && (
                    <span className="bg-accent text-accent-foreground text-xs px-2 py-1 font-mono font-bold tracking-wider">
                      -{logic.discountPercentage}%
                    </span>
                  )}
                  {logic.product.featured && (
                    <span className="bg-accent text-accent-foreground text-xs px-2 py-1 font-mono font-bold tracking-wider">
                      FLAGSHIP
                    </span>
                  )}
                  {!logic.inStock && (
                    <span className="bg-muted text-muted-foreground text-xs px-2 py-1 font-mono font-bold tracking-wider">
                      OUT OF STOCK
                    </span>
                  )}
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-foreground font-semibold text-sm mb-1 line-clamp-2 tracking-wide uppercase">
                  {logic.product.title}
                </h3>
                {logic.product.description && (
                  <p className="text-muted-foreground text-xs mb-3 line-clamp-2 font-mono">
                    {logic.product.description.replace(/<[^>]*>/g, '')}
                  </p>
                )}
              </div>
            </Link>

            {logic.hasVariants && logic.options && (
              <div className="px-4 mb-3 space-y-2">
                {logic.options.map((opt) => (
                  <div key={opt.id}>
                    <div className="text-xs font-mono text-muted-foreground mb-1 tracking-wider">{opt.name}</div>
                    <div className="flex flex-wrap gap-2">
                      {opt.values.filter(val => logic.isOptionValueAvailable(opt.name, val)).map((val) => {
                        const isSelected = logic.selected[opt.name] === val
                        const swatch = opt.name.toLowerCase() === 'color' ? opt.swatches?.[val] : undefined

                        if (swatch) {
                          return (
                            <button
                              key={val}
                              type="button"
                              onClick={() => logic.handleOptionChange(opt.name, val)}
                              title={`${opt.name}: ${val}`}
                              className={`h-6 w-6 rounded-full border-2 ${
                                isSelected ? 'border-accent' : 'border-white/20'
                              } ${logic.selected[opt.name] && !isSelected ? 'opacity-40' : ''}`}
                              style={{ backgroundColor: swatch }}
                              aria-label={`${opt.name}: ${val}`}
                            />
                          )
                        }

                        return (
                          <button
                            key={val}
                            type="button"
                            onClick={() => logic.handleOptionChange(opt.name, val)}
                            className={`border px-2 py-1 text-xs font-mono tracking-wider transition-all ${
                              isSelected 
                                ? 'border-accent bg-accent text-accent-foreground' 
                                : logic.selected[opt.name] && !isSelected
                                  ? 'border-white/10 bg-transparent text-muted-foreground opacity-40'
                                  : 'border-white/20 bg-transparent text-foreground hover:border-white/40'
                            }`}
                            aria-pressed={isSelected}
                            aria-label={`${opt.name}: ${val}`}
                            title={`${opt.name}: ${val}`}
                          >
                            {val}
                          </button>
                        )
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="flex items-center justify-between px-4 pb-4">
              <div className="flex flex-col">
                <span className="text-foreground font-bold text-lg font-mono">
                  ${logic.currentPrice}
                </span>
                {logic.currentCompareAt && logic.currentCompareAt > logic.currentPrice && (
                  <span className="text-muted-foreground text-xs line-through font-mono">
                    ${logic.currentCompareAt}
                  </span>
                )}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  logic.onAddToCartSuccess()
                  logic.handleAddToCart()
                }}
                disabled={!logic.canAddToCart}
                className="border-white/20 text-foreground hover:border-accent hover:bg-accent/10 hover:text-accent disabled:opacity-30 font-mono text-xs tracking-wider"
              >
                {logic.inStock ? 'ADD' : 'OUT OF STOCK'}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </HeadlessProductCard>
  )
}