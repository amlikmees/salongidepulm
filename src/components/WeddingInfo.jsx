import "./WeddingInfo.css";

function WeddingInfo() {
    return (
        <section id="info" className="wedding-info">
            <div className="wedding-info-container">

                <h2>ME ABIELLUME!</h2>

                <p className="wedding-description">
                    Meil on nii hea meel, et oled jõudnud meie pulmalehele. Ootame sind meie erilist päeva tähistama. Siit leiad esialgse olulise info, kuid mõne aja pärast jõuab sinuni ka päris kutse ning ka siia lehele lisandub detailsemat infot meie pulmapäeva kohta.
                </p>

                <p className="wedding-note">
                    Ps! Pidu jätkub järgmisel päeval Kristeli vanemate juures,
                    nii et jäta kohe heaga nädalalõpp vabaks!
                </p>

                <div className="wedding-details">

                    <div className="detail">
                        <h3>Kuupäev</h3>
                        <p>
                            1. juuli 2027<br />
                            Neljapäev
                        </p>
                    </div>

                    <div className="detail">
                        <h3>Kellaaeg</h3>
                        <p>Täpsustamisel</p>
                    </div>

                    <div className="detail">
                        <h3>Asukoht</h3>
                        <p>
                            La Rahtla küün<br />
                            Saaremaa
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default WeddingInfo;