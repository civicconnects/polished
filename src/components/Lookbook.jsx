const Lookbook = () => {
    return (
        <section className="lookbook-section">
            <h2 className="text-6xl md:text-8xl mb-12 border-b border-[#333333] pb-8 section-header">The Look</h2>

            <div className="lookbook-grid">
                <div className="lookbook-item featured">
                    <img src="/images/lookbook/uploaded_image_0_1768954218907.jpg" alt="uploaded_image_0_1768954218907" />
                    <p className="caption">uploaded_image_0_1768954218907</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/lookbook/uploaded_image_1_1768954218907.jpg" alt="uploaded_image_1_1768954218907" />
                    <p className="caption">uploaded_image_1_1768954218907</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/lookbook/uploaded_image_2_1768954218907.jpg" alt="uploaded_image_2_1768954218907" />
                    <p className="caption">uploaded_image_2_1768954218907</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/lookbook/uploaded_image_3_1768954218907.jpg" alt="uploaded_image_3_1768954218907" />
                    <p className="caption">uploaded_image_3_1768954218907</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/lookbook/natural-india-curly.jpg" alt="Natural India Curly" />
                    <p className="caption">Natural India Curly</p>
                </div>

                <div className="lookbook-item">
                    <img src="/images/lookbook/natural-india-wavy.jpg" alt="Natural India Wavy" />
                    <p className="caption">Natural India Wavy</p>
                </div>
            </div>
        </section>
    );
};

export default Lookbook;
