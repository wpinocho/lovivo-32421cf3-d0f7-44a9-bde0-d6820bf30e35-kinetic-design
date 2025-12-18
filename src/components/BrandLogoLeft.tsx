export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center group">
      <div className="flex items-center gap-2">
        {/* Logo Icon */}
        <div className="relative">
          <div className="w-8 h-8 border-2 border-accent rotate-45 transition-transform group-hover:rotate-[60deg] duration-500" />
          <div className="absolute inset-0 w-8 h-8 border-2 border-white/20 rotate-45 blur-sm" />
        </div>
        
        {/* Brand Name */}
        <span className="text-xl font-bold tracking-[0.3em] text-white uppercase">
          KINETIC
        </span>
      </div>
    </a>
  )
}