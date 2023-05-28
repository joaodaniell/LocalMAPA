import React from "react";
import "./mapStyles.css";
const Mapa = () => {
  return (
    <div>
      <h2>Mapa</h2>
      <br />
      <div id="mapa" data-testid="mapa">
        <iframe
          title="Localização da empresa"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3933.1989022703387!2d-35.7303309!3d-9.664039599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1679978970220!5m2!1spt-BR!2sbr"
          width="300"
          height="250"
          allowFullScreen=""
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Mapa;
