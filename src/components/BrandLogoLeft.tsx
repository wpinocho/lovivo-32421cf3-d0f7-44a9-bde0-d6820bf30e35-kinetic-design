export const BrandLogoLeft = () => {
  return (
    <a href="/" aria-label="Home" className="ml-2 flex items-center">
      <img 
        src="/logo.jpg" 
        alt="KINETIC"
        className="h-7 w-auto object-contain brightness-0 invert" 
        onError={(e) => {
          e.currentTarget.style.display = 'none';
          e.currentTarget.parentElement!.innerHTML = '<span class="text-xl font-bold tracking-widest text-white">KINETIC</span>';
        }}
      />
    </a>
  )
}