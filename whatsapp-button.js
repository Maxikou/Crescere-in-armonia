<!-- ✅ Bottone WhatsApp con orario personalizzato -->
<style>
  .whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 8px rgba(0,0,0,0.3);
    opacity: 0.7; /* semitrasparente */
    transition: opacity 0.3s ease, transform 0.2s ease;
    z-index: 9999;
  }

  .whatsapp-float:hover {
    opacity: 1;
    transform: scale(1.05);
  }

  .whatsapp-float img {
    width: 35px;
    height: 35px;
  }
</style>

<a id="whatsappButton" href="#" target="_blank" class="whatsapp-float" title="Chatta con noi su WhatsApp">
  <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
</a>

<script>
  // 🔧 CONFIGURAZIONE PERSONALIZZABILE
  const orarioApertura = 10;   // ora di apertura (es. 9 = 09:00)
  const orarioChiusura = 13:30;  // ora di chiusura (es. 18 = 18:00)
  const numeroWhatsApp = "3288041561"; // il tuo numero in formato internazionale (senza +)
  const messaggioPredefinito = "Ciao! Vorrei avere più informazioni.";
  const emailFallback = "crescereinarmonia.martaciflu@gmail.com"; // dove mandare mail se cliccano fuori orario
  const linkModuloContatto = "#custom-code-JbSFmmomx8"; // link al modulo contatto (opzionale)

  const oraAttuale = new Date().getHours();
  const inOrario = oraAttuale >= orarioApertura && oraAttuale < orarioChiusura;
  const btn = document.getElementById("whatsappButton");

  if (inOrario) {
    btn.href = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(messaggioPredefinito)}`;
  } else {
    // Fuori orario → scegli se mail o modulo
    btn.href = linkModuloContatto || `mailto:${emailFallback}?subject=Richiesta di contatto&body=Vorrei lasciare un messaggio.`;
    btn.title = "Fuori orario: lasciaci un messaggio";
  }
</script>
