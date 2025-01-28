import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

const Link = ({ to, label }: { to: string; label: string }): JSX.Element => (
  <NavLink to={to} className="relative rounded-full px-3.5 py-1">
    {({ isActive }) => (
      <>
        {isActive && (
          <motion.div
            layoutId="highlight"
            className="absolute inset-0 bg-red-200 rounded-full border"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
        <span className="relative z-10 font-bold">{label}</span>
      </>
    )}
  </NavLink>
);

export default Link;
