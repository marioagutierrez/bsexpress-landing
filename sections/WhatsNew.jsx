'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { NewFeatures, TitleText, TypingText } from '../components';
import { planetVariants, staggerContainer, fadeIn } from '../utils/motion';

const features = [
  {
    imgUrl: '/currency.svg',
    title: 'Múltiples Monedas',
    subtitle: 'Cambia USD, EUR, GBP, ARS, COP, CLP y PEN a Bolívares con las mejores tasas del mercado',
  },
  {
    imgUrl: '/lock.svg',
    title: 'Pagos Seguros',
    subtitle: 'Múltiples métodos de pago verificados y transferencias bancarias protegidas',
  },
  {
    imgUrl: '/support.svg',
    title: 'Atención 24/7',
    subtitle: 'Soporte técnico disponible todos los días para resolver tus dudas inmediatamente',
  },
  {
    imgUrl: '/speed.svg',
    title: 'Transferencias Rápidas',
    subtitle: 'Recibe tus Bolívares en minutos en cualquier banco de Venezuela',
  },
];

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn('right', 'tween', 0.2, 1)}
        className="flex-[0.95] flex justify-center flex-col"
      >
        <TypingText title="| Ventajas BsXpress" />
        <TitleText title={<>¿Por qué elegirnos?</>} />
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {features.map((feature) => (
            <NewFeatures key={feature.title} {...feature} />
          ))}
        </div>
      </motion.div>

      <motion.div
        variants={planetVariants('right')}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="/mockup.svg"
          alt="características"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
