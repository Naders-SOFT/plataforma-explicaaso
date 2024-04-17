import React from 'react';
import styles from './ContactForm.module.css'; // Importando estilos CSS em módulos

function ContactForm() {
  return (
    <div className={styles.contactContainer}>
      <div className={styles.contactForm}>
        <h2>Entre em contato</h2>
        <p>
          Ficamos felizes em ouvir de você!
          <br />
          Se você tem alguma dúvida, sugestão ou  apenas quer dizer "olá",
          <br />
          não hesite em nos contatar.
          <br />
          Preencha o formulário abaixo
          <br />
          e entraremos em contato o mais breve possível.
        </p>
        <form>
          <div className={styles.contactInfo}>
            <div className={styles.info}>
              <label htmlFor="name">Nome</label>
              <input type="text" id="name" name="name" required className={styles.inputField} />
            </div>
            <div className={styles.info}>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required className={styles.inputField} />
            </div>
          </div>
          <label htmlFor="message">Mensagem</label>
          <textarea id="message" name="message" rows="5" required className={styles.textArea}></textarea>
          <button type="submit" className={styles.submitButton}>Enviar</button>
        </form>
      </div>
      <div className={styles.info}>
        <div className="map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387286.768600269!2d-122.46566303754634!3d37.78010164370148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808f7e35fd35f883%3A0x8092a8c46df5cb13!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1623348443643!5m2!1sen!2sus"
                width="500"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
        </div>
        <div>
          <h2>Endereço</h2>
          <p>endereço</p>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;