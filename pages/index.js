import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://widget.mercuryo.io/embed.2.0.js";
    script.async = true;
    script.onload = () => {
      mercuryoWidget.run({
        widgetId: '27daec1a-932c-4543-a2b0-2ca4946cb590',
        host: document.getElementById('mercuryo-widget'),
        type: 'buy',
        fiatCurrency: 'EUR',
        cryptoCurrency: 'SOL',
        fiatAmount: 100,
      });
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div
      id="mercuryo-widget"
      style={{
        width: '100%',
        height: '100vh', // Adjust this as needed
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    ></div>
  );
}