import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Award, 
  Download, 
  FileCheck, 
  Eye, 
  X,
  ExternalLink
} from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';
import type { Certification } from '../data/portfolioData';

export const CertificationsSection: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  return (
    <section 
      id="certificates" 
      className="py-24 relative border-t transition-colors duration-300"
      style={{
        backgroundColor: 'var(--bg-page)',
        borderColor: 'var(--border-subtle)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-600 dark:text-cyan-300 text-xs font-mono mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIAL INTEGRITY</span>
          </div>
          <h2 
            className="text-3xl sm:text-5xl font-display font-extrabold tracking-tight"
            style={{ color: 'var(--text-primary)' }}
          >
            Verified Industry <span className="text-gradient-cyan">Certifications</span>
          </h2>
          <p 
            className="mt-3 text-sm sm:text-base max-w-2xl"
            style={{ color: 'var(--text-secondary)' }}
          >
            Backed by official credential identifiers and downloadable verifiable documents.
          </p>
        </motion.div>

        {/* Certifications Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {CERTIFICATIONS.map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: idx * 0.12 }}
              whileHover={{ y: -6, rotateZ: 0.5 }}
              className="p-6 sm:p-7 rounded-3xl border flex flex-col justify-between group shadow-xl backdrop-blur-md transition-all duration-300"
              style={{
                backgroundColor: 'var(--bg-card)',
                borderColor: 'var(--border-main)',
                boxShadow: 'var(--panel-shadow)'
              }}
            >
              <div>
                {/* Header */}
                <div 
                  className="flex items-center justify-between pb-3 border-b mb-4"
                  style={{ borderColor: 'var(--border-subtle)' }}
                >
                  <div 
                    className="w-10 h-10 rounded-xl border flex items-center justify-center text-cyan-500 dark:text-cyan-400 group-hover:scale-110 transition-transform"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-accent)'
                    }}
                  >
                    <FileCheck className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono" style={{ color: 'var(--text-muted)' }}>
                    {cert.date}
                  </span>
                </div>

                <h3 
                  className="text-lg font-display font-bold group-hover:text-cyan-500 transition-colors mb-1.5"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {cert.title}
                </h3>

                <p className="text-xs font-mono text-cyan-500 dark:text-cyan-400 font-semibold mb-3">
                  {cert.issuer}
                </p>

                {cert.credentialId && (
                  <div 
                    className="p-2.5 rounded-xl border text-[11px] font-mono mb-4"
                    style={{
                      backgroundColor: 'var(--bg-card-subtle)',
                      borderColor: 'var(--border-subtle)',
                      color: 'var(--text-secondary)'
                    }}
                  >
                    <span className="block text-[9px] uppercase font-semibold" style={{ color: 'var(--text-muted)' }}>
                      Credential ID:
                    </span>
                    <span className="text-cyan-500 dark:text-cyan-300 select-all font-semibold break-all">
                      {cert.credentialId}
                    </span>
                  </div>
                )}

                {/* Skills Learned */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {cert.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2 py-0.5 rounded-md border text-[10px] font-mono"
                      style={{
                        backgroundColor: 'var(--bg-card-subtle)',
                        borderColor: 'var(--border-subtle)',
                        color: 'var(--text-secondary)'
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div 
                className="pt-4 border-t flex items-center justify-between"
                style={{ borderColor: 'var(--border-subtle)' }}
              >
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="flex items-center gap-1.5 text-xs font-mono text-cyan-500 dark:text-cyan-400 hover:text-cyan-600 dark:hover:text-cyan-300 font-medium transition-colors"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview PDF</span>
                </button>

                {cert.downloadPath && (
                  <a
                    href={cert.downloadPath}
                    download
                    className="flex items-center gap-1.5 text-xs font-mono transition-colors hover:text-cyan-500"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download</span>
                  </a>
                )}
              </div>

            </motion.div>
          ))}
        </div>

        {/* Certificate Preview Modal */}
        <AnimatePresence>
          {selectedCert && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                className="relative w-full max-w-4xl h-[85vh] rounded-3xl border shadow-2xl flex flex-col overflow-hidden"
                style={{
                  backgroundColor: 'var(--bg-card)',
                  borderColor: 'var(--border-accent)'
                }}
              >
                {/* Modal Header */}
                <div 
                  className="p-4 px-6 border-b flex items-center justify-between"
                  style={{
                    backgroundColor: 'var(--bg-card-subtle)',
                    borderColor: 'var(--border-subtle)'
                  }}
                >
                  <div>
                    <h3 className="text-base font-display font-bold" style={{ color: 'var(--text-primary)' }}>
                      {selectedCert.title}
                    </h3>
                    <p className="text-xs font-mono text-cyan-500">
                      {selectedCert.issuer} {selectedCert.credentialId ? `· ${selectedCert.credentialId}` : ''}
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    {selectedCert.downloadPath && (
                      <a
                        href={selectedCert.downloadPath}
                        download
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs shadow-glow-cyan hover:opacity-90 transition-all"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                    )}

                    <button
                      onClick={() => setSelectedCert(null)}
                      className="p-1.5 rounded-xl hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
                      style={{ color: 'var(--text-muted)' }}
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* PDF Embed Area */}
                <div className="flex-1 p-2" style={{ backgroundColor: 'var(--bg-page)' }}>
                  {selectedCert.downloadPath ? (
                    <iframe
                      src={selectedCert.downloadPath}
                      title={selectedCert.title}
                      className="w-full h-full rounded-xl border"
                      style={{ borderColor: 'var(--border-subtle)' }}
                    />
                  ) : (
                    <div className="h-full flex items-center justify-center text-sm font-mono" style={{ color: 'var(--text-muted)' }}>
                      Document preview unavailable
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
