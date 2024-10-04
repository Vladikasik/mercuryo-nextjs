import { useRouter } from 'next/router';
import crypto from 'crypto';
import React from 'react';

export default function Home() {
  const router = useRouter();

  // Function to generate the URL and redirect
  const handleRedirect = () => {
    const address = 'Bsw8DaAn7tb7n4AuP1WWVDS4BjEW3EVKnDwobqx8WYFC';
    const secret = 'secret';

    // Generate the signature using sha512
    const signatureInput = `${address}${secret}`;
    const signature = crypto.createHash('sha512').update(signatureInput).digest('hex');

    const baseUrl = 'https://exchange.mercuryo.io/';
    const widgetId = '27daec1a-932c-4543-a2b0-2ca4946cb590';

    // Defining query parameters
    const params = {
      widget_id: widgetId,
      type: 'buy',
      currency: 'USDC',
      network: 'SOLANA',
      amount: 30,
      fiat_currency: 'EUR',
      address: address,
      signature: signature,
    };

    // Function to serialize the parameters as query string
    const queryString = new URLSearchParams(params).toString();
    const finalUrl = `${baseUrl}?${queryString}`;

    // Redirect to the generated URL
    router.push(finalUrl);
  };

  return (
    <div>
      <h1>Mercuryo Widget Redirect with Signature</h1>
      {/* Button to trigger the redirect */}
      <button onClick={handleRedirect}>Go to Mercuryo Widget</button>
    </div>
  );
}