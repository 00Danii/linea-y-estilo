export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-transparent to-accent/10 py-20 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-balance">
            Descubre nuestros
            <span className="block bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Catálogos Exclusivos
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestras categorías y descarga los catálogos en PDF para ver toda nuestra colección de productos.
          </p>
          <div className="pt-4">
            <div className="inline-flex gap-2 px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30">
              <span className="text-sm font-medium text-foreground">✨ Nuevos catálogos disponibles</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
