const Lookbook = () => {
    return (
        <section className="lookbook-section">
            <h2 className="text-6xl md:text-8xl mb-12 border-b border-[#333333] pb-8 section-header">The Look</h2>

            <div className="lookbook-grid">
                <div className="lookbook-item featured">
                    <img src="/images/editorial-1.jpg" alt="Polished client transformation" />
                </div>

                <div className="lookbook-item">
                    <img src="/images/editorial-2.jpg" alt="Polished client transformation" />
                </div>

                <div className="lookbook-item">
                    <img src="/images/editorial-3.jpg" alt="Polished client transformation" />
                </div>

                <div className="lookbook-item">
                    <img src="/images/editorial-4.jpg" alt="Polished client transformation" />
                </div>

                <div className="lookbook-item">
                    <img src="/images/product-3.jpg" alt="Polished client transformation" />
                </div>
                <div className="lookbook-item">
                    <img src="/images/product-4.jpg" alt="Polished client transformation" />
                </div>
            </div>
        </section>
    );
};

export default Lookbook;
