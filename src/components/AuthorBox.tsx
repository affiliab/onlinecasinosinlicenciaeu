const AuthorBox = () => (
  <section id="autor" className="container py-12">
    <div className="bg-card rounded-xl p-6 card-elevated">
      <div className="flex flex-col sm:flex-row gap-4 items-start">
        <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center text-2xl font-bold text-primary shrink-0">
          JR
        </div>
        <div>
          <h3 className="font-bold text-lg text-foreground">Javier Ríos</h3>
          <p className="text-xs font-caps text-primary mb-2">Analista de casinos online · 8 años de experiencia</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Llevo más de ocho años probando plataformas de juego online. He evaluado personalmente cada casino de esta lista, comprobando sus procesos de registro, la velocidad real de los retiros y la calidad del soporte. Mi objetivo es que tomes decisiones informadas basándote en datos, no en publicidad. Esta guía se actualiza cada mes para reflejar cambios en bonos, políticas de pago y nuevas plataformas.
          </p>
          <p className="text-xs text-muted-foreground mt-2">Última actualización: marzo 2026</p>
        </div>
      </div>
    </div>
  </section>
);

export default AuthorBox;
