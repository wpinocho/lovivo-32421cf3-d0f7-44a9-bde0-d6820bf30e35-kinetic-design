import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { HeadlessNewsletter } from '@/components/headless/HeadlessNewsletter';
import { Mail } from 'lucide-react';

/**
 * EDITABLE UI COMPONENT - NewsletterSection
 * 
 * Componente UI completamente editable para suscripción a newsletter.
 * El agente IA puede modificar colores, textos, layout, etc.
 * 
 * Consume lógica de HeadlessNewsletter (solo muestra email input).
 */

export const NewsletterSection = () => {
  return (
    <HeadlessNewsletter>
      {(logic) => (
        <section className="bg-[#09090b] py-20 border-y border-white/10">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            {logic.success ? (
              <div className="space-y-4">
                <div className="flex justify-center">
                  <div className="glass-card p-4 rounded-full">
                    <Mail className="h-8 w-8 text-accent" />
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-foreground tracking-wider uppercase">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="text-muted-foreground font-mono text-sm">
                  You're now connected to KINETIC updates.
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-3xl md:text-4xl font-bold text-foreground tracking-wider uppercase">
                    STAY CONNECTED
                  </h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    Exclusive releases. Technical updates. Early access.
                  </p>
                </div>
                
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    logic.handleSubscribe();
                  }}
                  className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                >
                  <Input 
                    type="email"
                    placeholder="YOUR@EMAIL.COM"
                    value={logic.email}
                    onChange={(e) => logic.setEmail(e.target.value)}
                    disabled={logic.isSubmitting}
                    className="flex-1 glass-card bg-black/40 border-white/20 text-white placeholder:text-white/30 font-mono text-sm focus:border-accent"
                    required
                  />
                  <Button 
                    type="submit"
                    disabled={logic.isSubmitting}
                    className="sm:w-auto bg-accent hover:bg-accent/80 text-accent-foreground font-mono font-bold tracking-wider"
                  >
                    {logic.isSubmitting ? 'SENDING...' : 'SUBSCRIBE'}
                  </Button>
                </form>
                
                {logic.error && (
                  <p className="text-sm text-destructive font-mono">
                    {logic.error}
                  </p>
                )}
              </div>
            )}
          </div>
        </section>
      )}
    </HeadlessNewsletter>
  );
};