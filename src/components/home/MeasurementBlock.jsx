import { motion } from 'framer-motion';
import { FiTool } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const MeasurementBlock = () => {
  return (
    <section id="measurement-block" className="py-16 bg-secondary text-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-center justify-between"
        >
          <div className="mb-8 md:mb-0 md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold font-serif mb-4">
              Mensurations en ligne
            </h2>
            <p className="text-white/80 mb-6 max-w-lg">
              Pour garantir que vos vêtements Khalil Collection vous vont parfaitement, 
              nous vous proposons notre service de mensurations en ligne. 
              Suivez notre guide simple et obtenez des vêtements sur mesure.
            </p>
            <Link to="/mensurations" className="btn bg-primary hover:bg-primary/90 text-white flex items-center space-x-2">
              <FiTool size={20} />
              <span>Je prends mes mesures</span>
            </Link>
          </div>
          
          <div className="md:w-5/12">
            <div className="bg-white/10 p-6 rounded-sm">
              <h3 className="text-xl font-medium mb-4 text-primary">
                Pourquoi prendre vos mesures ?
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Vêtements parfaitement ajustés à votre morphologie</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Confort optimal pour toutes vos tenues</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Évitez les retours et les ajustements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Service gratuit pour tous nos clients</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MeasurementBlock;
