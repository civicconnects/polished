const Lookbook = () => {
    return (
        <section className="lookbook-section">
            <h2 className="text-6xl md:text-8xl mb-12 border-b border-[#333333] pb-8 section-header">The Look</h2>

            <div className="lookbook-grid">
                <div className="lookbook-item">
                    <img src="/images/new-bundle-1.jpg" alt="Premium Hair Bundle" />
                    <p className="caption">Premium Hair Bundle</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/new-bundle-2.jpg" alt="Premium Hair Bundle" />
                    <p className="caption">Premium Hair Bundle</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/new-bundle-3.jpg" alt="Premium Hair Bundle" />
                    <p className="caption">Premium Hair Bundle</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/new-bundle-4.jpg" alt="Premium Hair Bundle" />
                    <p className="caption">Premium Hair Bundle</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/new-bundle-5.jpg" alt="Premium Hair Bundle" />
                    <p className="caption">Premium Hair Bundle</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/new-bundle-6.jpg" alt="Premium Hair Bundle" />
                    <p className="caption">Premium Hair Bundle</p>
                </div>
            </div>
        </section>
    );
};

export default Lookbook;
