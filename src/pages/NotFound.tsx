import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, Search, ArrowLeft } from "lucide-react";

const NotFound = () => (
  <Layout>
    <div className="hero-gradient min-h-[70vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container text-center py-20"
      >
        {/* Big 404 */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative inline-block mb-8"
        >
          <span className="text-[120px] sm:text-[180px] font-black leading-none text-gradient-gold select-none">
            404
          </span>
          <div className="absolute inset-0 blur-3xl opacity-20 bg-primary rounded-full" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-2xl sm:text-3xl font-bold text-foreground mb-4"
        >
          Página no encontrada
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-muted-foreground mb-10 max-w-lg mx-auto text-base sm:text-lg leading-relaxed"
        >
          Lo sentimos, la página que buscas no existe o ha sido movida.
          Puede que hayas seguido un enlace incorrecto o que la dirección haya cambiado.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold px-8 py-3.5 rounded-xl text-sm hover:brightness-110 transition-all duration-200 shadow-lg shadow-primary/25"
          >
            <Home className="w-4 h-4" />
            Ir a la página principal
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 border border-border text-foreground font-bold px-8 py-3.5 rounded-xl text-sm hover:bg-white/5 transition-all duration-200"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver atrás
          </button>
        </motion.div>
      </motion.div>
    </div>
  </Layout>
);

export default NotFound;
